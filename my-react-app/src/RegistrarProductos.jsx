import { useState } from 'react';

function RegistrarProductos() {
  const [productos, setProductos] = useState({
    nombre: '',
    precio: '',
    decripcion: '',
    categoria: '',
    imagen: '',
  });
  
  const handChange = (e) => {
    setProductos({...productos, 
      [e.target.name]: e.target.value
    });
}
  const handleSubmit = (e) => {
   /* nombre: '',
    precio: '',
    decripcion: '',
    categoria: '',
    imagen: '',
  });

  const manejarCambioProducto = (event) => {
    const { name, value } = event.target;
    setProductos((prev) => ({ ...prev, [name]: value }));
  };

  const registrarProducto = (event) => {
    event.preventDefault();
  };

  return (
    <form className="registroProductoForm" onSubmit={registrarProducto}>
      <h2>Registro de producto</h2>
      <div className="registroProductoGrid">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={nuevoProducto.nombre}
          onChange={manejarCambioProducto}
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={nuevoProducto.precio}
          onChange={manejarCambioProducto}
        />
        <input
          type="text"
          name="imagen"
          placeholder="URL de la imagen"
          value={nuevoProducto.imagen}
          onChange={manejarCambioProducto}
        />
      </div>
      <button type="submit" className="btnRegistroProducto">
        Registrar producto
      </button>
    </form>
  );
  */
}

}
export default RegistrarProductos;
