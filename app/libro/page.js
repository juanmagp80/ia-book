'use client';
import domtoimage from 'dom-to-image';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Libro() {
  const [cuento, setCuento] = useState('');
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cuentoGuardado = localStorage.getItem('cuentoGenerado');
    setCuento(cuentoGuardado || 'No hay cuento disponible.');
    setLoading(false);
  }, []);

  const descargarPDF = async () => {
    setDownloading(true);
    try {
      const input = document.getElementById('contenido-libro');
      const imgData = await domtoimage.toPng(input, { quality: 1 });

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (input.offsetHeight * imgWidth) / input.offsetWidth;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('mi-cuento-magico.pdf');
    } finally {
      setDownloading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <img src="/loading.gif" alt="Cargando..." className="w-32 h-32" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div
          id="contenido-libro"
          className="bg-white rounded-xl shadow-2xl overflow-hidden border-8 border-amber-100"
        >
          {/* Portada del libro */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Mi Cuento Mágico
            </h1>
            <p className="text-xl text-blue-100">Una historia creada especialmente para ti</p>
          </div>

          {/* Contenido del libro */}
          <div className="p-8 md:p-12 text-lg leading-relaxed">
            {cuento.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-6">{paragraph}</p>
            ))}
          </div>

          {/* Página final */}
          <div className="bg-amber-50 p-8 text-center italic text-gray-600">
            <p>Fin</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            onClick={() => router.push('/crear-libro')}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            Crear Otro Libro
          </motion.button>

          <motion.button
            onClick={descargarPDF}
            disabled={downloading}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow hover:shadow-lg transition flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            {downloading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generando PDF...
              </>
            ) : (
              '📥 Descargar PDF'
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}