
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo puedo comenzar a usar la plataforma?",
      answer: "Regístrate con tu email, completa tu perfil y sigue nuestro tour guiado para familiarizarte con las funciones principales."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito/débito (Visa, MasterCard, American Express), PayPal y transferencias bancarias."
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer: "Sí, puedes cancelar tu suscripción en cualquier momento desde la sección de configuración de tu cuenta."
    },
    {
      question: "¿Ofrecen soporte técnico?",
      answer: "Sí, ofrecemos soporte técnico por email y chat en vivo para todos nuestros usuarios. Los planes superiores incluyen soporte prioritario."
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "Absolutamente. Utilizamos encriptación de grado bancario y cumplimos con las normativas de protección de datos más estrictas."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas frecuentes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro servicio.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button 
                className="flex justify-between items-center w-full text-left font-semibold text-lg py-2"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <svg 
                  className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="mt-2 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;