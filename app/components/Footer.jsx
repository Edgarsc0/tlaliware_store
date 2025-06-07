import styles from "../styles/footer.module.css";

export default function () {
    return (
        <footer role="contentinfo">
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>TLALIWARE</h3>
                    <p>Tecnología que crece en casa.</p>
                    <div className={styles.socialLinks} aria-label="Redes sociales">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=61575237980412" aria-label="Facebook" title="Síguenos en Facebook">
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/tlali_ware/" aria-label="Instagram" title="Síguenos en Instagram">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a target="_blank" href="https://www.tiktok.com/@tlaliware" aria-label="Twitter" title="Síguenos en Twitter">
                            <i className="fab fa-tiktok" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className={styles.footerSection}>
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="#" aria-describedby="external-link">Adquiere tu maceta</a></li>
                        {/*Landing en sobre nosotros */}
                        <li><a href="" aria-describedby="external-link">Sobre Nosotros</a></li>
                        <li><a href="#" aria-describedby="external-link">Contacto</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4>Información Legal</h4>
                    <ul>
                        <li><a href="#" aria-describedby="external-link">Términos y Condiciones</a></li>
                        <li><a href="#" aria-describedby="external-link">Política de Privacidad</a></li>
                        <li><a href="#" aria-describedby="external-link">Política de Devoluciones</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4>Contacto</h4>
                    <address>
                        <p><i className="fas fa-envelope" aria-hidden="true"></i> tlaliware.oficial@gmail.com</p>
                        <p><i className="fas fa-phone" aria-hidden="true"></i> +52 55 5407 1782</p>
                        <p><i className="fas fa-map-marker-alt" aria-hidden="true"></i> Ciudad de México, México</p>
                    </address>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; 2025 Tlaliware. Todos los derechos reservados.</p>
            </div>
        </footer>

    )
}