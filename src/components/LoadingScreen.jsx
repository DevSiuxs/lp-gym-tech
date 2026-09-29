import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08080a]"
    >
      <div className="relative flex items-center justify-center w-40 h-40">
        {/* Anillo de carga circular en azul TRON */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#00f0ff] border-r-[#00f0ff]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          style={{
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)'
          }}
        />

        {/* Mancuerna girando al centro */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <Dumbbell className="w-16 h-16 text-[#00f0ff] drop-shadow-[0_0_10px_#00f0ff]" />
        </motion.div>
      </div>

      <motion.p
        className="mt-6 text-xl tracking-[0.3em] font-mono font-bold text-[#00f0ff]"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        GYM TECH_LOADING...
      </motion.p>
    </motion.div>
  );
};
