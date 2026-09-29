import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "MÁXIMA POTENCIA EN CADA SERIE",
    desc: "Zona de peso libre con biomecánica avanzada y seguimiento digital.",
    bgImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80",
    cardTitle: "Área de Pesas Ultra",
    cardDesc: "Equipamiento de alta precisión para hipertrofia."
  },
  {
    id: 2,
    title: "CARDIO Y RESISTENCIA EXTREMA",
    desc: "Optimiza tu consumo de oxígeno con métricas biométricas en vivo.",
    bgImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80",
    cardTitle: "Zona Cardiovascular",
    cardDesc: "Cintas y ergómetros conectados al sistema Tron."
  },
  {
    id: 3,
    title: "ENTRENAMIENTO FUNCIONAL",
    desc: "Supera tus límites en circuitos diseñados para atletas de élite.",
    bgImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1920&q=80",
    cardTitle: "Circuito Atómico",
    cardDesc: "Espacio de acondicionamiento de alta densidad."
  }
];

export const PhotoCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="carrusel" className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-between p-8 md:p-16 border-y-4 border-[#00f0ff]">

      {/* 1. IMAGEN DE FONDO COMPLETA CON OVERLAY OSCURO (Para no perder contraste) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[index].bgImage}
            alt="Fondo Gym"
            className="w-full h-full object-cover filter brightness-40 contrast-125 grayscale"
          />
          {/* Sombra/Gradiente para mantener la legibilidad brutalista */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* 2. TEXTO PRINCIPAL SOBRE EL FONDO (Izquierda/Centro) */}
      <div className="relative z-10 max-w-2xl mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
              {slides[index].title}
            </h2>
            <p className="font-mono text-gray-300 text-sm md:text-base mt-4 border-l-4 border-[#00f0ff] pl-4 bg-black/60 py-2">
              {slides[index].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. BARRA DE NAVEGACIÓN Y CARRUSEL INFERIOR (Estilo Veluno) */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6 w-full">

        {/* Indicador de posición (ej: 01 --------- 03) */}
        <div className="flex items-center gap-4 font-mono text-[#00f0ff] font-bold text-lg bg-black/80 p-2 border-2 border-[#00f0ff]">
          <span>0{index + 1}</span>
          <div className="w-24 md:w-40 h-1 bg-zinc-800 relative">
            <motion.div
              className="h-full bg-[#00f0ff]"
              animate={{ width: `${((index + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="text-gray-500">0{slides.length}</span>
        </div>

        {/* Tarjeta del Carrusel + Controles */}
        <div className="flex items-center gap-4">

          {/* Card Desplazable del Carrusel */}
          <div className="w-64 md:w-80 bg-black/90 border-4 border-[#00f0ff] p-4 shadow-[8px_8px_0px_0px_#00f0ff]">
            <div className="h-32 overflow-hidden mb-3 border-2 border-[#00f0ff]">
              <img
                src={slides[(index + 1) % slides.length].bgImage}
                alt="Siguiente"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <p className="font-mono text-[10px] text-[#00f0ff] uppercase tracking-widest">// SIGUIENTE SECCIÓN</p>
            <h4 className="font-black text-white text-base uppercase truncate">
              {slides[(index + 1) % slides.length].cardTitle}
            </h4>
          </div>

          {/* Botones de navegación circular/brutalistas */}
          <div className="flex flex-col gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-black border-2 border-[#00f0ff] text-[#00f0ff] flex items-center justify-center font-mono font-bold hover:bg-[#00f0ff] hover:text-black transition-all"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-[#00f0ff] border-2 border-[#00f0ff] text-black flex items-center justify-center font-mono font-bold hover:bg-white transition-all"
            >
              →
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
