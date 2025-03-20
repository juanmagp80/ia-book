'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    const response = await fetch('/api/generar-historia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (!response.ok) {
      console.error('Error en la respuesta del servidor:', response.statusText);
      return;
    }

    const { cuento } = await response.json();

    // Guardar cuento en localStorage
    localStorage.setItem('cuentoGenerado', cuento);

    // Redirige a la página donde se mostrará el cuento
    router.push('/libro');
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Crea un libro para tu niño</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register('edad', { required: 'La edad es obligatoria' })}
          placeholder="Edad del niño"
          className="p-2 border rounded w-full"
        />
        {errors.edad && <p className="text-red-500">{errors.edad.message}</p>}

        <input
          {...register('tema', { required: 'El tema es obligatorio' })}
          placeholder="Tema del libro"
          className="p-2 border rounded w-full"
        />
        {errors.tema && <p className="text-red-500">{errors.tema.message}</p>}

        <button 
          type="submit" 
          className="p-2 bg-blue-500 text-white rounded w-full"
          disabled={loading}
        >
          {loading ? 'Generando historia...' : 'Crear libro'}
        </button>
      </form>
    </div>
  );
}
