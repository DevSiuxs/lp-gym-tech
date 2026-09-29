import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Importación de Componentes
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhotoCarousel } from './components/PhotoCarousel';
import { ProductsEcommerce } from './components/ProductsEcommerce';
import { RegistrationSection } from './components/RegistrationSection';

// Rutas de Imágenes
import boyImage from './assets/boy-glasses.jpg'; // Chico con lentes
import athleteImage from './assets/athlete-dark.jpg'; // Atleta a oscuras

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula tiempo de carga inicial
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-[#00f0ff] selection:text-black">
      {/* 1. Pantalla de Carga Animada */}
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Navegación Fija */}
          <Navbar />

          {/* 2. Hero Section (3 Columnas 30vw) */}
          <HeroSection boyImage={boyImage} />

          {/* 3. Carrusel con Cambio Dinámico de Fondo */}
          <PhotoCarousel />

          {/* 4. Sección E-commerce con Despliegue Hover */}
          <ProductsEcommerce />

          {/* 5. Sección de Inscripción con Skeleton Loader */}
          <RegistrationSection athleteImage={athleteImage} />

          {/* Footer requerido */}
          <footer className="border-t-2 border-[#00f0ff] py-8 text-center font-mono text-sm text-gray-400 bg-black">
            <p>© {new Date().getFullYear()} GYM TECH — Diseñado por Edson Gaxiola</p>
          </footer>
        </>
      )}
    </div>
  );
}
