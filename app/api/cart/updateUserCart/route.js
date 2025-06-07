import { NextResponse } from "next/server";
import querys from "../../db/querys";
import { pool } from "../../db/db";

export async function POST(request) {
    try {
        const { option, userId } = await request.json();

        if (!option || !userId) {
            return NextResponse.json({
                success: false,
                message: "Faltan parámetros requeridos."
            }, { status: 400 });
        }

        let query;
        let params = [];

        switch (option) {
            case "incrementar":
                query = querys.incrementUserCart;
                params = [userId, 2];
                break;

            case "decrementar":
                query = querys.decrementUserCart;
                params = [userId];
                break;

            default:
                return NextResponse.json({
                    success: false,
                    message: "Opción inválida."
                }, { status: 400 });
        }

        await pool.query(query, params);

        return NextResponse.json({
            success: true,
            message: "Operación realizada correctamente."
        });

    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({
            success: false,
            message: "Error interno del servidor."
        }, { status: 500 });
    }
}
