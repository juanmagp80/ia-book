'use client'; // Marca el componente como del lado del cliente

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    // Enviar datos a la API y redirigir a la página del libro
    const response = await fetch('/api/generar-historia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const { historia } = await response.json();
    router.push(`/libro?historia=${encodeURIComponent(historia)}`);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Crea un libro para tu niño</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register('edad')}
          placeholder="Edad del niño"
          className="p-2 border rounded"
        />
        <input
          {...register('tema')}
          placeholder="Tema del libro"
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Crear libro
        </button>
      </form>
    </div>
  );
}