import { useEffect, useState } from 'react';
import api from './Services/api.js';
import RegistrarUsuarios from './RegistrarUsuarios.jsx';
import './usuarios.css';

function Usuarios({
  mostrarFormularioInicial = false,
  modoRegistroPublico = false,
  onRegistroCompleto,
}) {
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
    if (modoRegistroPublico) {
      setCargando(false);
      return;
    }

    obtenerUsuarios();
  }, [modoRegistroPublico]);

  useEffect(() => {
    if (mostrarFormularioInicial) {
      setMostrarFormulario(true);
    }
  }, [mostrarFormularioInicial]);

  const handleEditarUsuario = (usuario) => {
    setUsuarioEditado(usuario);
    setMostrarFormulario(true);
  };

  const handleEliminarUsuario = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      setUsuarios((prev) => prev.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      alert('No se pudo eliminar el usuario');
    }
  };

  if (cargando) {
    return <p>Cargando usuarios...</p>;
  }

  if (modoRegistroPublico) {
    return (
      <RegistrarUsuarios
        onCancelar={onRegistroCompleto}
        modoRegistroPublico
        onRegistroCompleto={onRegistroCompleto}
      />
    );
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
                  <th>Direccion</th>
                  <th>Telefono</th>
                  <th>Correo</th>
                  <th>Rol</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.nombre || '-'}</td>
                    <td>{usuario.direccion || '-'}</td>
                    <td>{usuario.telefono || '-'}</td>
                    <td>{usuario.email || '-'}</td>
                    <td>{usuario.rol || '-'}</td>
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
                      <button
                        type="button"
                        className="btnTabla eliminar"
                        onClick={() => handleEliminarUsuario(usuario.id)}
                      >
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
          modoRegistroPublico={false}
        />
      )}
    </div>
  );
}

export default Usuarios;
