import { pool } from "../../db/db";
import querys from "../../db/querys";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { userId } = await request.json();

        if (!userId) {
            return NextResponse.json({
                success: false,
                message: "Faltan parámetros requeridos."
            }, { status: 400 });
        }

        const query = querys.getCurrentUserCart;

        const res = await pool.query(query, [userId]);

        return NextResponse.json({
            success: true,
            message: "Operación realizada correctamente.",
            count: res.rows[0]
        });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({
            success: false,
            message: "Error interno del servidor."
        }, { status: 500 });
    }
}