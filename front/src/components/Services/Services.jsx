import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Book Profesional",
      description: "Sesiones fotográficas profesionales para crear portfolios de alta calidad.",
      icon: "faCameraRetro"
    },
    {
      title: "Representación Internacional",
      description: "Conectamos a nuestros modelos con oportunidades en todo el mundo.",
      icon: "faGlobe"
    },
    {
      title: "Desarrollo de Marca",
      description: "Ayudamos a los modelos a construir y promocionar su marca personal.",
      icon: "faGem"
    },
    {
      title: "Gestión de Contratos",
      description: "Nos encargamos de toda la negociación y gestión contractual.",
      icon: "faHandshake"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios para modelos y clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas fa-${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;