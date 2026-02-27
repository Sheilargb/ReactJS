import { useState } from 'react';

function RegistrarUsuarios() {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    username: '',
    email: '',
    password: '',
  });

  const manejarCambio = (event) => {
    const { name, value } = event.target;
    setNuevoUsuario((prev) => ({ ...prev, [name]: value }));
  };

  const registrarUsuario = (event) => {
    event.preventDefault();
  };

  return (
    <form className="registroForm" onSubmit={registrarUsuario}>
      <h2>Registro de usuario</h2>
      <div className="registroGrid">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={nuevoUsuario.username}
          onChange={manejarCambio}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={nuevoUsuario.email}
          onChange={manejarCambio}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={nuevoUsuario.password}
          onChange={manejarCambio}
        />
      </div>
      <button type="submit" className="btnRegistro">
        Registrar
      </button>
    </form>
  );
}

export default RegistrarUsuarios;
