import AcercaDe from './AcercaDe';
import "./Cards.css";
import Productos from './Productos';
import Contacto from './Contacto';
import Sucursales from './Sucursales';
import Galeria from './Galeria';
import Usuarios from './usuarios';
import Carrito from './carrito';
import Login from './login';
import Categorias from './Categorias';
import { useAuth } from './AuthContext.jsx';

import PropTypes from 'prop-types';

function Cards({vista, cambiarVista}) {
  const { isLoggedIn, isAdmin } = useAuth();

  const obtenerVista = () => {
    switch (vista) {
      case "AcercaDe":
        return <AcercaDe />;
      case "Productos":
        return <Productos />;
      case "Carrito":
        return isLoggedIn && isAdmin ? <Carrito /> : <Inicio />;
      case "Usuarios":
        return isLoggedIn && isAdmin ? <Usuarios /> : <Inicio />;
      case "Categorias":
        return isLoggedIn && isAdmin ? <Categorias /> : <Inicio />;
      case "Contacto":
        return <Contacto />;
      case "Sucursales":
        return <Sucursales />;
      case "Galeria":
        return <Galeria />;
      case "Iniciar Sesion":
        return (
          <Login
            onCrearCuenta={() => cambiarVista("Registrar Usuario")}
            onLoginExitoso={() => cambiarVista("Inicio")}
          />
        );
      case "Registrar Usuario":
        return isLoggedIn && isAdmin
          ? <Usuarios mostrarFormularioInicial />
          : <Usuarios modoRegistroPublico onRegistroCompleto={() => cambiarVista("Inicio")} />;
      case "Inicio":
      default:
        return <Inicio />;
    }
  };

  return (
    <div className='contenedorDiv'>
      {obtenerVista()}
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
         imagen="https://miro.medium.com/0*gtY-llyEbkeoS1Sp.png"
      />

      <TarjetaComponent
        titulo="React JSX"
        descripcion="Sintaxis moderna para interfaces dinámicas."
         imagen="https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd3f0ff2ab5398aaffb00fa0b3afcb238772f42e7-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75"
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
  vista: PropTypes.string.isRequired,
  cambiarVista: PropTypes.func.isRequired,
};

export default Cards;
