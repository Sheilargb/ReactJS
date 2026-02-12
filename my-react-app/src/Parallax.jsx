import Mapa from './Mapa';
import "./parallax.css";

function Parallax({ imageUrl }) {
  const background =
    imageUrl ||
    "https://concepto.de/wp-content/uploads/2020/08/Programacion-informatica-scaled-e1724960033513.jpg";

  return (
    <div
      className="parallax-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2>Promociones</h2>
      <p>¡Descubre nuestras últimas promociones!</p>
      <Mapa lat={20.238307064269975} lng={-97.95604634730972} nombre_sucursal="Sucursal Principal" />
    </div>
  );
}

export default Parallax;
