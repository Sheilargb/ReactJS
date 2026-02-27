import { useEffect, useState } from 'react';
import api from './Services/api.js';
import './carrito.css';

function Carrito() {
  const [carritos, setCarritos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const eliminarProducto = (carritoId, productoId, indexProducto) => {
    setCarritos((prevCarritos) =>
      prevCarritos.map((carrito) => {
        if (carrito.id !== carritoId) {
          return carrito;
        }

        return {
          ...carrito,
          products: Array.isArray(carrito.products)
            ? carrito.products.filter(
                (_, index) =>
                  !(
                    index === indexProducto &&
                    carrito.products[index].productId === productoId
                  )
              )
            : [],
        };
      })
    );
  };

  useEffect(() => {
    const obtenerCarritos = async () => {
      try {
        const response = await api.get('/carts');
        setCarritos(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error al obtener los carritos:', error);
      } finally {
        setCargando(false);
      }
    };

    obtenerCarritos();
  }, []);

  if (cargando) {
    return <p>Cargando carritos...</p>;
  }

  return (
    <section className="carritoSection">
      <h1>Carrito de compras</h1>
      <div className="carritoGrid">
        {carritos.map((carrito) => (
          <article className="carritoCard" key={carrito.id}>
            <p className="carritoId">{carrito.id}</p>
            <p className="carritoFecha">{carrito.date}</p>
            <h3>Productos</h3>

            <ul>
              {Array.isArray(carrito.products) &&
                carrito.products.map((producto, index) => (
                  <li key={`${carrito.id}-${producto.productId}-${index}`}>
                    Productos #{producto.productId} - Cantidad: {producto.quantity}
                    <button
                      type="button"
                      className="btnEliminarProducto"
                      onClick={() =>
                        eliminarProducto(carrito.id, producto.productId, index)
                      }
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
            </ul>

            <button type="button">Comprar</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Carrito;
