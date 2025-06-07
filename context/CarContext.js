"use client";

import { createContext, useContext, useState, useEffect } from "react";
import useSession from "@/hooks/useSession";

const CartContext = createContext();

const updateUserCart = async (option, session) => {
    try {
        const res = await fetch("/api/cart/updateUserCart", {
            method: "POST",
            body: JSON.stringify({ option, userId: session.userId }),
            headers: { "Content-Type": "application/json" },
        });
        return res.ok;
    } catch (err) {
        console.error("Error actualizando el carrito:", err);
        return false;
    }
};

export const CartProvider = ({ children }) => {
    const { session, loading, isAuthenticated } = useSession();
    const [cart, setCart] = useState(0);

    useEffect(() => {
        if (loading || !isAuthenticated || !session?.userId) return;

        async function fetchAndSetCart() {
            try {
                const res = await fetch("/api/cart/getCurrentUserCart", {
                    method: "POST",
                    body: JSON.stringify({ userId: session.userId }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (!res.ok) throw new Error("Error al cargar carrito");
                const data = await res.json();
                setCart(data.count?.quantity ?? 0);
            } catch (err) {
                console.error("Error cargando el carrito:", err);
            }
        }

        fetchAndSetCart();
    }, [loading, isAuthenticated, session?.userId]);

    const addToCart = async () => {
        if (session) {
            const ok = await updateUserCart("incrementar", session);
            if (ok) setCart(prev => prev + 1);
        }
    };

    const removeFromCart = async () => {
        if (session) {
            const ok = await updateUserCart("decrementar", session);
            if (ok) setCart(prev => Math.max(prev - 1, 0));
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe usarse dentro de un CartProvider');
    }
    return context;
};
