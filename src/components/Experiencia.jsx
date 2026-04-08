import React from 'react';

const Experiencia = () => {
  const experiencias = [
    {
      empresa: 'Sonda de Colombia S.A',
      icono: 'bi-laptop',
      periodo: 'Actualidad • 1 año',
      cargo: 'Soporte en Sitio',
      logros: [
        'Formateo, mantenimiento y configuración de equipos',
        'Soporte técnico presencial y remoto para más de 200 usuarios',
        'Instalación y configuración de software especializado',
        'Gestión de incidentes y resolución de problemas técnicos en menos de 24h'
      ]
    },
    {
      empresa: 'UNILOGIS',
      icono: 'bi-truck',
      periodo: '2 meses',
      cargo: 'Conductor de Envíos',
      logros: [
        'Recepción y gestión de mercancía con sistema de inventario',
        'Apoyo en áreas de mercadeo y atención al cliente',
        'Optimización de rutas de entrega mejorando tiempos en un 15%'
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-5 bg-black">
      <div className="container py-5">
        <header className="text-center mb-5">
          <h2 className="display-3 fw-bold text-white mb-3">
            <i className="bi bi-briefcase-fill text-info me-3"></i>
            <span style={{
              background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              EXPERIENCIA LABORAL
            </span>
          </h2>
          <hr className="w-25 mx-auto border-info opacity-50" />
        </header>

        <div className="row g-4">
          {experiencias.map((exp, index) => (
            <div key={index} className="col-12">
              <div className="p-4 rounded-4 card-hover" style={{ background: 'rgba(0,245,160,0.05)', border: '1px solid rgba(0,245,160,0.2)' }}>
                <header className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                  <h3 className="h2 text-info mb-2">
                    <i className={`bi ${exp.icono} me-2`}></i>
                    {exp.empresa}
                  </h3>
                  <span className="badge bg-info text-dark fs-6 px-3 py-2">{exp.periodo}</span>
                </header>
                <h4 className="h4 text-white mb-3">{exp.cargo}</h4>
                <ul className="text-white-50 fs-5">
                  {exp.logros.map((logro, idx) => (
                    <li key={idx} className="mb-2">{logro}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
