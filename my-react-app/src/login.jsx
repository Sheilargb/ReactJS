import { useState } from 'react';
import fotoPerfil from './assets/perfil.png';
import api from './Services/api.js';
import './login.css';
import {useAuth} from './AuthContext.jsx';

function Login() {
  const {login} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      username,
      password,
    };

    try {
      const respuesta = await api.post('/auth/login', payload);
      const token = respuesta.data?.token;
      if (token) {
        login(token);
      }
      console.log('token:', token);
      alert('Inicio de sesion exitoso');
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

        <label htmlFor="username">Usuario</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Ingresa tu usuario"
          value={username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Contrasena</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Ingresa tu contrasena"
          value={password}
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
            Cambiar contrasena
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
