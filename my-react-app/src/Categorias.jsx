import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext.jsx";
import "./Categorias.css";

const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

function Categorias() {
  const { isLoggedIn } = useAuth();
  const [categorias, setCategorias] = useState([]);
  const [estado, setEstado] = useState({ loading: true, error: "" });

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    let activo = true;
    setEstado({ loading: true, error: "" });

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Respuesta no valida");
        }
        return response.json();
      })
      .then((data) => {
        if (!activo) return;
        setCategorias(data?.categories ?? []);
        setEstado({ loading: false, error: "" });
      })
      .catch(() => {
        if (!activo) return;
        setEstado({
          loading: false,
          error: "No se pudo cargar la lista de categorias.",
        });
      });

    return () => {
      activo = false;
    };
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <section className="categorias">
      <div className="categorias-hero">
        <div>
          <span className="categorias-tag">CATEGORIAS</span>
          <h2>Explora recetas por categoria</h2>
          <p className="categorias-lead">
            Descubre opciones internacionales y encuentra el siguiente platillo
            para tu menu. Cada categoria incluye una vista previa y su
            descripcion.
          </p>
        </div>
        <div className="categorias-resumen">
          <p className="categorias-contador">
            {categorias.length} categorias disponibles
          </p>
          <p className="categorias-fuente">Fuente: TheMealDB</p>
        </div>
      </div>

      {estado.loading && (
        <div className="categorias-estado">Cargando categorias...</div>
      )}
      {estado.error && (
        <div className="categorias-estado error">{estado.error}</div>
      )}

      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <article className="categoria-card" key={categoria.idCategory}>
            <div className="categoria-media">
              <img
                src={categoria.strCategoryThumb}
                alt={categoria.strCategory}
                loading="lazy"
              />
            </div>
            <div className="categoria-body">
              <h3>{categoria.strCategory}</h3>
              <p>{categoria.strCategoryDescription}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Categorias;
