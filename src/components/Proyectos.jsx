import React from 'react';

const Proyectos = () => {
  const proyectos = [
    {
      titulo: 'App Salon de Belleza',
      icono: 'bi-phone',
      descripcion: 'Aplicación móvil desarrollada en Kotlin para gestión de citas en salón de belleza.',
      tecnologias: 'Kotlin, Android Studio',
      imagen: 'https://placehold.co/600x400/0a2a2a/00f5a0?text=App+Salon+Belleza',
      link: 'https://github.com/klzombra',
      linkTexto: 'Ver en GitHub'
    },
    {
      titulo: 'Sistema de Inventario TI',
      icono: 'bi-pc-display',
      descripcion: 'Implementación de sistema de seguimiento para equipos de cómputo en Sonda Colombia.',
      tecnologias: 'Soporte Técnico, Gestión de Activos',
      imagen: 'https://placehold.co/600x400/0a2a2a/00f5a0?text=Soporte+TI',
      link: '#',
      linkTexto: 'Ver caso de éxito'
    },
    {
      titulo: 'Portafolio Profesional',
      icono: 'bi-globe',
      descripcion: 'Diseño y desarrollo de portafolio web interactivo con React y Bootstrap.',
      tecnologias: 'React, Bootstrap, CSS3',
      imagen: 'https://placehold.co/600x400/0a2a2a/00f5a0?text=Portafolio+React',
      link: '#',
      linkTexto: 'Ver demo'
    }
  ];

  return (
    <section id="proyectos" className="py-5 bg-black">
      <div className="container py-5">
        <header className="text-center mb-5">
          <h2 className="display-3 fw-bold text-white mb-3">
            <i className="bi bi-stars text-info me-3"></i>
            <span style={{
              background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              PROYECTOS
            </span>
          </h2>
          <hr className="w-25 mx-auto border-info opacity-50" />
        </header>

        <div className="row g-4">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="h-100 rounded-4 overflow-hidden card-hover" style={{ background: 'rgba(0,245,160,0.05)', border: '1px solid rgba(0,245,160,0.2)' }}>
                <img 
                  src={proyecto.imagen} 
                  className="w-100" 
                  alt={proyecto.titulo} 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="p-4">
                  <h3 className="h3 text-white mb-3">
                    <i className={`bi ${proyecto.icono} text-info me-2`}></i>
                    {proyecto.titulo}
                  </h3>
                  <p className="text-white-50">{proyecto.descripcion}</p>
                  <p className="text-info small mb-3">
                    <i className="bi bi-tag me-1"></i> {proyecto.tecnologias}
                  </p>
                  <a href={proyecto.link} className="btn btn-outline-info w-100" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-eye me-2"></i>{proyecto.linkTexto}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
