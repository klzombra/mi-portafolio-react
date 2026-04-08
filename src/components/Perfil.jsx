import React from 'react';

const Perfil = () => {
  const infoItems = [
    { icon: 'bi-geo-alt-fill', label: 'Ubicación', value: 'Bogotá, Colombia' },
    { icon: 'bi-envelope-fill', label: 'Email', value: 'Aayarojas.123@gmail.com' },
    { icon: 'bi-telephone-fill', label: 'Teléfono', value: '314 329 4343' },
    { icon: 'bi-github', label: 'GitHub', value: 'github.com/klzombra' }
  ];

  return (
    <section id="perfil" className="py-5" style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)' }}>
      <div className="container py-5">
        <header className="text-center mb-5">
          <h2 className="display-3 fw-bold text-white mb-3">
            <i className="bi bi-person-badge text-info me-3"></i>
            <span style={{
              background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              PERFIL PROFESIONAL
            </span>
          </h2>
          <hr className="w-25 mx-auto border-info opacity-50" />
        </header>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-10">
            <div className="p-5 rounded-4" style={{ background: 'rgba(0,245,160,0.05)', border: '1px solid rgba(0,245,160,0.2)' }}>
              <p className="lead text-white-50 fs-4 mb-4">
                Soy una persona honesta con aptitudes excepcionales para el aprendizaje, habilidad para trabajar en equipo o individualmente. 
                Me caracterizo por trabajar con entusiasmo, siempre buscando superar las expectativas, aprender de los demás, 
                evitar pensamientos derrotistas y reflejar un comportamiento profesional ejemplar.
              </p>

              <ul className="list-unstyled row g-4 mt-4">
                {infoItems.map((item, index) => (
                  <li key={index} className="col-md-6">
                    <div className="d-flex align-items-center gap-3 p-3 rounded" style={{ background: 'rgba(0,245,160,0.1)' }}>
                      <i className={`bi ${item.icon} text-info fs-1`}></i>
                      <div>
                        <strong className="text-white d-block">{item.label}</strong>
                        <span className="text-white-50">{item.value}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
