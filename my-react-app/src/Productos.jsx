import { useEffect, useState } from 'react';
import api from './Services/api.js';
import RegistrarProductos from './RegistrarProductos.jsx';
import './Productos.css';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

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

  useEffect(() => {
    obtenerProductos();
  }, []);

  const manejarAgregar = async (producto) => {
    const payload = {
      title: producto.title,
      price: producto.price,
      description: producto.description || 'Sin descripcion',
      category: producto.category || 'general',
      image: producto.image || '',
    };

    try {
      const respuesta = await api.post('/products', payload);
      console.log('Producto agregado desde tarjeta:', respuesta.data);
      obtenerProductos();
    } catch (error) {
      console.error('Error al agregar producto desde tarjeta:', error);
    }
  };

  const manejarEliminar = async (id) => {
    try {
      const respuesta = await api.delete(`/products/${id}`);
      console.log(`Producto eliminado (id ${id}):`, respuesta.data);
      setProductos((prev) => prev.filter((producto) => producto.id !== id));
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="productosDiv">
      <h1>Nuestros Productos</h1>
      <RegistrarProductos onActualizacionExitosa={obtenerProductos} />
      {productos.map((producto) => (
        <div key={producto.id} className="productoItem">
          <p>{producto.title}</p>
          <p>${producto.price}</p>
          <img src={producto.image} alt={producto.title} />
          <div className="accionesProducto">
            <button
              type="button"
              className="btnProducto agregar"
              onClick={() => manejarAgregar(producto)}
            >
              Agregar
            </button>
            <button
              type="button"
              className="btnProducto eliminar"
              onClick={() => manejarEliminar(producto.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productos;
