import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-600">EliteModels</h3>
            <p className="text-gray-400">
              Transformando talento en carreras exitosas en el mundo del modelaje.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition">Portafolio</a></li>
              <li><a href="#models" className="text-gray-400 hover:text-white transition">Modelos</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Servicios</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Agencia</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Carreras</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; 2023 EliteModels. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;