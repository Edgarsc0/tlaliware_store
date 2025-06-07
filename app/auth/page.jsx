"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { handleSubmitRegister } from "./register_sa";
import { useActionState } from "react";
import toast from "react-hot-toast";
import { handleSubmitLogIn } from "./login_sa";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const initialState = { message: null };

export default function AuthComponent() {
    const containerRef = useRef(null);
    const router = useRouter();
    const { register } = useForm();

    // Acción y estado del server action para registro
    const [state, formAction] = useActionState(handleSubmitRegister, initialState);

    // Acción y estado del server action para login
    const [stateLogin, formActionLogin] = useActionState(handleSubmitLogIn, initialState);

    // Mostrar toasts cuando cambie el estado
    useEffect(() => {
        if (state.success) {
            window.location.reload();
        } else if (state.message) {
            toast.error(state.message);
        }
    }, [state]);

    useEffect(() => {
        if (stateLogin.success) {
            toast.success(stateLogin.message);
            window.location.href = "/";
        } else if (stateLogin.message) {
            toast.error(stateLogin.message);
        }
    }, [stateLogin]);

    const handleSignIn = () => {
        containerRef.current?.classList.remove(styles.toggle);
    };

    const handleSignUp = () => {
        containerRef.current?.classList.add(styles.toggle);
    };


    return (
        <>
            <div className={styles.containerWrapper}>
                <div className={styles.container} ref={containerRef}>
                    <div className={styles.containerForm}>
                        <form className={styles.signIn} action={formActionLogin}>
                            <h2 className={styles.texto}>Iniciar Sesión</h2>
                            <div className={styles.socialNetworks}>
                                <img src="/logo-facebook.svg" alt="Facebook" />
                                <img src="/logo-instagram.svg" alt="Instagram" />
                                <img src="/logo-tiktok.svg" alt="TikTok" />
                            </div>
                            <span className={styles.texto}>Use su correo y contraseña</span>
                            <div className={styles.containerInput}>
                                <input className={styles.texto} type="email" placeholder="Email" {...register("email", { required: true })} />
                            </div>
                            <div className={styles.containerInput}>
                                <input className={styles.texto} type="password" placeholder="Password" {...register("password", { required: true })} />
                            </div>
                            <a href="#">¿Olvidaste tu contraseña?</a>
                            <button className={styles.button} type="submit">INICIAR SESIÓN</button>
                        </form>
                    </div>

                    <div className={styles.containerForm}>
                        <form className={styles.signUp} action={formAction}>
                            <h2 className={styles.texto}>Registrarse</h2>
                            <div className={styles.socialNetworks}>
                                <img src="/logo-facebook.svg" alt="Facebook" />
                                <img src="/logo-instagram.svg" alt="Instagram" />
                                <img src="/logo-tiktok.svg" alt="TikTok" />
                            </div>
                            <span className={styles.texto}>Use su correo electrónico para registrarse</span>
                            <div className={styles.containerInput}>
                                <input className={styles.texto} type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
                            </div>
                            <div className={styles.containerInput}>
                                <input className={styles.texto} type="text" placeholder="Apellido Paterno" {...register("appat", { required: true })} />
                            </div>
                            <div className={styles.containerInput}>
                                <input className={styles.texto} type="text" placeholder="Apellido Materno" {...register("apmat")} />
                            </div>
                            <div className={styles.containerInput}>
                                <input className={styles.texto} type="email" placeholder="Email" {...register("email", { required: true })} />
                            </div>
                            <div className={styles.containerInput}>
                                <input className={styles.texto} type="password" placeholder="Password" {...register("password", { required: true })} />
                            </div>
                            <button className={styles.button} type="submit">REGISTRARSE</button>
                        </form>
                    </div>

                    <div className={styles.containerWelcome}>
                        <div className={`${styles.welcomeSignUp} ${styles.welcome}`}>
                            <h3>¡Bienvenido!</h3>
                            <p>Ingrese sus datos para acceder a la tienda online de Tlaliware</p>
                            <button className={styles.button} onClick={handleSignUp}>Registrarse</button>
                        </div>
                        <div className={`${styles.welcomeSignIn} ${styles.welcome}`}>
                            <h3>¡Hola!</h3>
                            <p>Regístrese con sus datos personales para acceder a la tienda online de Tlaliware</p>
                            <button className={styles.button} onClick={handleSignIn}>Iniciar Sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
