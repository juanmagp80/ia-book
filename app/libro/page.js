'use client'; // Marca el componente como del lado del cliente

import { useSearchParams } from 'next/navigation';

export default function Libro() {
  const searchParams = useSearchParams();
  const historia = searchParams.get('historia');

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Tu libro creado</h1>
      <div className="space-y-4">
        <p>{historia}</p>
        {/* Aquí podrías agregar la ilustración generada */}
      </div>
    </div>
  );
}