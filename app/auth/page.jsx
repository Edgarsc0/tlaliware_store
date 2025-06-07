"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { handleSubmitRegister } from "./register_sa"
import { useActionState } from "react"
import toast from "react-hot-toast"
import { handleSubmitLogIn } from "./login_sa"
import styles from "./styles.module.css"
import { useRouter } from "next/navigation"

const initialState = { message: null }

export default function AuthComponent() {
    const [isRegister, setIsRegister] = useState(false)
    const router = useRouter()
    const { register, reset } = useForm()

    // Acción y estado del server action para registro
    const [state, formAction] = useActionState(handleSubmitRegister, initialState)

    // Acción y estado del server action para login
    const [stateLogin, formActionLogin] = useActionState(handleSubmitLogIn, initialState)

    // Mostrar toasts cuando cambie el estado
    useEffect(() => {
        if (state.success) {
            window.location.reload()
        } else if (state.message) {
            toast.error(state.message)
        }
    }, [state])

    useEffect(() => {
        if (stateLogin.success) {
            toast.success(stateLogin.message)
            window.location.href = "/"
        } else if (stateLogin.message) {
            toast.error(stateLogin.message)
        }
    }, [stateLogin])

    const toggleForm = () => {
        setIsRegister(!isRegister)
        reset() // Limpiar formulario al cambiar
    }

    return (
        <div className={styles.authWrapper}>
            {/* Background decorativo */}
            <div className={styles.backgroundDecoration}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
            </div>

            {/* Card principal */}
            <div className={styles.authCard}>
                {/* Header del card */}
                <div className={styles.cardHeader}>
                    <div className={styles.logo}>
                        <i className={isRegister ? "fas fa-seedling" : "fas fa-leaf"}></i>
                    </div>
                    <h1 className={styles.brandName}>TLALIWARE</h1>
                    <p className={styles.brandSubtitle}>{isRegister ? "Únete a nuestra comunidad" : "Tienda Online"}</p>
                </div>

                {/* Contenido del formulario */}
                <div className={styles.cardContent}>
                    <div className={styles.formHeader}>
                        <h2 className={styles.formTitle}>{isRegister ? "Crear Cuenta" : "Iniciar Sesión"}</h2>
                        <p className={styles.formSubtitle}>{isRegister ? "Regístrate para comenzar" : "Accede a tu cuenta"}</p>
                    </div>

                    {/* Botones sociales */}
                    <div className={styles.socialLogin}>
                        <button type="button" className={styles.socialBtn}>
                            <i className="fab fa-facebook-f"></i>
                        </button>
                        <button type="button" className={styles.socialBtn}>
                            <i className="fab fa-instagram"></i>
                        </button>
                        <button type="button" className={styles.socialBtn}>
                            <i className="fab fa-tiktok"></i>
                        </button>
                    </div>

                    <div className={styles.divider}>
                        <span>{isRegister ? "o regístrate con email" : "o continúa con email"}</span>
                    </div>

                    {/* Formulario dinámico */}
                    {isRegister ? (
                        // Formulario de registro
                        <form className={styles.authForm} action={formAction}>
                            <div className={styles.inputRow}>
                                <div className={styles.inputGroup}>
                                    <div className={styles.inputWrapper}>
                                        <i className="fas fa-user"></i>
                                        <input
                                            type="text"
                                            placeholder="Nombre"
                                            {...register("nombre", { required: true })}
                                            className={styles.input}
                                        />
                                    </div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <div className={styles.inputWrapper}>
                                        <i className="fas fa-user"></i>
                                        <input
                                            type="text"
                                            placeholder="Apellido Paterno"
                                            {...register("appat", { required: true })}
                                            className={styles.input}
                                        />
                                    </div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <div className={styles.inputWrapper}>
                                        <i className="fas fa-user"></i>
                                        <input
                                            type="text"
                                            placeholder="Apellido Materno"
                                            {...register("apmat", { required: true })}
                                            className={styles.input}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <div className={styles.inputWrapper}>
                                    <i className="fas fa-envelope"></i>
                                    <input
                                        type="email"
                                        placeholder="Correo electrónico"
                                        {...register("email", { required: true })}
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <div className={styles.inputWrapper}>
                                    <i className="fas fa-lock"></i>
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
                                        {...register("password", { required: true })}
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            {/*<div className={styles.formOptions}>
                                <label className={styles.checkbox}>
                                    <input type="checkbox" required />
                                    <span className={styles.checkmark}></span>
                                    Acepto los términos y condiciones
                                </label>
                            </div>*/}

                            <button type="submit" className={styles.primaryBtn}>
                                <span>Crear Cuenta</span>
                                <i className="fas fa-user-plus"></i>
                            </button>
                        </form>
                    ) : (
                        // Formulario de login
                        <form className={styles.authForm} action={formActionLogin}>
                            <div className={styles.inputGroup}>
                                <div className={styles.inputWrapper}>
                                    <i className="fas fa-envelope"></i>
                                    <input
                                        type="email"
                                        placeholder="Correo electrónico"
                                        {...register("email", { required: true })}
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <div className={styles.inputWrapper}>
                                    <i className="fas fa-lock"></i>
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
                                        {...register("password", { required: true })}
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            {/*<div className={styles.formOptions}>
                                <label className={styles.checkbox}>
                                    <input type="checkbox" />
                                    <span className={styles.checkmark}></span>
                                    Recordarme
                                </label>
                                <a href="#" className={styles.forgotPassword}>
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>*/}

                            <button type="submit" className={styles.primaryBtn}>
                                <span>Iniciar Sesión</span>
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </form>
                    )}

                    {/* Switch entre formularios */}
                    <div className={styles.switchForm}>
                        <p>
                            {isRegister ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
                            <button type="button" onClick={toggleForm} className={styles.switchBtn}>
                                {isRegister ? "Inicia sesión aquí" : "Regístrate aquí"}
                            </button>
                        </p>
                    </div>
                </div>

                {/* Footer del card con características */}
                <div className={styles.cardFooter}>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <i className="fas fa-shield-alt"></i>
                            <span>Seguro y confiable</span>
                        </div>
                        <div className={styles.feature}>
                            <i className="fas fa-leaf"></i>
                            <span>Productos ecológicos</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
