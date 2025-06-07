import styles from "../styles/beneficios.module.css";

export default function () {
    return (
        <section className={styles.benefitsSection} aria-labelledby="benefits-title">
            <div className={styles.benefitsContainer}>
                <h2 id="benefits-title">¿Por qué elegir Tlaliware?</h2>
                <div className={styles.benefitsGrid}>
                    <div className={styles.benefitItem}>
                        <i className="fas fa-shipping-fast" aria-hidden="true"></i>
                        <h3>Envío Rápido</h3>
                        <p>Recibe tu pedido en máximo 7 dias hábiles</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <i className="fas fa-shield-alt" aria-hidden="true"></i>
                        <h3>Compra Segura</h3>
                        <p>Transacciones 100% seguras y protegidas</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <i className="fas fa-award" aria-hidden="true"></i>
                        <h3>Calidad Premium</h3>
                        <p>Productos de la más alta calidad</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <i className="fas fa-headset" aria-hidden="true"></i>
                        <h3>Soporte 24/7</h3>
                        <p>Atención al cliente siempre disponible</p>
                    </div>
                </div>
            </div>
        </section>
    )
}