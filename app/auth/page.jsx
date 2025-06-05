"use client"

import { useRef } from "react";


export default function AuthComponent() {
    const containerRef = useRef(null);

    const handleSignIn = () => {
        containerRef.current?.classList.remove("toggle");
    };

    const handleSignUp = () => {
        containerRef.current?.classList.add("toggle");
    };

    return (
        <div className="container" ref={containerRef}>
            <div className="container-form">
                <form className="sign-in">
                    <h2>Iniciar Sesión</h2>
                    <div className="social-networks">
                        <img src="/logo-facebook.svg" />
                        <img src="/logo-instagram.svg" />
                        <img src="/logo-tiktok.svg" />
                    </div>
                    <span>Use su correo y contraseña</span>
                    <div className="container-input">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="container-input">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" placeholder="Password" />
                    </div>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                    <button className="button">INICIAR SESIÓN</button>
                </form>
            </div>

            <div className="container-form">
                <form className="sign-up">
                    <h2>Registrarse</h2>
                    <div className="social-networks">
                        <img src="/logo-facebook.svg" />
                        <img src="/logo-instagram.svg" />
                        <img src="/logo-tiktok.svg" />
                    </div>
                    <span>Use su correo electrónico para registrarse</span>
                    <div className="container-input">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text" placeholder="Nombre" name="nombre" required />
                    </div>
                    <div className="container-input">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text" placeholder="Apellido Paterno" name="apellido_paterno" required />
                    </div>
                    <div className="container-input">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text" placeholder="Apellido Materno" name="apellido_materno" required />
                    </div>
                    <div className="container-input">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="container-input">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" placeholder="Password" />
                    </div>
                    <button className="button">REGISTRARSE</button>
                </form>
            </div>

            <div className="container-welcome">
                <div className="welcome-sign-up welcome">
                    <h3>¡Bienvenido!</h3>
                    <p>Ingrese sus datos para acceder a la tienda online de Tlaliware</p>
                    <button className="button" onClick={handleSignUp}>Registrarse</button>
                </div>
                <div className="welcome-sign-in welcome">
                    <h3>¡Hola!</h3>
                    <p>Regístrese con sus datos personales para acceder a la tienda online de Tlaliware</p>
                    <button className="button" onClick={handleSignIn}>Iniciar Sesión</button>
                </div>
            </div>
        </div>
    );
}
