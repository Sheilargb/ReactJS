import miLogo from "./assets/batman.png";
import Facebook from "./assets/facebook.png";
import Instagram from "./assets/social.png";
import TikTok from "./assets/tik-tok.png";
import WhatsApp from "./assets/whatsapp.png";
import "./encabezado.css";

function Encabezado() {
  return (
    <header className="Encabezado">

      {/* Logo */}
      <div className="logoDiv">
        <img src={miLogo} alt="Logo" />
      </div>

      {/* Menú centrado */}
      <nav className="menuDiv">
        <ul className="menu">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      {/* Redes */}
      <div className="redesDiv">
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={TikTok} alt="TikTok" />
        <img src={WhatsApp} alt="WhatsApp" />
      </div>

    </header>
  );
}

export default Encabezado;
