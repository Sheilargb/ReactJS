import { useEffect, useState } from 'react';
import api from './Services/api.js';
import './carrito.css';
import { useAuth } from './AuthContext.jsx';

function Carrito() {
  const { user } = useAuth();
  const [carritos, setCarritos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerCarritos = async () => {
    try {
      const response = await api.get('/carts');
      const data = Array.isArray(response.data) ? response.data : [];
      const filtrados = user?.id
        ? data.filter((carrito) => Number(carrito.userId) === Number(user.id))
        : data;
      setCarritos(filtrados);
    } catch (error) {
      console.error('Error al obtener los carritos:', error);
    } finally {
      setCargando(false);
    }
  };

  const eliminarProducto = async (carrito, productoId) => {
    const products = (carrito.products || []).filter(
      (producto) => Number(producto.productId) !== Number(productoId)
    );

    try {
      await api.put(`/carts/${carrito.id}`, {
        userId: carrito.userId,
        total: products.reduce((acc, item) => acc + item.quantity * Number(item.price), 0),
        estado: products.length ? carrito.estado : 'cancelado',
        date: carrito.date,
        products,
      });
      obtenerCarritos();
    } catch (error) {
      console.error('Error al actualizar el carrito:', error);
      alert('No se pudo actualizar el carrito');
    }
  };

  const comprarCarrito = async (carrito) => {
    try {
      await api.put(`/carts/${carrito.id}`, {
        userId: carrito.userId,
        total: carrito.total,
        estado: 'pagado',
        date: carrito.date,
        products: carrito.products,
      });
      obtenerCarritos();
    } catch (error) {
      console.error('Error al comprar carrito:', error);
      alert('No se pudo completar la compra');
    }
  };

  useEffect(() => {
    obtenerCarritos();
  }, [user]);

  if (cargando) {
    return <p>Cargando carritos...</p>;
  }

  return (
    <section className="carritoSection">
      <h1>Carrito de compras</h1>
      {!carritos.length && (
        <p className="carritoVacio">
          No hay productos en tu carrito todavia.
        </p>
      )}
      <div className="carritoGrid">
        {carritos.map((carrito) => (
          <article className="carritoCard" key={carrito.id}>
            <p className="carritoId">{carrito.id}</p>
            <p className="carritoFecha">{carrito.date}</p>
            <p>Estado: {carrito.estado}</p>
            <p>Total: ${Number(carrito.total).toFixed(2)}</p>
            <h3>Productos</h3>

            <ul>
              {Array.isArray(carrito.products) &&
                carrito.products.map((producto) => (
                  <li key={`${carrito.id}-${producto.productId}`}>
                    {producto.product?.nombre || `Producto #${producto.productId}`} - Cantidad: {producto.quantity}
                    <button
                      type="button"
                      className="btnEliminarProducto"
                      onClick={() => eliminarProducto(carrito, producto.productId)}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
            </ul>

            <button type="button" onClick={() => comprarCarrito(carrito)}>
              Comprar
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Carrito;
