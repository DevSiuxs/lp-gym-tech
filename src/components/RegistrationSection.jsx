import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const RegistrationSection = ({ athleteImage }) => {
  const [loading, setLoading] = useState(true);

  // Simulación de Skeleton Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="registro" className="relative min-h-screen flex items-center justify-center p-6 my-12">
      {/* Fondo del Atleta en la Oscuridad */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={athleteImage}
          alt="Atleta en Sombras"
          className="w-full h-full object-cover opacity-20 filter contrast-200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-xl w-full border-4 border-[#00f0ff] bg-black/90 p-8 shadow-[12px_12px_0px_0px_#00f0ff]">
        <h2 className="text-3xl font-black text-center text-[#00f0ff] uppercase mb-6">
          // ÚNETE A GYM TECH
        </h2>

        {loading ? (
          /* Skeleton Loader Component */
          <div className="flex flex-col gap-4 animate-pulse">
            <div className="h-12 bg-zinc-800 border border-[#00f0ff]/30 rounded" />
            <div className="h-12 bg-zinc-800 border border-[#00f0ff]/30 rounded" />
            <div className="h-12 bg-zinc-800 border border-[#00f0ff]/30 rounded" />
            <div className="h-14 bg-[#00f0ff]/20 rounded mt-4" />
          </div>
        ) : (
          /* Formulario */
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block font-mono text-xs text-[#00f0ff] mb-1">NOMBRE COMPLETO</label>
              <input
                type="text"
                placeholder="EDSON GAXIOLA"
                className="w-full bg-black border-2 border-zinc-700 p-3 text-white font-mono focus:border-[#00f0ff] outline-none"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-[#00f0ff] mb-1">CORREO ELECTRÓNICO</label>
              <input
                type="email"
                placeholder="atleta@gymtech.com"
                className="w-full bg-black border-2 border-zinc-700 p-3 text-white font-mono focus:border-[#00f0ff] outline-none"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-[#00f0ff] mb-1">PLAN DE ENTRENAMIENTO</label>
              <select className="w-full bg-black border-2 border-zinc-700 p-3 text-white font-mono focus:border-[#00f0ff] outline-none">
                <option>PROTOCOLO TRON (ILIMITADO)</option>
                <option>BIOMECÁNICO BASE</option>
              </select>
            </div>
            <button className="mt-4 w-full bg-[#00f0ff] text-black font-black py-4 uppercase hover:bg-white transition-colors">
              CONFIRMAR INSCRIPCIÓN
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};
