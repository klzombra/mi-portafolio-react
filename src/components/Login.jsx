import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(true);

  const VALID_USERNAME = 'admin';
  const VALID_PASSWORD = '1234';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('❌ Por favor ingresa usuario y contraseña');
      setIsError(true);
      return;
    }

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setMessage('✅ ¡Login exitoso! Cargando portafolio...');
      setIsError(false);
      sessionStorage.setItem('portfolio_user', username);
      setTimeout(() => {
        onLogin();
      }, 1000);
    } else {
      setMessage('❌ Usuario o contraseña incorrectos');
      setIsError(true);
    }
  };

  return (
    <section 
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: 'radial-gradient(circle at 30% 50%, rgba(0,245,160,0.1) 0%, rgba(0,0,0,1) 100%)'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div 
              className="p-5 rounded-4"
              style={{
                background: 'rgba(0,245,160,0.05)',
                border: '1px solid rgba(0,245,160,0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <header className="text-center mb-4">
                <i className="bi bi-cpu text-info fs-1 d-block mb-3"></i>
                <h1 className="text-white h2">
                  <span style={{
                    background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}>
                    Portafolio Profesional
                  </span>
                </h1>
                <p className="text-white-50 mt-2">Acceso restringido - Identifícate</p>
              </header>

              {message && (
                <div className={`alert ${isError ? 'alert-danger' : 'alert-success'} mb-3`}>
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label text-white">Usuario</label>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white border-info"
                    placeholder="Ingresa tu usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-white">Contraseña</label>
                  <input
                    type="password"
                    className="form-control bg-transparent text-white border-info"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-info w-100 py-2 fw-bold">
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Ingresar al Portafolio
                </button>
              </form>

              <footer className="text-center mt-4">
                <p className="text-white-50 small">
                  <i className="bi bi-info-circle me-1"></i>
                  Demo: usuario: <strong className="text-info">admin</strong> | contraseña: <strong className="text-info">1234</strong>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
