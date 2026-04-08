import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(0,245,160,0.2)' }}>
      <div className="container text-center">
        <ul className="list-inline mb-4">
          <li className="list-inline-item mx-3">
            <a href="https://github.com/klzombra" className="text-info fs-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="https://wa.me/573143294343" className="text-info fs-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
            </a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="mailto:Aayarojas.123@gmail.com" className="text-info fs-2">
              <i className="bi bi-envelope"></i>
            </a>
          </li>
        </ul>
        <p className="text-white-50 mb-2">
          <i className="bi bi-c-circle me-1"></i> {currentYear} - Andrey Aya Rojas | Soporte TI & Desarrollador
        </p>
        <p className="text-info small">
          <i className="bi bi-cpu me-1"></i> "Trabajo con entusiasmo, dando más de lo que puedan esperar"
        </p>
      </div>
    </footer>
  );
};

export default Footer;
