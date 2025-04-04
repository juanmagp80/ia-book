'use client';
import { Lightbulb, Pencil, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-white pt-32 py-16 px-4 text-center">
      {/* Título principal */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Consigue tu cuentito personalizado en menos de 1 minuto
      </h1>

      {/* Contenedor de características */}
      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-4xl mx-auto">
        {/* Opción 1 */}
        <div className="flex-1">
          <div className="bg-orange-100 w-16 h-16 flex items-center justify-center mx-auto rounded-full">
            <Lightbulb className="text-orange-500 w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold mt-4">Elegí el tema de tu Cuento</h3>
          <p className="text-gray-600 mt-2">
            Podés elegir cualquier tema que se te ocurra. Desde historias de la vida real hasta las más locas que te imagines.
          </p>
        </div>

        {/* Opción 2 */}
        <div className="flex-1">
          <div className="bg-orange-100 w-16 h-16 flex items-center justify-center mx-auto rounded-full">
            <Pencil className="text-orange-500 w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold mt-4">Escribí tu Cuento en un párrafo</h3>
          <p className="text-gray-600 mt-2">
            Describí brevemente tu historia. No te preocupes si es corta, nosotros nos encargamos de darle vida.
          </p>
        </div>

        {/* Opción 3 */}
        <div className="flex-1">
          <div className="bg-orange-100 w-16 h-16 flex items-center justify-center mx-auto rounded-full">
            <Sparkles className="text-orange-500 w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold mt-4">Tu Cuento listo en 60 segundos</h3>
          <p className="text-gray-600 mt-2">
            Nuestra IA se encarga de crear una historia única y personalizada en base a tu idea.
          </p>
        </div>
      </div>

      {/* Botón principal */}
      <div className="mt-10">
        <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition duration-300">
          📝 Escribí un Cuentito
        </button>
      </div>
    </section>
  );
}
