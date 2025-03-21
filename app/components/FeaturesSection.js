'use client';

export default function FeaturesSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Crea personajes de varias maneras
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Puedes generar un personaje de varias formas. Puedes crear un personaje usando el formulario y ver una vista previa inmediata, o generar un personaje basado en tu foto o una imagen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Formulario</h3>
            <p className="text-gray-600">
              Crea un personaje usando nuestro formulario interactivo.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Desde tu foto</h3>
            <p className="text-gray-600">
              Genera un personaje basado en tu propia foto.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Desde una imagen</h3>
            <p className="text-gray-600">
              Sube una imagen y crea un personaje a partir de ella.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}