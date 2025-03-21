'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Menu from './components/Menu';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CallToAction from './components/CallToAction';

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    const response = await fetch('/api/generar-historia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (!response.ok) {
      console.error('Error en la respuesta del servidor:', response.statusText);
      return;
    }

    const { cuento } = await response.json();

    // Guardar cuento en localStorage
    localStorage.setItem('cuentoGenerado', cuento);

    // Redirige a la página donde se mostrará el cuento
    router.push('/libro');
  };

  return (
    <>
    <Menu />
      {/* Sección Hero */}
      <HeroSection />

      {/* Sección de características */}
      <FeaturesSection />

      {/* Llamado a la acción */}
      <CallToAction />
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x"></div>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-blue-400 p-6">
      <motion.div 
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">📖 Crea un libro mágico</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Edad del niño</label>
            <input
              {...register('edad', { required: 'La edad es obligatoria' })}
              type="number"
              placeholder="Ejemplo: 5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.edad && <p className="text-red-500 text-sm mt-1">{errors.edad.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Tema del libro</label>
            <input
              {...register('tema', { required: 'El tema es obligatorio' })}
              placeholder="Ejemplo: Aventuras en el espacio"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.tema && <p className="text-red-500 text-sm mt-1">{errors.tema.message}</p>}
          </div>

          {/* Animación con imagen */}
          {loading && (
            <motion.div
              className="flex justify-center mt-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
            >
              <img 
                src="/giphy.webp" 
                alt="Escribiendo historia" 
                className="w-32 h-32"
              />
            </motion.div>
          )}

          {/* Botón animado */}
          <motion.button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? 'Generando historia...' : '📚 Crear libro'}
          </motion.button>
        </form>
      </motion.div>
    </div>
    </>
  );
}
