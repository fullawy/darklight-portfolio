
import React from 'react';

const projects = [
  {
    title: 'Commune de Val-sur-Rivière',
    description: 'Site administratif officiel',
    image: '/images/val-sur-riviere.png'
  },
  {
    title: 'Lumière Boutique',
    description: 'Site e-commerce moderne',
    image: '/images/lumiere-boutique.png'
  },
  {
    title: 'TechNow Blog',
    description: 'Blog tech responsif et épuré',
    image: '/images/technow-blog.png'
  },
  {
    title: 'Studio Echo',
    description: 'Portfolio créatif pour artistes',
    image: '/images/studio-echo.png'
  },
  {
    title: 'NovaCom',
    description: 'Site vitrine pour agence marketing',
    image: '/images/novacom.png'
  },
  {
    title: 'InsightPro',
    description: 'Dashboard analytique pour entreprises',
    image: '/images/insightpro.png'
  }
];

export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <header className="bg-gray-950 p-8 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-2">DarkLight</h1>
        <p className="text-gray-400 text-lg">Agence web créative – Conception de sites modernes</p>
      </header>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Nos Réalisations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <p className="text-blue-400 text-xs mt-2">Créé par DarkLight</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-800 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">À propos de DarkLight</h2>
          <p className="text-gray-300">DarkLight est une agence web spécialisée dans la création de sites internet modernes, responsifs et élégants. Nous mettons en œuvre notre savoir-faire pour offrir des solutions digitales sur mesure à nos clients.</p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Votre nom" className="w-full p-2 rounded bg-gray-700 border border-gray-600 placeholder-gray-400 text-white" />
          <input type="email" placeholder="Votre email" className="w-full p-2 rounded bg-gray-700 border border-gray-600 placeholder-gray-400 text-white" />
          <textarea placeholder="Votre message" className="w-full p-2 rounded bg-gray-700 border border-gray-600 placeholder-gray-400 text-white h-32"></textarea>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">Envoyer</button>
        </form>
      </section>

      <footer className="bg-gray-950 text-center text-gray-500 py-4">
        <p>&copy; 2025 DarkLight – Tous droits réservés.</p>
      </footer>
    </div>
  );
}
