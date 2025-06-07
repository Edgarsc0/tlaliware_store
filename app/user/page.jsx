"use client"

import { useState } from "react"
import styles from "../styles/userProfile.module.css"

export default function UserProfile() {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            street: "Av. Insurgentes Sur 1234",
            city: "Ciudad de México",
            state: "CDMX",
            postal_code: "03100",
        },
        {
            id: 2,
            street: "Calle Revolución 567",
            city: "Guadalajara",
            state: "Jalisco",
            postal_code: "44100",
        },
    ])

    const [showForm, setShowForm] = useState(false)
    const [nextId, setNextId] = useState(3)
    const [notification, setNotification] = useState(null)

    

    const [userInfo] = useState({
        fullName: "Juan Carlos Pérez García",
        email: "juan.perez@email.com",
    })

    const [formData, setFormData] = useState({
        street: "",
        city: "",
        state: "",
        postal_code: "",
    })

    const showAddressForm = () => {
        setShowForm(true)
    }

    const hideAddressForm = () => {
        setShowForm(false)
        setFormData({
            street: "",
            city: "",
            state: "",
            postal_code: "",
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newAddress = {
            id: nextId,
            ...formData,
        }

        setAddresses((prev) => [...prev, newAddress])
        setNextId((prev) => prev + 1)
        hideAddressForm()
        showNotification("Dirección agregada exitosamente", "success")
    }

    const deleteAddress = (id) => {
        if (confirm("¿Estás seguro de que deseas eliminar esta dirección?")) {
            setAddresses((prev) => prev.filter((address) => address.id !== id))
            showNotification("Dirección eliminada exitosamente", "success")
        }
    }

    const showNotification = (message, type = "info") => {
        setNotification({ message, type })
        setTimeout(() => {
            setNotification(null)
        }, 3000)
    }

    const goBack = () => {
        window.location.href = "/";
    }

    return (
        <div className={styles.pageContainer}>
            {/* Notification */}
            {notification && (
                <div className={`${styles.notification} ${styles.notificationSuccess} ${styles.show}`}>
                    <i className="fas fa-check-circle"></i>
                    {notification.message}
                </div>
            )}

            {/* Header */}
            <header className={styles.pageHeader}>
                <div className={styles.headerContent}>
                    <h1 className={styles.pageTitle}>
                        <i className="fas fa-user-circle"></i>
                        Mi Perfil
                    </h1>
                    <button className={styles.backBtn} onClick={goBack}>
                        <i className="fas fa-arrow-left"></i>
                        Volver
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className={styles.mainContent}>
                {/* Información Personal */}
                <section className={styles.profileSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <i className="fas fa-user"></i>
                            Información Personal
                        </h2>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.infoItem}>
                            <label className={styles.infoLabel}>Nombre completo:</label>
                            <span className={styles.infoValue}>{userInfo.fullName}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <label className={styles.infoLabel}>Correo electrónico:</label>
                            <span className={styles.infoValue}>{userInfo.email}</span>
                        </div>
                    </div>
                </section>

                {/* Direcciones de Entrega */}
                <section className={styles.profileSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <i className="fas fa-map-marker-alt"></i>
                            Direcciones de Entrega
                        </h2>
                        <button className={styles.addAddressBtn} onClick={showAddressForm}>
                            <i className="fas fa-plus"></i>
                            Agregar Dirección
                        </button>
                    </div>

                    {/* Formulario para agregar dirección */}
                    {showForm && (
                        <div className={styles.addressFormContainer}>
                            <form className={styles.addressForm} onSubmit={handleSubmit}>
                                <h3 className={styles.formTitle}>Nueva Dirección</h3>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="street">Calle y número:</label>
                                        <input
                                            type="text"
                                            id="street"
                                            name="street"
                                            value={formData.street}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="city">Ciudad:</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="state">Estado:</label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="postal_code">Código postal:</label>
                                        <input
                                            type="text"
                                            id="postal_code"
                                            name="postal_code"
                                            value={formData.postal_code}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={styles.formActions}>
                                    <button type="submit" className={styles.saveBtn}>
                                        <i className="fas fa-save"></i>
                                        Guardar Dirección
                                    </button>
                                    <button type="button" className={styles.cancelBtn} onClick={hideAddressForm}>
                                        <i className="fas fa-times"></i>
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Tabla de direcciones */}
                    <div className={styles.addressesTableContainer}>
                        {addresses.length > 0 ? (
                            <table className={styles.addressesTable}>
                                <thead>
                                    <tr>
                                        <th>Calle</th>
                                        <th>Ciudad</th>
                                        <th>Estado</th>
                                        <th>Código Postal</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {addresses.map((address) => (
                                        <tr key={address.id}>
                                            <td>{address.street}</td>
                                            <td>{address.city}</td>
                                            <td>{address.state}</td>
                                            <td>{address.postal_code}</td>
                                            <td>
                                                <button
                                                    className={styles.deleteBtn}
                                                    onClick={() => deleteAddress(address.id)}
                                                    title="Eliminar dirección"
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className={styles.emptyAddresses}>
                                <div className={styles.emptyIcon}>
                                    <i className="fas fa-map-marked-alt"></i>
                                </div>
                                <h3>No tienes direcciones registradas</h3>
                                <p>Agrega tu primera dirección de entrega para facilitar tus compras</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}
