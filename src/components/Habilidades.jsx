import React from 'react';

const Habilidades = () => {
  const frontendSkills = [
    { name: 'Kotlin (Android)', level: 70, description: 'App Salon de Belleza' },
    { name: 'HTML5/CSS3/Bootstrap', level: 85, description: '' }
  ];

  const backendSkills = [
    { name: 'Formateo y Configuración', level: 90, description: '' },
    { name: 'Mantenimiento de Equipos', level: 92, description: '' },
    { name: 'Redes Básicas', level: 75, description: '' }
  ];

  const softSkills = [
    { icon: 'bi-emoji-smile', name: 'Amabilidad' },
    { icon: 'bi-trophy', name: 'Compromiso' },
    { icon: 'bi-chat-dots', name: 'Comunicación' },
    { icon: 'bi-people-fill', name: 'Trabajo en Equipo' }
  ];

  return (
    <section id="habilidades" className="py-5" style={{ background: 'linear-gradient(0deg, #000000 0%, #0a0a0a 100%)' }}>
      <div className="container py-5">
        <header className="text-center mb-5">
          <h2 className="display-3 fw-bold text-white mb-3">
            <i className="bi bi-code-square text-info me-3"></i>
            <span style={{
              background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              HABILIDADES
            </span>
          </h2>
          <hr className="w-25 mx-auto border-info opacity-50" />
        </header>

        <div className="row g-5">
          <div className="col-md-6">
            <h3 className="h2 text-info mb-4">
              <i className="bi bi-terminal me-2"></i>Desarrollo & Programación
            </h3>
            <ul className="list-unstyled">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-info">{skill.level}%</span>
                  </div>
                  <div className="bg-secondary-custom rounded-pill" style={{ height: '8px' }}>
                    <div className="bg-info rounded-pill" style={{ width: `${skill.level}%`, height: '8px' }}></div>
                  </div>
                  {skill.description && <small className="text-white-50">{skill.description}</small>}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6">
            <h3 className="h2 text-info mb-4">
              <i className="bi bi-wrench me-2"></i>Soporte Técnico & TI
            </h3>
            <ul className="list-unstyled">
              {backendSkills.map((skill, index) => (
                <li key={index} className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-info">{skill.level}%</span>
                  </div>
                  <div className="bg-secondary-custom rounded-pill" style={{ height: '8px' }}>
                    <div className="bg-info rounded-pill" style={{ width: `${skill.level}%`, height: '8px' }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h3 className="h2 text-info mb-4 text-center">
              <i className="bi bi-people me-2"></i>Habilidades Blandas
            </h3>
            <div className="row g-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="col-md-3 col-6 text-center">
                  <div className="p-3 rounded-4" style={{ background: 'rgba(0,245,160,0.1)' }}>
                    <i className={`bi ${skill.icon} text-info fs-1`}></i>
                    <p className="text-white mt-2 mb-0">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
