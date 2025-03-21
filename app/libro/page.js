'use client';

import { useEffect, useState } from 'react';
import domtoimage from 'dom-to-image'; // Alternativa a html2canvas
import jsPDF from 'jspdf';


export default function Libro() {
  const [cuento, setCuento] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener el cuento desde localStorage
    const cuentoGuardado = localStorage.getItem('cuentoGenerado');
    console.log(cuentoGuardado); // Verifica si el valor se está recuperando correctamente
    setCuento(cuentoGuardado || 'No hay cuento disponible.');
    setLoading(false); // Finaliza la carga
  }, []);

  // Función para descargar el contenido como PDF
  const descargarPDF = () => {
    const input = document.getElementById('contenido-libro'); // Selecciona el contenedor del libro

    if (input) {
      // Oculta los botones temporalmente
      const botones = document.querySelectorAll('.ocultar-en-pdf');
      botones.forEach((boton) => (boton.style.display = 'none'));

      domtoimage
        .toPng(input, { quality: 1 }) // Captura el contenido como PNG
        .then((imgData) => {
          const pdf = new jsPDF('p', 'mm', 'a4'); // Crea un PDF en formato A4
          const imgWidth = 210; // Ancho del PDF (A4)
          const imgHeight = (input.offsetHeight * imgWidth) / input.offsetWidth; // Calcula la altura proporcional

          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight); // Añade la imagen al PDF
          pdf.save('cuento-generado.pdf'); // Descarga el PDF
        })
        .catch((error) => {
          console.error('Error al generar el PDF:', error);
        })
        .finally(() => {
          // Vuelve a mostrar los botones después de generar el PDF
          botones.forEach((boton) => (boton.style.display = 'block'));
        });
    }
  };

  // Si está cargando, muestra un mensaje de carga
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-xl text-center">
          <p className="text-xl text-black">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-xl">
        <div className="relative" id="contenido-libro">
          {/* Borde y sombra para simular un libro */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl border-4 border-gray-700 z-0"></div>

          {/* Título del libro */}
          <h1 className="text-5xl font-extrabold text-black text-center mb-8 relative z-10">
            ¡Tu Historia Generada!
          </h1>

          {/* Contenedor que simula las páginas del libro */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-400 text-justify relative z-10">
            <p className="text-xl text-black leading-relaxed whitespace-normal">
              {cuento}
            </p>
          </div>

          {/* Botones para generar otro cuento y descargar PDF */}
          <div className="mt-6 flex justify-center gap-4 relative z-10">
            <button
              onClick={() => window.location.reload()}
              className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition ocultar-en-pdf"
            >
              Generar Otro Cuento
            </button>
            <button
              onClick={descargarPDF}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition ocultar-en-pdf"
            >
              Descargar PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}