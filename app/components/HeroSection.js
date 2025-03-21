'use client';

export default function HeroSection() {
  return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Crea un libro personalizado en el que tú eres el personaje principal
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Somos uno de los pocos que pueden presumir de **personajes consistentes** generados por IA.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
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