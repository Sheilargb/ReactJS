import { useState } from 'react';
import fotoPerfil from './assets/perfil.png';
import api from './Services/api.js';
import './login.css';
import {useAuth} from './AuthContext.jsx';
import PropTypes from 'prop-types';

function Login({ onCrearCuenta, onLoginExitoso }) {
  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      email,
      password,
    };

    try {
      const respuesta = await api.post('/login', payload);
      const token = respuesta.data?.token;
      const usuario = respuesta.data?.usuario;
      if (token) {
        login(token, usuario);
      }
      console.log('token:', token);
      alert('Inicio de sesion exitoso');
      if (onLoginExitoso) {
        onLoginExitoso();
      }
    } catch (error) {
      console.error('Error en inicio de sesion:', error);
      alert('Usuario o contrasena incorrectos');
    }
  };

  return (
    <div className="loginDiv">
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="loginFoto">
          <img src={fotoPerfil} alt="Foto de perfil" />
        </div>
        <h2>Iniciar sesion</h2>

        <label htmlFor="email">Correo electronico</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btnAcceder">
          Acceder
        </button>

        <div className="loginAcciones">
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              if (onCrearCuenta) {
                onCrearCuenta();
              }
            }}
          >
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

Login.propTypes = {
  onCrearCuenta: PropTypes.func,
  onLoginExitoso: PropTypes.func,
};

export default Login;
