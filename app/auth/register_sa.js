"use server";

import { pool } from "../api/db/db";
import querys from "../api/db/querys";
import { hash } from "bcrypt";

export async function handleSubmitRegister(_prevState, formData) {
    const nombre = formData.get("nombre")?.trim();
    const appat = formData.get("appat")?.trim();
    const apmat = formData.get("apmat")?.trim();
    const email = formData.get("email")?.trim();
    const password = formData.get("password");

    if (!nombre || !appat || !email || !password) {
        return {
            success: false,
            message: "Por favor, completa todos los campos obligatorios.",
        };
    }

    try {
        const hashedPassword = await hash(password, 10);

        await pool.query(querys.insertUser, [
            nombre,
            appat,
            apmat,
            email,
            hashedPassword,
        ]);

        return {
            success: true,
            message: "Registro exitoso, puedes ahora iniciar sesión.",
        };
    } catch (error) {

        console.error("Error en handleSubmitRegister:", error);


        /**ERRORES TIPICOS DE RED RELACIONADOS CON BASE DE DATOS */
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

        /**CORREO ELECTRONICO DUPLICADO */
        if (error.code === "23505") {
            return {
                success: false,
                message: "El correo electrónico ya está registrado.",
            };
        }

        /**ERROR DESCONOCIDO */
        return {
            success: false,
            message: "Ocurrió un error al registrar el usuario.",
        };
    }
}
