import AcercaDe from './AcercaDe';
import "./Cards.css";
import Productos from './Productos';
import Contacto from './Contacto';
import Sucursales from './Sucursales';
import Galeria from './Galeria';
import Usuarios from './usuarios';
import Carrito from './carrito';

import PropTypes from 'prop-types';

function Cards({vista}) {
  const vistas = {
    "Inicio": <Inicio/>,
    "AcercaDe": <AcercaDe/>,
    "Productos": <Productos/>,
    "Carrito": <Carrito/>,
    "Usuarios": <Usuarios/>,
    "Contacto": <Contacto/>,
    "Sucursales": <Sucursales/>,
    "Galeria": <Galeria/>,
  }
  return (
    <div className='contenedorDiv'>
      {vistas[vista] || <Inicio/>}
    </div>
  );
}

function Inicio() {
  return (
    <div className="cardsContainer">

      <TarjetaComponent
        titulo="HTML"
        descripcion="Estructura básica de páginas web."
        imagen="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
      />

      <TarjetaComponent
        titulo="Java"
        descripcion="Lenguaje orientado a objetos muy popular."
         imagen="https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png"
      />

      <TarjetaComponent
        titulo="React JSX"
        descripcion="Sintaxis moderna para interfaces dinámicas."
         imagen="http://localhost:5173/src/assets/react.jpg"
      />

      <TarjetaComponent
        titulo="Python"
        descripcion="Lenguaje sencillo y poderoso."
         imagen="https://miro.medium.com/v2/resize:fit:1400/0*9AD8S7C3EVigtxSG"
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

Cards.propTypes = {
  vista: PropTypes.string.isRequired
};

export default Cards;
