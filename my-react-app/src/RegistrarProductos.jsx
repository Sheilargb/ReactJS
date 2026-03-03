import { useState } from 'react';
import api from './Services/api.js';
import './RegistrarProductos.css';

const initialState = {
  title: '',
  price: '',
  description: '',
  category: '',
  image: '',
};

function RegistrarProductos({ onActualizacionExitosa }) {
  const [nuevoProducto, setNuevoProducto] = useState(initialState);

  const manejarCambioProducto = (event) => {
    const { name, value } = event.target;
    setNuevoProducto((prev) => ({ ...prev, [name]: value }));
  };

  const registrarProducto = async (event) => {
    event.preventDefault();

    const payload = {
      ...nuevoProducto,
      price: Number(nuevoProducto.price),
    };

    try {
      const respuesta = await api.post('/products', payload);
      console.log('Producto registrado:', respuesta.data);
      alert('Producto registrado con exito');
      setNuevoProducto(initialState);

      if (onActualizacionExitosa) {
        onActualizacionExitosa();
      }
    } catch (error) {
      console.error('Error al registrar producto:', error);
      alert('Error al registrar producto');
    }
  };

  return (
    <form className="registroProductoForm" onSubmit={registrarProducto}>
      <h2>Registro de producto</h2>
      <div className="registroProductoGrid">
        <input
          type="text"
          name="title"
          placeholder="Nombre del producto"
          value={nuevoProducto.title}
          onChange={manejarCambioProducto}
          required
        />
        <input
          type="number"
          step="0.01"
          min="0"
          name="price"
          placeholder="Precio"
          value={nuevoProducto.price}
          onChange={manejarCambioProducto}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          value={nuevoProducto.category}
          onChange={manejarCambioProducto}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descripcion"
          value={nuevoProducto.description}
          onChange={manejarCambioProducto}
          required
        />
        <input
          type="url"
          name="image"
          placeholder="URL de la imagen"
          value={nuevoProducto.image}
          onChange={manejarCambioProducto}
          required
        />
      </div>
      <button type="submit" className="btnRegistroProducto">
        Registrar producto
      </button>
    </form>
  );
}

export default RegistrarProductos;
