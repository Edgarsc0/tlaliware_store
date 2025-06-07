// Header.tsx (componente cliente)
'use client'

import { useEffect, useState } from "react"
import headerStyles from "../styles/header.module.css"
import CartModal from "./CartModal"
import { useCart } from "@/context/CarContext"
import useSession from "@/hooks/useSession"
import { logout } from "@/actions/logout"

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { session, loading, isAuthenticated } = useSession()
    const { cart } = useCart()

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }

    const handleLogout = async () => {
        await logout() // llama a la Server Action
        window.location.reload() // recarga la página
    }

    return (
        <>
            <header role="banner">
                <div className={headerStyles.containerHeader}>
                    <div className={headerStyles.logo}>
                        <a href="/" className={headerStyles.titulogo} aria-label="TLALIWARE - Tienda Online">
                            TLALIWARE
                        </a>
                    </div>

                    <nav role="navigation" aria-label="Navegación principal">
                        <ul>
                            <li>
                                <a href="/" aria-current="page">Inicio</a>
                            </li>
                            <li>
                                {isAuthenticated ? (
                                    <a href="/user">{`Bienvenido ${session?.userName}`}</a>
                                ) : (
                                    <a href="/auth">Iniciar Sesión</a>
                                )}
                            </li>
                            <li>
                                {isAuthenticated && (
                                    <a
                                        style={{ cursor: "pointer" }}
                                        className={headerStyles.logoutButton}
                                        onClick={handleLogout}
                                    >
                                        Cerrar Sesión
                                    </a>
                                )}
                            </li>
                            <li>
                                {isAuthenticated && (
                                    <button
                                        className={headerStyles.cartButton}
                                        aria-label="Abrir carrito de compras"
                                        aria-describedby="cart-count"
                                        type="button"
                                        onClick={openModal}
                                    >
                                        <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                                        <span className={headerStyles.cartCount} aria-label="productos en carrito">
                                            {cart}
                                        </span>
                                    </button>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <CartModal
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                handleOverlayClick={handleOverlayClick}
            />
        </>
    )
}
