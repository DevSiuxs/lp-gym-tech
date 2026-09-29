import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { id: 1, name: 'CYBER DUMBBELL 20KG', price: '$299 USD', desc: 'Aleación de titanio con sensores biomecánicos incorporados.', img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'NEON PROTEIN ISOLATE', price: '$85 USD', desc: 'Fórmula de rápida absorción optimizada metabólicamente.', img: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'VISOR TRON V2', price: '$450 USD', desc: 'Headset AR de lectura muscular y frecuencia cardíaca.', img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80' },
];

export const ProductsEcommerce = () => {
  const [hoveredProduct, setHoveredProduct] = useState(products[0]);

  return (
    <section id="tienda" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black mb-12 uppercase text-[#00f0ff] border-b-2 border-[#00f0ff] pb-4">
        // EQUIPAMIENTO TECH
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Lista interactiva */}
        <div className="flex flex-col gap-6">
          {products.map((item) => (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredProduct(item)}
              whileHover={{ x: 15 }}
              className={`p-6 border-2 cursor-pointer transition-all ${
                hoveredProduct?.id === item.id
                  ? 'border-[#00f0ff] bg-black shadow-[6px_6px_0px_0px_#00f0ff]'
                  : 'border-zinc-800 bg-[#0a0a0c]'
              }`}
            >
              <h3 className="text-2xl font-bold uppercase">{item.name}</h3>
              <p className="font-mono text-[#00f0ff] font-bold mt-1">{item.price}</p>
            </motion.div>
          ))}
        </div>

        {/* Card Desplegada a la Derecha */}
        <div className="min-h-[350px] flex items-center justify-center border-4 border-[#00f0ff] p-6 bg-black relative shadow-[10px_10px_0px_0px_#00f0ff]">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredProduct.id}
              initial={{ x: 40, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -40, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center text-center"
            >
              <img
                src={hoveredProduct.img}
                alt={hoveredProduct.name}
                className="w-full h-48 object-cover border-2 border-[#00f0ff] mb-4"
              />
              <h4 className="text-xl font-black text-white uppercase">{hoveredProduct.name}</h4>
              <p className="font-mono text-xs text-gray-400 mt-2">{hoveredProduct.desc}</p>
              <button className="mt-4 bg-[#00f0ff] text-black font-black px-6 py-2 uppercase text-sm hover:bg-white transition-colors">
                ADQUIRIR
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
