"use client"

import headerStyles from "../styles/cartModal.module.css"
import { useCart } from "@/context/CarContext"

export default function ({ isModalOpen, closeModal, handleOverlayClick }) {
    const { cart, removeFromCart } = useCart()

    if (isModalOpen) {
        return (
            <div
                className={headerStyles.modalOverlay}
                onClick={handleOverlayClick}
                role="dialog"
                aria-modal="true"
                aria-labelledby="cart-modal-title"
            >
                <div className={headerStyles.modalContainer}>
                    {/* Fondo con gradiente */}
                    <div className={headerStyles.modalBackground}></div>

                    {/* Overlay con patrón sutil */}
                    <div className={headerStyles.modalPattern}></div>

                    {/* Contenido del modal */}
                    <div className={headerStyles.modalContent}>
                        {/* Header del modal */}
                        <div className={headerStyles.modalHeader}>
                            <div className={headerStyles.modalTitleSection}>
                                <div className={headerStyles.modalIcon}>
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <h2 id="cart-modal-title" className={headerStyles.modalTitle}>
                                    Carrito de Compras
                                </h2>
                            </div>
                            <button onClick={closeModal} className={headerStyles.modalCloseBtn} aria-label="Cerrar carrito">
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Contenido del modal */}
                        <div className={headerStyles.modalBody}>
                            <div className={headerStyles.emptyCart}>
                                <div className={headerStyles.emptyCartIconContainer}>
                                    <div className={headerStyles.emptyCartIcon}>
                                        <i className="fas fa-shopping-bag"></i>
                                    </div>
                                </div>
                                <h3 className={headerStyles.emptyCartTitle}>
                                    Tu carrito tiene {cart} elemento{`(s)`}{" "}
                                </h3>
                                {cart > 0 ? (
                                    <>
                                        <div className={headerStyles.productItem}>
                                            <p className={headerStyles.productDescription}>
                                                {cart} Maceta{`(s)`} inteligente{`(s)`} con autorriego
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <p className={headerStyles.emptyCartDescription}>
                                        Descubre nuestros increíbles productos y comienza tu experiencia de compra
                                    </p>
                                )}

                                {/* Decorative elements */}
                                <div className={headerStyles.decorativeDots}>
                                    <div className={`${headerStyles.dot} ${headerStyles.dot1}`}></div>
                                    <div className={`${headerStyles.dot} ${headerStyles.dot2}`}></div>
                                    <div className={`${headerStyles.dot} ${headerStyles.dot3}`}></div>
                                </div>
                            </div>
                        </div>

                        {/* Footer del modal */}
                        <div className={headerStyles.modalFooter}>
                            <div className={headerStyles.modalActions}>
                                <div className={headerStyles.totalSection}>
                                    <span className={headerStyles.totalLabel}>Total:</span>
                                    <span className={headerStyles.totalAmount}>${`${cart * 700}.00`}</span>
                                </div>

                                <button className={headerStyles.checkoutBtn} disabled={cart == 0}>
                                    {cart == 0 ? <i className="fas fa-lock"></i> : null}
                                    Proceder al Checkout
                                </button>

                                <button onClick={removeFromCart} className={headerStyles.deleteBtn} disabled={cart == 0}>
                                    {cart == 0 ? <i className="fas fa-lock"></i> : null}
                                    Eliminar producto
                                </button>

                                <button onClick={closeModal} className={headerStyles.continueBtn}>
                                    <i className="fas fa-arrow-left"></i>
                                    Continuar Comprando
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Glow effect */}
                    <div className={headerStyles.modalGlow}></div>
                </div>
            </div>
        )
    }
}
