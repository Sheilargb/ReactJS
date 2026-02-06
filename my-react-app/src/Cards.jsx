import Tarjeta from "./Tarjeta";
import "./Cards.css";

/* imágenes */
import html from "./assets/html.jpg";
import java from "./assets/java.jpg";
import jsx from "./assets/react.jpg";
import python from "./assets/python.jpg";

function Cards() {
  return (
    <div className="contenedorTarjetas">

      <Tarjeta
        imagen={html}
        titulo="HTML"
        descripcion="Estructura básica de páginas web."
      />

      <Tarjeta
        imagen={java}
        titulo="Java"
        descripcion="Lenguaje orientado a objetos muy popular."
      />

      <Tarjeta
        imagen={jsx}
        titulo="React JSX"
        descripcion="Sintaxis moderna para interfaces dinámicas."
      />

      <Tarjeta
        imagen={python}
        titulo="Python"
        descripcion="Lenguaje sencillo y poderoso."
      />

    </div>
  );
}

export default Cards;
