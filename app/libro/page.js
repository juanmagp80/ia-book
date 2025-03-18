'use client';

import { useSearchParams } from 'next/navigation';

export default function Libro() {
  const searchParams = useSearchParams();
  const cuento = searchParams.get('cuento');

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Tu libro creado</h1>
      <div className="space-y-4">
        {cuento ? (
          <pre className="whitespace-pre-wrap">{cuento}</pre>
        ) : (
          <p>No se pudo generar el cuento. Inténtalo de nuevo.</p>
        )}
      </div>
    </div>
  );
}