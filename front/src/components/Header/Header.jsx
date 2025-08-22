import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-around items-center">
          <div className="text-2xl font-bold text-pink-600">Nexus Models</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#portfolio" className="text-gray-600 hover:text-pink-600 transition">Portafolio</a>
            <a href="#models" className="text-gray-600 hover:text-pink-600 transition">Modelos</a>
            <a href="#services" className="text-gray-600 hover:text-pink-600 transition">Servicios</a>
            <a href="#testimonials" className="text-gray-600 hover:text-pink-600 transition">Testimonios</a>
            <a href="#contact" className="text-gray-600 hover:text-pink-600 transition">Contacto</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#portfolio" className="text-gray-600 hover:text-pink-600 transition">Portafolio</a>
              <a href="#models" className="text-gray-600 hover:text-pink-600 transition">Modelos</a>
              <a href="#services" className="text-gray-600 hover:text-pink-600 transition">Servicios</a>
              <a href="#testimonials" className="text-gray-600 hover:text-pink-600 transition">Testimonios</a>
              <a href="#contact" className="text-gray-600 hover:text-pink-600 transition">Contacto</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;