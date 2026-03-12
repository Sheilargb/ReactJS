import { useEffect, useState } from 'react';
import api from './Services/api.js';
import RegistrarUsuarios from './RegistrarUsuarios.jsx';
import './usuarios.css';

function Usuarios({ mostrarFormularioInicial = false }) {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [usuarioEditado, setUsuarioEditado] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(mostrarFormularioInicial);

  const obtenerUsuarios = async () => {
    try {
      const response = await api.get('/users');
      setUsuarios(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  useEffect(() => {
    if (mostrarFormularioInicial) {
      setMostrarFormulario(true);
    }
  }, [mostrarFormularioInicial]);

  const handleEditarUsuario = (usuario) => {
    setUsuarioEditado(usuario);
    setMostrarFormulario(true);
  };

  if (cargando) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div className="usuariosDiv">
      <h1>Lista de Usuarios</h1>

      {!mostrarFormulario && (
        <>
          <div className="usuariosAcciones">
            <button
              type="button"
              className="btnRegistro"
              onClick={() => {
                setUsuarioEditado(null);
                setMostrarFormulario(true);
              }}
            >
              Registrar Usuario
            </button>
          </div>

          <div className="tablaWrapper">
            <table className="usuariosTabla">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Direccion</th>
                  <th>Telefono</th>
                  <th>Correo</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.name?.firstname || '-'}</td>
                    <td>{usuario.name?.lastname || '-'}</td>
                    <td>
                      {usuario.address
                        ? `${usuario.address.street || ''} ${usuario.address.number || ''}, ${usuario.address.city || ''}`.trim()
                        : '-'}
                    </td>
                    <td>{usuario.phone || '-'}</td>
                    <td>{usuario.email || '-'}</td>
                    <td>{usuario.username || '-'}</td>
                    <td>{usuario.password || '-'}</td>
                    <td>
                      <button
                        type="button"
                        className="btnTabla editar"
                        onClick={() => handleEditarUsuario(usuario)}
                      >
                        Editar
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btnTabla eliminar">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {mostrarFormulario && (
        <RegistrarUsuarios
          usuarioEditado={usuarioEditado}
          limpiarSeleccion={() => setUsuarioEditado(null)}
          onActualizacionExitosa={() => {
            obtenerUsuarios();
            setMostrarFormulario(false);
          }}
          onCancelar={() => {
            setUsuarioEditado(null);
            setMostrarFormulario(false);
          }}
        />
      )}
    </div>
  );
}

export default Usuarios;
