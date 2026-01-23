import miLogo from "./assets/photoshop.png";
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
            <h2>Bienvenido a mi sitio</h2>
        </div>
    );
}

function Logo(){
    return (
         <div className="Logo">
            <img src={miLogo} alt="React Logo" />
        </div>
    )
}

function Menu(){
    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    );
}

function Redes() {
    return(
        <div>
            <h2>Redes Sociales</h2>
            <ul>
                <li><img src={Facebook} alt="Facebook" width="50" /></li>
                <li><img src={Instagram} alt="Instagram" width="50" /></li>
                <li><img src={TikTok} alt="TikTok" width="50" /></li>
                <li><img src={WhatsApp} alt="WhatsApp" width="50" /></li>
            </ul>
        </div>
         
      )

}
export default Encabezado;