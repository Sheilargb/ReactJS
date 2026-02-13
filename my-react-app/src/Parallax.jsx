import MapaGeolocalizacion from "./MapaGeolocalizacion";
import "./parallax.css";

function Parallax({ imageUrl }) {
  const background =
    imageUrl ||
    "https://concepto.de/wp-content/uploads/2020/08/Programacion-informatica-scaled-e1724960033513.jpg";

  return (
    <div
      className="parallax"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="parallax-content">
        <h2>Promociones</h2>
        <p>¡Descubre nuestras últimas promociones!</p>
        <MapaGeolocalizacion />
      </div>
    </div>
  );
}

export default Parallax;
