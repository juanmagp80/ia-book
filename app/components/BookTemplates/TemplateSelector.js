// components/BookTemplates/TemplateSelector.js
'use client';
import { useRouter } from 'next/navigation';

const templates = [
  {
    id: 'aventura',
    title: "Aventura Personalizada",
    description: "Cuento donde el niño es el héroe",
    fields: [
      { name: 'nombre', label: 'Nombre del héroe', type: 'text' },
      { name: 'lugar', label: 'Lugar mágico', type: 'text' }
    ]
  },
  {
    id: 'animales',
    title: "Aventura Animal",
    description: "Historia con animales personificados",
    fields: [
      { name: 'animal', label: 'Animal protagonista', type: 'text' },
      { name: 'habilidad', label: 'Habilidad especial', type: 'text' }
    ]
  }
];

export default function TemplateSelector() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {templates.map(template => (
        <div key={template.id} className="border rounded-lg p-6 hover:shadow-lg transition-all">
          <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
          <p className="text-gray-600 mb-4">{template.description}</p>
          <button 
            onClick={() => router.push(`/crear-libro?template=${template.id}`)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Seleccionar
          </button>
        </div>
      ))}
    </div>
  );
}