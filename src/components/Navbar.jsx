import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b-2 border-[#00f0ff] px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-black tracking-tighter text-white">
        GYM<span className="text-[#00f0ff]">.TECH</span>
      </div>
      <div className="hidden md:flex gap-8 font-mono text-sm tracking-wider uppercase">
        <a href="#hero" className="hover:text-[#00f0ff] transition-colors">// INICIO</a>
        <a href="#carrusel" className="hover:text-[#00f0ff] transition-colors">// ENTRENAMIENTO</a>
        <a href="#tienda" className="hover:text-[#00f0ff] transition-colors">// EQUIPO</a>
        <a href="#registro" className="hover:text-[#00f0ff] transition-colors">// MEMBRESÍA</a>
      </div>
    </nav>
  );
};
