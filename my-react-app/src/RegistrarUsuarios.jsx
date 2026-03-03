import { useEffect, useState } from 'react';
import api from './Services/api';
import './usuarios.css';

function RegistrarUsuarios({ usuarioEditado = null, limpiarSeleccion, onActualizacionExitosa }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (usuarioEditado) {
      setUsername(usuarioEditado.username || '');
      setEmail(usuarioEditado.email || '');
      setPassword(usuarioEditado.password || '');
    } else {
      resetForm();
    }
  }, [usuarioEditado]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoUsuario = { username, email, password };

    try {
      if (usuarioEditado) {
        const respuesta = await api.put(`/users/${usuarioEditado.id}`, nuevoUsuario);
        console.log('Usuario actualizado', respuesta.data);
        alert('Usuario actualizado con exito');

        if (limpiarSeleccion) {
          limpiarSeleccion();
        }
      } else {
        const respuesta = await api.post('/users', nuevoUsuario);
        console.log('Usuario registrado', respuesta.data);
        alert('Usuario registrado con exito');
      }

      resetForm();
      if (onActualizacionExitosa) {
        onActualizacionExitosa();
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error al procesar la solicitud');
    }
  };

  return (
    <div className="registroForm">
      <h2>{usuarioEditado ? 'Editar Usuario' : 'Registrar Usuario'}</h2>
      <form onSubmit={handleSubmit} className="registroGrid">
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btnRegistro">
          {usuarioEditado ? 'Actualizar' : 'Registrar'}
        </button>
      </form>
    </div>
  );
}

export default RegistrarUsuarios;
