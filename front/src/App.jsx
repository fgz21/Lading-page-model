import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Models from './components/Models/Models';
import Testimonials from './components/Testimonials/Testimonials';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Models />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;