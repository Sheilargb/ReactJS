import { useEffect, useState } from 'react';
import api from './Services/api.js';
import RegistrarProductos from './RegistrarProductos.jsx';
import './Productos.css';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await api.get('/products');
        setProductos(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setCargando(false);
      }
    };
    obtenerProductos();
  }, []);

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="productosDiv">
      <h1>Nuestros Productos</h1>
            <RegistrarProductos />
      {productos.map((producto) => (
        <div key={producto.id} className="productoItem">
          <p>{producto.title}</p>
          <p>{producto.price}</p>
          <img src={producto.image} alt={producto.title} />
          <div className="accionesProducto">
            <button type="button" className="btnProducto agregar">
              Agregar
            </button>
            <button type="button" className="btnProducto eliminar">
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );

}

export default Productos;
