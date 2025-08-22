import React from 'react';

const Portfolio = () => {
  const models = [
    {
      id: 1,
      name: "Sofia López",
      category: "Moda comercial",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    {
      id: 2,
      name: "Marco Rodríguez",
      category: "Pasarela",
      image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 3,
      name: "Elena Martínez",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80"
    },
    {
      id: 4,
      name: "Carlos Vega",
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 5,
      name: "Isabel Chen",
      category: "Belleza",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=798&q=80"
    },
    {
      id: 6,
      name: "David Kim",
      category: "Publicidad",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Portafolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre a nuestros modelos profesionales y su trabajo en diferentes disciplinas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
              <img 
                src={model.image} 
                alt={model.name} 
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300">
                <h3 className="text-xl font-semibold">{model.name}</h3>
                <p className="text-pink-300">{model.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;