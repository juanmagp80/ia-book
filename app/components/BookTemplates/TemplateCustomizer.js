import { useState } from 'react';

export default function TemplateCustomizer({ template }) {
  const [variables, setVariables] = useState({});
  
  const handleGenerate = () => {
    // Lógica para generar el libro con los datos ingresados
    console.log("Libro generado:", { template, variables });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">{template.title}</h2>
        
        {template.variables.map(varName => (
          <div key={varName} className="mb-4">
            <label className="block mb-1">Ingresa {varName}:</label>
            <input
              type="text"
              className="border p-2 w-full rounded"
              onChange={(e) => setVariables({...variables, [varName]: e.target.value})}
            />
          </div>
        ))}

        <button 
          onClick={handleGenerate}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 mt-4"
        >
          Generar Mi Libro
        </button>
      </div>

      <div className="flex-1 border-l pl-8">
        <h3 className="text-xl font-semibold mb-4">Vista Previa</h3>
        <div className="border p-4 min-h-[300px]">
          {template.scenes.map((scene, index) => (
            <div key={index} className="mb-6">
              <div className="bg-gray-200 h-32 mb-2 flex items-center justify-center">
                [Imagen: {scene.bg}]
              </div>
              <p>
                {Object.entries(variables).reduce(
                  (text, [key, value]) => text.replace(`{${key}}`, value),
                  scene.text
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}