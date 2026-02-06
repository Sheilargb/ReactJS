import "./Cards.css";

function Tarjeta({ imagen, titulo, descripcion }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} />

      <h3>{titulo}</h3>

      <p>{descripcion}</p>

      <button>Ver más</button>
    </div>
  );
}

export default Tarjeta;
