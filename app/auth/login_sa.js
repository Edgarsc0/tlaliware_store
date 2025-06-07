"use server";

import { compare } from "bcrypt";
import { pool } from "../api/db/db";
import querys from "../api/db/querys";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
const JWT_SECRET = process.env.JWT_SECRET;

export async function handleSubmitLogIn(_prevState, formData) {
    const email = formData.get("email")?.trim().toLowerCase();
    const password = formData.get("password")?.trim();

    if (!email || !password) {
        return {
            success: false,
            message: "Por favor, completa todos los campos obligatorios.",
        };
    }

    try {
        const { rows } = await pool.query(querys.getUser, [email]);

        if (rows.length === 0) {
            return {
                success: false,
                message: "No existe el usuario ingresado.",
            };
        }

        const user = rows[0];
        const passwordIsValid = await compare(password, user.psw_hash);

        if (!passwordIsValid) {
            return {
                success: false,
                message: "La contraseña ingresada no es correcta.",
            };
        }


        //Guardar sesion
        const token = jwt.sign(
            {
                userId: user.id,
                userName: user.name,
                appat: user.appat,
                apmat: user.apmat,
                email: user.email
            },
            JWT_SECRET,
            { expiresIn: "2d" }
        );

        (await cookies()).set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24
        });

        return {
            success: true,
            message: "Inicio de sesión exitoso."
        };
    } catch (error) {
        console.error("Error en handleSubmitLogIn:", error);

        // Códigos comunes de error de red
        if (error.code === "ECONNREFUSED") {
            return {
                success: false,
                message: "No se pudo conectar a la base de datos. Por favor intenta más tarde.",
            };
        }

        if (error.code === "ETIMEDOUT") {
            return {
                success: false,
                message: "La conexión a la base de datos expiró (timeout). Intenta de nuevo más tarde.",
            };
        }

        return {
            success: false,
            message: "Ocurrió un error inesperado. Intenta nuevamente.",
        };
    }
}
