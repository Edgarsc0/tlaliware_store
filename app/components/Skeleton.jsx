"use client"

import styles from "../styles/skeleton.module.css";

export default function SkeletonLoader() {
    return (
        <div className={styles.skeletonWrapper}>
            {/* Skeleton del ProductSection */}
            <section className={styles.productSkeleton}>
                <div className={styles.container}>
                    {/* Header skeleton */}
                    <div className={styles.headerSkeleton}>
                        <div className={styles.skeletonTitle}></div>
                        <div className={styles.skeletonSubtitle}></div>
                    </div>

                    {/* Products grid skeleton */}
                    <div className={styles.productsGrid}>
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className={styles.productCard}>
                                <div className={styles.productImage}></div>
                                <div className={styles.productInfo}>
                                    <div className={styles.productTitle}></div>
                                    <div className={styles.productPrice}></div>
                                    <div className={styles.productDescription}></div>
                                    <div className={styles.productButton}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skeleton del BeneficiosSection */}
            <section className={styles.beneficiosSkeleton}>
                <div className={styles.container}>
                    <div className={styles.beneficiosHeader}>
                        <div className={styles.skeletonTitle}></div>
                        <div className={styles.skeletonSubtitle}></div>
                    </div>

                    <div className={styles.beneficiosGrid}>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className={styles.beneficioCard}>
                                <div className={styles.beneficioIcon}></div>
                                <div className={styles.beneficioTitle}></div>
                                <div className={styles.beneficioDescription}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skeleton del Footer */}
            <footer className={styles.footerSkeleton}>
                <div className={styles.container}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerColumn}>
                            <div className={styles.footerLogo}></div>
                            <div className={styles.footerText}></div>
                            <div className={styles.footerText}></div>
                        </div>
                        <div className={styles.footerColumn}>
                            <div className={styles.footerTitle}></div>
                            <div className={styles.footerLink}></div>
                            <div className={styles.footerLink}></div>
                            <div className={styles.footerLink}></div>
                        </div>
                        <div className={styles.footerColumn}>
                            <div className={styles.footerTitle}></div>
                            <div className={styles.footerLink}></div>
                            <div className={styles.footerLink}></div>
                            <div className={styles.footerLink}></div>
                        </div>
                        <div className={styles.footerColumn}>
                            <div className={styles.footerTitle}></div>
                            <div className={styles.footerSocial}></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
