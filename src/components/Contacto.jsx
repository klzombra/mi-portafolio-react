import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert('❌ Por favor completa los campos obligatorios: Nombre, Email y Mensaje');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('❌ Por favor ingresa un email válido');
      return;
    }
    
    alert(`✅ ¡Gracias ${formData.nombre}! Tu mensaje ha sido enviado.\n\n📧 Te contactaré pronto a: ${formData.email}`);
    
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <section id="contacto" className="py-5" style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)' }}>
      <div className="container py-5">
        <header className="text-center mb-5">
          <h2 className="display-3 fw-bold text-white mb-3">
            <i className="bi bi-chat-dots-fill text-info me-3"></i>
            <span style={{
              background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              CONTACTO
            </span>
          </h2>
          <hr className="w-25 mx-auto border-info opacity-50" />
          <p className="lead text-white-50">¿Hablamos sobre cómo puedo aportar a tu equipo?</p>
        </header>

        <div className="row g-5">
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="row g-4 p-4 rounded-4" style={{ background: 'rgba(0,245,160,0.05)', border: '1px solid rgba(0,245,160,0.2)' }}>
              <div className="col-md-6">
                <label className="form-label text-white">Nombre *</label>
                <input
                  type="text"
                  id="nombre"
                  className="form-control bg-transparent text-white border-info"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label text-white">Email *</label>
                <input
                  type="email"
                  id="email"
                  className="form-control bg-transparent text-white border-info"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label text-white">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  className="form-control bg-transparent text-white border-info"
                  placeholder="Tu número de contacto"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label text-white">Mensaje *</label>
                <textarea
                  id="mensaje"
                  className="form-control bg-transparent text-white border-info"
                  rows="5"
                  placeholder="¿En qué puedo ayudarte?"
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-info btn-lg px-5 py-3">
                  <i className="bi bi-send me-2"></i>Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-5">
            <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(0,245,160,0.05)', border: '1px solid rgba(0,245,160,0.2)' }}>
              <h3 className="h2 text-info mb-4">Contacto Directo</h3>
              <ul className="list-unstyled">
                <li className="mb-4">
                  <i className="bi bi-whatsapp text-info fs-3 me-3"></i>
                  <div className="d-inline-block">
                    <strong className="text-white d-block">WhatsApp</strong>
                    <a href="https://wa.me/573143294343" className="text-info" target="_blank" rel="noopener noreferrer">+57 314 329 4343</a>
                  </div>
                </li>
                <li className="mb-4">
                  <i className="bi bi-envelope text-info fs-3 me-3"></i>
                  <div className="d-inline-block">
                    <strong className="text-white d-block">Email</strong>
                    <a href="mailto:Aayarojas.123@gmail.com" className="text-info">Aayarojas.123@gmail.com</a>
                  </div>
                </li>
                <li className="mb-4">
                  <i className="bi bi-github text-info fs-3 me-3"></i>
                  <div className="d-inline-block">
                    <strong className="text-white d-block">GitHub</strong>
                    <a href="https://github.com/klzombra" className="text-info" target="_blank" rel="noopener noreferrer">github.com/klzombra</a>
                  </div>
                </li>
                <li className="mb-4">
                  <i className="bi bi-geo-alt text-info fs-3 me-3"></i>
                  <div className="d-inline-block">
                    <strong className="text-white d-block">Ubicación</strong>
                    <span className="text-white-50">Bogotá, Colombia</span>
                  </div>
                </li>
              </ul>
              <hr className="border-info opacity-25 my-4" />
              <div className="text-center">
                <p className="text-white-50 mb-0">
                  <i className="bi bi-clock me-1"></i> Respuesta en < 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
