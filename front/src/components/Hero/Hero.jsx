import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Imagen de fondo con modelo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
          alt="Modelo profesional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Contenido */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Descubre el mundo del modelaje</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          La mejor agencia de modelos con talento excepcional y representación profesional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-pink-700 transition">
            Ver portafolio
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-pink-600 transition">
            Unirse a la agencia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;