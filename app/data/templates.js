// src/data/templates.js
export const bookTemplates = [
    {
        id: 'aventura',
        title: "Aventura Personalizada",
        description: "Cuento donde el niño es el héroe",
        fields: [
            { name: 'nombre', label: 'Nombre del héroe', type: 'text', required: true },
            { name: 'lugar', label: 'Lugar mágico', type: 'text', required: true }
        ],
        prompt: (data) => `Crea un cuento de aventura para ${data.nombre} de ${data.edad} años en ${data.lugar}`
    },
    {
        id: 'animales',
        title: "Aventura Animal",
        description: "Historia con animales personificados",
        fields: [
            { name: 'animal', label: 'Animal protagonista', type: 'text', required: true },
            { name: 'habilidad', label: 'Habilidad especial', type: 'text' }
        ],
        prompt: (data) => `Cuento sobre un ${data.animal} ${data.habilidad ? 'que puede ' + data.habilidad : ''} para niños de ${data.edad} años`
    }
];