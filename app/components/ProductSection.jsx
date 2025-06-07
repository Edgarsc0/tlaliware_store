import styles from "../styles/mainContent.module.css";

import { useCart } from "@/context/CarContext";

export default function () {

    const { addToCart } = useCart();

    return (
        <section className={styles.productSection} aria-labelledby="product-title">
            <article className={styles.productCard} itemScope itemType="https://schema.org/Product">
                <div className={styles.productImage}>
                    <img
                        src="/producto.jpeg"
                        alt="Maceta inteligente con autorriego"
                        itemProp="image"
                        loading="lazy"
                        width="350"
                        height="350"
                    />
                </div>

                <div className={styles.productInfo}>
                    <h1 id="product-title" className={styles.productTitle} itemProp="name">
                        Maceta inteligente con autorriego
                    </h1>

                    <div className={styles.productDescription} itemProp="description">
                        <p>
                            La maceta regula automáticamente la cantidad de agua suministrada según la humedad del sustrato.
                            Esto optimiza la hidratación de las plantas sin intervención manual, evitando excesos o déficits de riego.
                        </p>
                        <ul className={styles.productFeatures} aria-label="Características del producto">
                            <li>App de monitoreo</li>
                            <li>Conexión via Bluetooth</li>
                            <li>Colores gris claro, crema y blanco</li>
                            <li>20cm alto x 18cm largo x 18cm ancho</li>
                        </ul>
                    </div>

                    <div className={styles.productPricing} itemProp="offers" itemScope itemType="https://schema.org/Offer">
                        <p className={styles.productPrice} itemProp="price" content="700.00">
                            $700.00
                            <span className={styles.currency} itemProp="priceCurrency" content="MXN">MXN</span>
                        </p>
                        <p className={styles.availability} itemProp="availability" content="https://schema.org/InStock">
                            <span className={styles.stockStatus}>✓ En stock</span>
                        </p>
                    </div>

                    <div className={styles.productActions}>
                        <button
                            className={styles.addToCart}
                            type="button"
                            aria-describedby="product-title product-price"
                            data-product-id="1"
                            data-product-name="Maceta inteligente con autorriego"
                            data-product-price="700.00"
                            onClick={addToCart}
                        >
                            <i className="fas fa-cart-plus" aria-hidden="true"></i>
                            Agregar al Carrito
                        </button>

                        <div className={styles.productMeta}>
                            <p className={styles.productCategory}>Categoría: <span itemProp="category">Tecnología verde</span></p>
                        </div>
                    </div>
                </div>
            </article>
        </section>

    )
}