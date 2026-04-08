import React, { useEffect } from 'react';

const Header = ({ onLogout }) => {
  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <header className="position-sticky top-0 z-3" style={{ backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.9)' }}>
      <nav className="navbar navbar-expand-lg container py-3">
        <a className="navbar-brand text-white fw-bold fs-3" href="#inicio">
          <i className="bi bi-cpu me-2 text-info"></i>
          <span style={{
            background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            A.AYA
          </span>
        </a>
        
        <button 
          className="navbar-toggler bg-light" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white-50" href="#inicio">INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50" href="#perfil">PERFIL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50" href="#experiencia">EXPERIENCIA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50" href="#habilidades">HABILIDADES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50" href="#contacto">CONTACTO</a>
            </li>
            <li className="nav-item">
              <button onClick={onLogout} className="btn btn-outline-info ms-2 px-3 py-1">
                <i className="bi bi-box-arrow-right me-1"></i>Salir
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
