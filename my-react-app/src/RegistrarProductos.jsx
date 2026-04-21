import { useEffect, useState } from 'react';
import api from './Services/api.js';
import './RegistrarProductos.css';

const initialState = {
  title: '',
  price: '',
  description: '',
  category: '',
  image: '',
  stock: '',
};

function RegistrarProductos({
  onActualizacionExitosa,
  productoEnEdicion,
  onCancelarEdicion,
}) {
  const [nuevoProducto, setNuevoProducto] = useState(initialState);
  const isEditing = Boolean(productoEnEdicion?.id);

  useEffect(() => {
    if (productoEnEdicion?.id) {
      setNuevoProducto({
        title: productoEnEdicion.title || '',
        price: productoEnEdicion.price ?? '',
        description: productoEnEdicion.description || '',
        category: productoEnEdicion.category || '',
        image: productoEnEdicion.image || '',
        stock: productoEnEdicion.stock ?? '',
      });
      return;
    }

    setNuevoProducto(initialState);
  }, [productoEnEdicion]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevoProducto((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      ...nuevoProducto,
      price: Number(nuevoProducto.price),
      stock: Number(nuevoProducto.stock || 0),
    };

    try {
      if (isEditing) {
        const respuesta = await api.put(`/products/${productoEnEdicion.id}`, payload);
        console.log('Producto actualizado:', respuesta.data);
        alert('Producto actualizado con exito');
      } else {
        const respuesta = await api.post('/products', payload);
        console.log('Producto registrado:', respuesta.data);
        alert('Producto registrado con exito');
      }

      setNuevoProducto(initialState);
      if (onCancelarEdicion) {
        onCancelarEdicion();
      }

      if (onActualizacionExitosa) {
        onActualizacionExitosa();
      }
    } catch (error) {
      console.error('Error al guardar producto:', error);
      alert('Error al guardar producto');
    }
  };

  return (
    <form className="registroProductoForm" onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Editar producto' : 'Registro de producto'}</h2>
      <div className="registroProductoGrid">
        <input
          type="text"
          name="title"
          placeholder="Nombre del producto"
          value={nuevoProducto.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          step="0.01"
          min="0"
          name="price"
          placeholder="Precio"
          value={nuevoProducto.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          value={nuevoProducto.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descripcion"
          value={nuevoProducto.description}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="image"
          placeholder="URL de la imagen"
          value={nuevoProducto.image}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          min="0"
          name="stock"
          placeholder="Stock"
          value={nuevoProducto.stock}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btnRegistroProducto">
        {isEditing ? 'Guardar cambios' : 'Registrar producto'}
      </button>
    </form>
  );
}

export default RegistrarProductos;
