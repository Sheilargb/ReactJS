import { useEffect, useState } from "react";
import api from "./Services/api.js";
import { useAuth } from "./AuthContext.jsx";
import "./Categorias.css";
import "./RegistrarProductos.css";

function Categorias() {
  const { isLoggedIn } = useAuth();
  const [categorias, setCategorias] = useState([]);
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState({ loading: true, error: "" });

  const obtenerCategorias = async () => {
    setEstado({ loading: true, error: "" });

    try {
      const response = await api.get("/categories");
      setCategorias(Array.isArray(response.data) ? response.data : []);
      setEstado({ loading: false, error: "" });
    } catch {
      setEstado({
        loading: false,
        error: "No se pudo cargar la lista de categorias.",
      });
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      obtenerCategorias();
    }
  }, [isLoggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post("/categories", { nombre });
      setNombre("");
      obtenerCategorias();
    } catch (error) {
      console.error("Error al registrar categoria:", error);
      alert("No se pudo registrar la categoria");
    }
  };

  const handleEliminar = async (id) => {
    try {
      await api.delete(`/categories/${id}`);
      setCategorias((prev) => prev.filter((categoria) => categoria.id !== id));
    } catch (error) {
      console.error("Error al eliminar categoria:", error);
      alert("No se pudo eliminar la categoria");
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <section className="categorias">
      <div className="categorias-hero">
        <div>
          <span className="categorias-tag">CATEGORIAS</span>
          <h2>Administra las categorias de la tienda</h2>
          <p className="categorias-lead">
            Crea categorias reales para tus productos y visualiza el contenido
            almacenado en la base de datos.
          </p>
        </div>
        <div className="categorias-resumen">
          <p className="categorias-contador">
            {categorias.length} categorias disponibles
          </p>
          <p className="categorias-fuente">Fuente: MySQL</p>
        </div>
      </div>

      <form className="registroProductoForm" onSubmit={handleSubmit}>
        <div className="registroProductoGrid">
          <input
            type="text"
            placeholder="Nombre de la categoria"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btnRegistroProducto">
          Registrar categoria
        </button>
      </form>

      {estado.loading && (
        <div className="categorias-estado">Cargando categorias...</div>
      )}
      {estado.error && (
        <div className="categorias-estado error">{estado.error}</div>
      )}

      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <article className="categoria-card" key={categoria.id}>
            <div className="categoria-body">
              <h3>{categoria.nombre}</h3>
              <p>Categoria registrada con id #{categoria.id}</p>
              <button
                type="button"
                className="btnTabla eliminar"
                onClick={() => handleEliminar(categoria.id)}
              >
                Eliminar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Categorias;
