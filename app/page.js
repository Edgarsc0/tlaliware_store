"use client"

import BeneficiosSection from "./components/BeneficiosSection";
import useSession from "@/hooks/useSession";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import SkeletonLoader from "./components/Skeleton";

export default function Home() {

  const { session, loading, isAuthenticated } = useSession();

  if (loading) return <SkeletonLoader />;

  return (
    <>

      <main id="main-content" role="main">
        <ProductSection isAuthenticated={isAuthenticated} />
        <BeneficiosSection />
      </main>
      <Footer />
    </>
  );
}
