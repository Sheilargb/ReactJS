import miLogo from "./assets/batman.png";
import Facebook from "./assets/facebook.png";
import Instagram from "./assets/social.png";
import TikTok from "./assets/tik-tok.png";
import WhatsApp from "./assets/whatsapp.png";
import "./encabezado.css";
import PropTypes from 'prop-types';

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
                <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => cambiarVista("Productos")}>Productos</li>
                <li onClick={() => cambiarVista("Contacto")}>Contacto</li>
                <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
                <li onClick={() => cambiarVista("Galeria")}>Galeria</li>
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


