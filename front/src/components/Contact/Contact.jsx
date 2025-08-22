import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Únete a nuestra agencia o contáctanos para más información sobre nuestros servicios.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-pink-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Aplicar como modelo
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-pink-600 transition">
            Contactar agencia
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="text-center">
            <i className="fas fa-map-marker-alt text-3xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
            <p className="text-pink-100">Av. Principal 1234<br />Ciudad, CP 56789</p>
          </div>
          
          <div className="text-center">
            <i className="fas fa-phone text-3xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
            <p className="text-pink-100">+1 (234) 567-8900<br />+1 (987) 654-3210</p>
          </div>
          
          <div className="text-center">
            <i className="fas fa-envelope text-3xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-pink-100">info@elitemodels.com<br />bookings@elitemodels.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;