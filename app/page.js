"use client"

import BeneficiosSection from "./components/BeneficiosSection";
//import useSession from "@/hooks/useSession";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";

export default function Home() {
  /*
    const { session, loading, isAuthenticated } = useSession();
  
    if (loading) return <p>Cargando sesión...</p>;
  
    if (!isAuthenticated) return <p>No estas autenticado</p>
  */
  return (
    <>

      <main id="main-content" role="main">
        <ProductSection />
        <BeneficiosSection />
      </main>
      <Footer />
    </>
  );
}
