import { useEffect, useState } from 'react';
import api from './Services/api.js';
import RegistrarProductos from './RegistrarProductos.jsx';
import './Productos.css';
import { useAuth } from './AuthContext.jsx';

function Productos() {
  const { isLoggedIn, user } = useAuth();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);

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
    if (!user?.id) {
      alert('Necesitas iniciar sesion para agregar al carrito');
      return;
    }

    try {
      const cartsResponse = await api.get('/carts');
      const carritos = Array.isArray(cartsResponse.data) ? cartsResponse.data : [];
      const carritoPendiente = carritos.find(
        (item) => Number(item.userId) === Number(user.id) && item.estado === 'pendiente'
      );

      if (carritoPendiente) {
        const products = Array.isArray(carritoPendiente.products)
          ? [...carritoPendiente.products]
          : [];
        const existingProduct = products.find(
          (item) => Number(item.productId) === Number(producto.id)
        );

        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          products.push({
            productId: producto.id,
            quantity: 1,
            price: Number(producto.price),
          });
        }

        await api.put(`/carts/${carritoPendiente.id}`, {
          userId: user.id,
          total: products.reduce((acc, item) => acc + item.quantity * Number(item.price), 0),
          estado: 'pendiente',
          date: carritoPendiente.date,
          products,
        });
      } else {
        await api.post('/carts', {
          userId: user.id,
          total: Number(producto.price),
          estado: 'pendiente',
          date: new Date().toISOString(),
          products: [
            {
              productId: producto.id,
              quantity: 1,
              price: Number(producto.price),
            },
          ],
        });
      }

      alert('Producto agregado al carrito');
    } catch (error) {
      console.error('Error al agregar producto al carrito:', error);
      alert('No se pudo agregar el producto al carrito');
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

  const handleEditarProducto = (producto) => {
    setProductoEnEdicion(producto);
  };

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="productosDiv">
      <h1>Nuestros Productos</h1>
      {isLoggedIn && (
        <RegistrarProductos
          onActualizacionExitosa={obtenerProductos}
          productoEnEdicion={productoEnEdicion}
          onCancelarEdicion={() => setProductoEnEdicion(null)}
        />
      )}
      {productos.map((producto) => (
        <div key={producto.id} className="productoItem">
          <p>{producto.title}</p>
          <p>${producto.price}</p>
          <p>{producto.category || 'Sin categoria'}</p>
          <p>Stock: {producto.stock}</p>
          <img src={producto.image} alt={producto.title} />
          <div className="accionesProducto">
            <button
              type="button"
              className="btnProducto agregar"
              onClick={() => manejarAgregar(producto)}
            >
              Agregar
            </button>
            {isLoggedIn && (
              <>
                <button
                  type="button"
                  className="btnProducto editar"
                  onClick={() => handleEditarProducto(producto)}
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btnProducto eliminar"
                  onClick={() => manejarEliminar(producto.id)}
                >
                  Eliminar
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productos;
