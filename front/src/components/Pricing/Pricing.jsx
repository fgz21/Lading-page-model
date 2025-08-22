
import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "19",
      period: "mes",
      features: [
        "Hasta 5 proyectos",
        "3GB de almacenamiento",
        "Soporte por email",
        "Análisis básico"
      ],
      highlighted: false
    },
    {
      name: "Profesional",
      price: "49",
      period: "mes",
      features: [
        "Proyectos ilimitados",
        "10GB de almacenamiento",
        "Soporte prioritario",
        "Análisis avanzado",
        "Informes personalizados"
      ],
      highlighted: true
    },
    {
      name: "Empresa",
      price: "99",
      period: "mes",
      features: [
        "Proyectos ilimitados",
        "Almacenamiento ilimitado",
        "Soporte 24/7",
        "Análisis premium",
        "Integraciones personalizadas",
        "Acceso anticipado a nuevas funciones"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes para todos los tamaños</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-md ${plan.highlighted ? 'border-2 border-indigo-500 transform scale-105' : ''}`}
            >
              {plan.highlighted && (
                <div className="bg-indigo-500 text-white text-center py-1 px-4 rounded-full text-sm font-semibold mb-6 -mt-4 mx-auto w-3/4">
                  Más popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-md font-semibold ${
                plan.highlighted 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition`}>
                Elegir plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;