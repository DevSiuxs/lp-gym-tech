import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = ({ boyImage }) => {
  return (
    <section id="hero" className="min-h-screen pt-24 px-4 flex flex-col md:flex-row items-center justify-center gap-6 overflow-hidden">

      {/* Columna Izquierda (30vw): Entra de derecha a izquierda */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full md:w-[30vw] border-4 border-[#00f0ff] p-6 bg-black shadow-[8px_8px_0px_0px_#00f0ff]"
      >
        <h1 className="text-4xl md:text-5xl font-black uppercase leading-none mb-4">
          EVOLUCIÓN <br />
          <span className="text-[#00f0ff]">BIOMECÁNICA</span>
        </h1>
        <p className="font-mono text-sm text-gray-300">
          Entrenamiento optimizado con algoritmos de alto rendimiento y análisis biomecánico en tiempo real.
        </p>
      </motion.div>

      {/* Columna Central (30vw): Entra de abajo a arriba con borde neón */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full md:w-[30vw] flex justify-center items-center relative"
      >
        <div className="relative border-4 border-[#00f0ff] rounded-2xl overflow-hidden p-2 group shadow-[0_0_30px_rgba(0,240,255,0.3)]">
          <motion.img
            src={boyImage}
            alt="Atleta Gym Tech"
            className="w-full h-auto object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </motion.div>

      {/* Columna Derecha (30vw): Entra de arriba a abajo */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full md:w-[30vw] border-4 border-white p-6 bg-[#0a0a0c] shadow-[-8px_8px_0px_0px_#00f0ff]"
      >
        <h3 className="text-2xl font-bold mb-2 uppercase text-[#00f0ff]">// MÉTRICAS 100% PRECISAS</h3>
        <p className="font-mono text-sm text-gray-300 mb-4">
          Supervisa tu ritmo cardíaco, esfuerzo neuromuscular y recuperación mediante nuestros visores cyberpunk de última generación.
        </p>
        <button className="w-full bg-[#00f0ff] text-black font-black py-3 uppercase tracking-wider hover:bg-white transition-colors">
          PROBAR PROTOCOLO
        </button>
      </motion.div>

    </section>
  );
};
