import { useEffect, useState } from 'react';
import api from './Services/api';
import './usuarios.css';
import { useAuth } from './AuthContext.jsx';

function RegistrarUsuarios({
  usuarioEditado = null,
  limpiarSeleccion,
  onActualizacionExitosa,
  onCancelar,
  modoRegistroPublico = false,
  onRegistroCompleto,
}) {
  const { login } = useAuth();
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('cliente');

  const resetForm = () => {
    setNombre('');
    setDireccion('');
    setTelefono('');
    setEmail('');
    setPassword('');
    setRol('cliente');
  };

  useEffect(() => {
    if (usuarioEditado) {
      setNombre(usuarioEditado.nombre || '');
      setDireccion(usuarioEditado.direccion || '');
      setTelefono(usuarioEditado.telefono || '');
      setEmail(usuarioEditado.email || '');
      setPassword('');
      setRol(usuarioEditado.rol || 'cliente');
    } else {
      resetForm();
    }
  }, [usuarioEditado]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoUsuario = {
      nombre,
      direccion,
      telefono,
      email,
      rol,
      ...(password ? { password } : {}),
    };

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
        if (modoRegistroPublico) {
          const loginRespuesta = await api.post('/login', { email, password });
          const token = loginRespuesta.data?.token;
          const usuario = loginRespuesta.data?.usuario;

          if (token) {
            login(token, usuario);
          }

          alert('Cuenta creada e inicio de sesion exitoso');
        } else {
          alert('Usuario registrado con exito');
        }
      }

      resetForm();
      if (onActualizacionExitosa) {
        onActualizacionExitosa();
      }
      if (onRegistroCompleto) {
        onRegistroCompleto();
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error al procesar la solicitud');
    }
  };

  return (
    <div className="registroForm">
      <div className="registroHeader">
        <h2>
          {usuarioEditado
            ? 'Editar Usuario'
            : modoRegistroPublico
              ? 'Crear cuenta'
              : 'Registrar Usuario'}
        </h2>
        {onCancelar && (
          <button type="button" className="btnRegistro secundario" onClick={onCancelar}>
            Volver
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit} className="registroGrid">
        <label>Nombre completo:</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Direccion:</label>
        <input
          type="text"
          name="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />

        <label>Telefono:</label>
        <input
          type="text"
          name="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
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
          required={!usuarioEditado}
        />

        <>
          <label>Rol:</label>
          <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="cliente">Cliente</option>
            <option value="admin">Admin</option>
          </select>
        </>

        <button type="submit" className="btnRegistro">
          {usuarioEditado ? 'Actualizar' : modoRegistroPublico ? 'Crear cuenta' : 'Registrar'}
        </button>
      </form>
    </div>
  );
}

export default RegistrarUsuarios;
