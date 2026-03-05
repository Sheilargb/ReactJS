import miLogo from "./assets/batman.png";
import Facebook from "./assets/facebook.png";
import Instagram from "./assets/social.png";
import TikTok from "./assets/tik-tok.png";
import WhatsApp from "./assets/whatsapp.png";
import "./encabezado.css";
import PropTypes from 'prop-types';
import Clima from "./clima";

function Encabezado({cambiarVista}) {
 return (
        <div className="Encabezado">
            <Logo/>
            <Menu cambiarVista={cambiarVista}/>
            <Redes/>
        </div>

    );
}


function Logo(){
    return (
        <div className="logoDiv">
            <img src={miLogo} alt="React Logo" />
        </div>
    )
}

function Menu({cambiarVista}) {
    return (
        <nav className="menuDiv">
    
            <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista("Inicio"); }}>Inicio</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista("AcercaDe"); }}>Acerca de</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista("Usuarios"); }}>Usuarios</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista("Productos"); }}>Productos</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista("Carrito"); }}>Carrito</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista("Galeria"); }}>Galeria</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista("Sucursales"); }}>Sucursales</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista("Contacto"); }}>Contacto</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista("Iniciar Sesion"); }}>Iniciar Sesion</a></li>
            </ul>
        </nav>
    );
}

function Redes() {
    return (
        <div className="redesDiv">
            <ul>
                    <li><a href='#'><img src={Facebook} alt="Facebook"  /></a></li>
                    <li><a href='#'><img src={Instagram} alt="Instagram"  /></a></li>
                    <li><a href='#'><img src={TikTok} alt="TikTok" /></a></li>
                    <li><a href='#'><img src={WhatsApp} alt="WhatsApp" /></a></li>
            </ul>
            <Clima/>
        </div>
    );
}

Encabezado.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};

Menu.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};

export default Encabezado;


