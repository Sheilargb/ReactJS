import { useEffect, useState } from 'react';
import api from './Services/api.js';
import RegistrarUsuarios from './RegistrarUsuarios.jsx';
import './usuarios.css';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

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

  if (cargando) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div className="usuariosDiv">
      <h1>Lista de Usuarios</h1>
      <RegistrarUsuarios onActualizacionExitosa={obtenerUsuarios} />

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
                  <button type="button" className="btnTabla editar">
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
    </div>
  );
}

export default Usuarios;
