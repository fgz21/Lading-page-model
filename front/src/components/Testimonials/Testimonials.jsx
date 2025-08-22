import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Modelo Internacional",
      content: "EliteModels transformó mi carrera. Me ayudaron a conseguir oportunidades que nunca pensé posibles en el mundo de la moda.",
      avatar: "MG"
    },
    {
      name: "Carlos Rodríguez",
      role: "Fotógrafo de Moda",
      content: "Trabajar con los modelos de EliteModels es siempre una experiencia profesional. Su diversidad de talento es impresionante.",
      avatar: "CR"
    },
    {
      name: "Ana Martínez",
      role: "Directora de Marketing",
      content: "Contratamos a varios modelos de EliteModels para nuestra campaña y los resultados fueron excepcionales. Profesionales y talentosos.",
      avatar: "AM"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lo que dicen nuestros modelos y clientes sobre nosotros.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;