import { bookTemplates } from "@/data/templates";

export default function TemplateGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {bookTemplates.map(template => (
        <div key={template.id} className="border rounded-lg overflow-hidden hover:shadow-xl transition-all">
          <img src={template.cover} alt={template.title} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold">{template.title}</h3>
            <p>{template.pages} páginas • {template.theme}</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Personalizar
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}