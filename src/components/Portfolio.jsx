import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Perfil from './Perfil';
import Experiencia from './Experiencia';
import Habilidades from './Habilidades';
import Proyectos from './Proyectos';
import Contacto from './Contacto';
import Footer from './Footer';

const Portfolio = ({ onLogout }) => {
  return (
    <div className="fade-in">
      <Header onLogout={onLogout} />
      <main>
        <Hero />
        <Perfil />
        <Experiencia />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
