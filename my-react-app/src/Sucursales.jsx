import "./Sucursales.css";

function Sucursales() {
  return (
    <section className="sucursales">

      <h2 className="titulo-seccion">Nuestras Sucursales</h2>
      <p className="sub-seccion">
        Contamos con espacios de formación presencial y remota.
      </p>

      <div className="cards-sucursales">

        <div className="card-sucursal">
          <h3>📍 Ciudad de México</h3>
          <p>Av. Tecnología 123, Centro</p>
          <span>Modalidad presencial y talleres empresariales</span>
        </div>

        <div className="card-sucursal">
          <h3>📍 Guadalajara</h3>
          <p>Av. Innovación 456, Chapalita</p>
          <span>Cursos de React y Python</span>
        </div>

        <div className="card-sucursal">
          <h3>💻 Online</h3>
          <p>Clases en vivo + grabaciones</p>
          <span>Disponible para todo México y LATAM</span>
        </div>

      </div>

    </section>
  );
}

export default Sucursales;
