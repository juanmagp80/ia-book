'use client';

import { useEffect, useState } from 'react';

export default function Libro() {
  const [cuento, setCuento] = useState('');

  useEffect(() => {
    // Obtener el cuento desde localStorage
    const cuentoGuardado = localStorage.getItem('cuentoGenerado');
    setCuento(cuentoGuardado || 'No hay cuento disponible.');
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Tu Historia Generada</h1>
      <p className="whitespace-pre-line">{cuento}</p>
    </div>
  );
}
