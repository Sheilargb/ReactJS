import "./Cards.css";

/* imágenes */
import html from "./assets/html.jpg";
import java from "./assets/java.jpg";
import jsx from "./assets/react.jpg";
import python from "./assets/python.jpg";

function Cards() {
  return (
    <div className="cardsContainer">

      <TarjetaComponent
        titulo="HTML"
        descripcion="Estructura básica de páginas web."
        imagen={html}
      />

      <TarjetaComponent
        titulo="Java"
        descripcion="Lenguaje orientado a objetos muy popular."
         imagen={java}
      />

      <TarjetaComponent
        titulo="React JSX"
        descripcion="Sintaxis moderna para interfaces dinámicas."
         imagen={jsx}
      />

      <TarjetaComponent
        titulo="Python"
        descripcion="Lenguaje sencillo y poderoso."
         imagen={python}
      />
    </div>
  );
}

function TarjetaComponent(props) {
  return (
    <div className='card'>
      <img src={props.imagen} alt="Logotipo" />
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
      <a href="#">Ver más</a>
    </div>
  );
}
export default Cards;
