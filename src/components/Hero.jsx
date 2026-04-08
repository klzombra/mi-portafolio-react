import React from 'react';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="min-vh-100 d-flex align-items-center"
      style={{
        background: 'radial-gradient(circle at 30% 50%, rgba(0,245,160,0.1) 0%, rgba(0,0,0,1) 100%)'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <figure className="mb-4">
              <img 
                src="https://ui-avatars.com/api/?background=00f5a0&color=000&size=150&bold=true&rounded=true&name=Andrey+Aya" 
                alt="Andrey Aya Rojas" 
                className="rounded-circle border border-3 border-info shadow-lg"
                width="150" 
                height="150"
              />
            </figure>
            
            <h1 className="display-1 fw-bold text-white mb-3">
              <span style={{
                background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                ANDRÉY AYA ROJAS
              </span>
            </h1>
            
            <p className="lead fs-1 text-info mb-3">
              Especialista en Soporte TI & Desarrollador
            </p>
            
            <p className="fs-4 text-white-50 mb-4 mx-auto" style={{ maxWidth: '700px' }}>
              "Trabajo con entusiasmo, dando más de lo que puedan esperar"
            </p>
            
            <div className="d-flex gap-3 justify-content-center">
              <a 
                href="https://wa.me/573143294343?text=Hola%20Andrey%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte" 
                className="btn btn-outline-info btn-lg px-5 py-3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp me-2"></i>WhatsApp
              </a>
              <a href="#contacto" className="btn btn-info btn-lg px-5 py-3">
                <i className="bi bi-envelope me-2"></i>Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
