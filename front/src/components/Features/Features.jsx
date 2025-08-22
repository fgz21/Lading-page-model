
import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Fácil de usar",
      description: "Interfaz intuitiva que permite a cualquier persona utilizar nuestra plataforma sin dificultad.",
      icon: "🚀"
    },
    {
      title: "Potente análisis",
      description: "Obtén insights valiosos con nuestras herramientas de análisis avanzadas.",
      icon: "📊"
    },
    {
      title: "Seguro y confiable",
      description: "Tus datos están protegidos con los más altos estándares de seguridad.",
      icon: "🔒"
    },
    {
      title: "Soporte 24/7",
      description: "Nuestro equipo de soporte está disponible en todo momento para ayudarte.",
      icon: "🛠️"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Características principales</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre todo lo que nuestra plataforma puede hacer por ti y tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;