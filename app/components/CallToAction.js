'use client';

export default function CallToAction() {
  return (
    <div className="bg-blue-600 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          ¿Listo para crear tu libro personalizado?
        </h2>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
            Crear un libro
          </button>
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            Ir a la Guía
          </button>
        </div>
      </div>
    </div>
  );
}