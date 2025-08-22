import React from 'react';

const Models = () => {
  const modelStats = [
    {
      number: "50+",
      title: "Modelos profesionales"
    },
    {
      number: "12",
      title: "Países de representación"
    },
    {
      number: "200+",
      title: "Campañas anuales"
    },
    {
      number: "98%",
      title: "Clientes satisfechos"
    }
  ];

  return (
    <section id="models" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Modelos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Representamos a los talentos más prometedores del mundo de la moda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
              alt="Modelos de la agencia" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Excelencia en representación</h3>
            <p className="text-gray-300 mb-6">
              Nuestra agencia se especializa en descubrir y desarrollar talento excepcional. 
              Ofrecemos representación profesional para modelos en todos los aspectos de sus carreras.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              {modelStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-500">{stat.number}</div>
                  <div className="text-gray-300 mt-2">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;