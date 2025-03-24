'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { bookTemplates } from '../data/templates';

export default function CreateBookPage() {
    const [step, setStep] = useState('select');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [formData, setFormData] = useState({ edad: '' });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleGenerate = async () => {
        setLoading(true);

        try {
            const response = await fetch('/api/generate-story', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    edad: formData.edad,
                    tema: selectedTemplate.prompt(formData)
                })
            });

            const { cuento } = await response.json();
            localStorage.setItem('cuentoGenerado', cuento);
            router.push('/libro');
        } finally {
            setLoading(false);
        }
    };

    if (step === 'select') {
        return (
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-8">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    🌈 Elige una plantilla
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {bookTemplates.map((template) => (
                        <motion.div
                            key={template.id}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-blue-300 transition-all"
                        >
                            <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                                <span className="text-5xl">{template.emoji || '📖'}</span>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2">{template.title}</h2>
                                <p className="text-gray-600 mb-4">{template.description}</p>
                                <button
                                    onClick={() => {
                                        setSelectedTemplate(template);
                                        setStep('form');
                                    }}
                                    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Seleccionar
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
                <button
                    onClick={() => setStep('select')}
                    className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
                >
                    ← Volver a plantillas
                </button>

                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    {selectedTemplate.title}
                </h2>

                <div className="space-y-6">
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            Edad del niño
                        </label>
                        <input
                            type="number"
                            value={formData.edad}
                            onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {selectedTemplate.fields.map((field) => (
                        <div key={field.name}>
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                value={formData[field.name] || ''}
                                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                required={field.required}
                            />
                        </div>
                    ))}
                </div>

                {loading && (
                    <div className="flex flex-col items-center justify-center my-8">
                        <img
                            src="/loading.gif"
                            alt="Generando libro..."
                            className="w-32 h-32"
                        />
                        <p className="text-gray-600 mt-4">Creando tu historia mágica...</p>
                    </div>
                )}

                <motion.button
                    onClick={handleGenerate}
                    className={`w-full mt-8 py-3 text-white font-bold rounded-lg ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600'
                        }`}
                    whileTap={!loading ? { scale: 0.95 } : {}}
                    disabled={loading}
                >
                    {loading ? 'Generando...' : '✨ Crear Mi Libro'}
                </motion.button>
            </div>
        </div>
    );
}