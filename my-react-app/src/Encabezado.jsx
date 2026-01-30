import miLogo from "./assets/batman.png";
import Facebook from "./assets/facebook.png";
import Instagram from "./assets/social.png";
import TikTok from "./assets/tik-tok.png";
import WhatsApp from "./assets/whatsapp.png";
import "./encabezado.css";

function Encabezado() {
    return (
        <div className="Encabezado">
            <Logo />
            <Menu />
            <Redes />

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

function Menu(){
    return (
        <div className="menuDiv">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Sucursales</a></li>

            </ul>
        </div>
    );
}

function Redes() {
    return(
        <div className="redesDiv">
            <ul>
                <li><a href="#"><img src={Facebook} alt="Facebook" width="50" /></a></li>
                <li><a href="#"><img src={Instagram} alt="Instagram" width="50" /></a></li>
                <li><a href="#"><img src={TikTok} alt="TikTok" width="50" /></a></li>
                <li><a href="#"><img src={WhatsApp} alt="WhatsApp" width="50" /></a></li>
            </ul>
        </div>
      )
}

export default Encabezado;