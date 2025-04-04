'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CallToAction from './components/CallToAction';
import FeaturesSection from './components/FeaturesSection';
import HeroSection from './components/HeroSection';
import Menu from './components/Menu';
import ParticleBackground from './components/ParticleBackground';
export default function Home() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    router.push('/crear-libro'); // Redirige al flujo de plantillas
  };

  return (
    <>
      <ParticleBackground />
      <Menu />
      <FeaturesSection />
      <HeroSection />


      <div className="min-h-[60vh] flex items-center justify-center p-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
        >
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
            ✨ Crea tu libro mágico
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Edad del niño
              </label>
              <input
                {...register('edad', { required: 'Este campo es obligatorio' })}
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.edad && (
                <p className="text-red-500 text-sm mt-1">{errors.edad.message}</p>
              )}
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-4">
                <img
                  src="/loading.gif"  // Asegúrate de tener este GIF en public/
                  alt="Generando libro..."
                  className="w-32 h-32"
                />
                <p className="text-gray-600 mt-2">Creando tu historia única...</p>
              </div>
            )}

            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? 'Generando...' : 'Comenzar →'}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <CallToAction />
    </>
  );
}