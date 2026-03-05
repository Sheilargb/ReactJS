import { useState } from 'react';
import fotoPerfil from './assets/perfil.png';
import api from './Services/api.js';
import './login.css';

function Login() {
  const [datosLogin, setDatosLogin] = useState({
    usuario: '',
    contraseña: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      username: datosLogin.usuario,
      password: datosLogin.contraseña,
    };

    try {
      const respuesta = await api.post('/auth/login', payload);
      console.log('token:', respuesta.data?.token);
      alert('Inicio de sesion exitoso');
    } catch (error) {
      console.error('Error en inicio de sesion:', error);
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="loginDiv">
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="loginFoto">
          <img src={fotoPerfil} alt="Foto de perfil" />
        </div>
        <h2>Iniciar sesion</h2>

        <label htmlFor="usuario">Usuario</label>
        <input
          id="usuario"
          type="text"
          name="usuario"
          placeholder="Ingresa tu usuario"
          value={datosLogin.usuario}
          onChange={handleChange}
          required
        />

        <label htmlFor="contraseña">Contraseña</label>
        <input
          id="contraseña"
          type="password"
          name="contraseña"
          placeholder="Ingresa tu contraseña"
          value={datosLogin.contraseña}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btnAcceder">
          Acceder
        </button>

        <div className="loginAcciones">
          <a href="#" onClick={(event) => event.preventDefault()}>
            Crear cuenta
          </a>
          <a href="#" onClick={(event) => event.preventDefault()}>
            Cambiar contraseña
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
