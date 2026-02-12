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
          <img
            className="producto-img"
            src="https://www.aprender21.mx/images/course-thumbnails/ejava-thumbnail.webp"
            alt="Curso de Desarrollo Web"
          />
          <h3>📍 Ciudad de México</h3>
          <p>Av. Tecnología 123, Centro</p>
          <span>Modalidad presencial y talleres empresariales</span>
        </div>

        <div className="card-sucursal">
          <img
            className="producto-img"
            src="https://mexico.unir.net/wp-content/uploads/sites/6/2024/11/programacion-web.jpg"
            alt="Curso de Desarrollo Web"
          />
          <h3>Guadalajara</h3>
          <p>Av. Innovación 456, Chapalita</p>
          <span>Cursos de React y Python</span>
        </div>

        <div className="card-sucursal">
          <img
            className="producto-img"
            src="https://www.dondeir.com/wp-content/uploads/2022/03/pilares-ofrecera-cursos-de-programacion-gratis-en-cdmx.jpg"
          />
          <h3>Querétaro</h3>
          <p>Av. Tecnología 789, Centro</p>
          <span>Modalidad presencial y talleres empresariales</span>
        </div>

        <div className="card-sucursal">
          <img
            className="producto-img"
            src="https://www.curso-de-java.mx/images/programacion-python.jpg"
          />
          <h3>Puebla</h3>
          <p>Av. Tecnología 101, Centro</p>
          <span>Modalidad presencial y talleres empresariales</span>
        </div>

        <div className="card-sucursal">
          <img
            className="producto-img"
            src="https://oem.com.mx/elsoldemexico/img/13775447/1720362976/BASE_LANDSCAPE/480/image.webp"
          />
          <h3>Ensedada</h3>
          <p>Taller</p>
          <span>Disponible para todo México y LATAM</span>
        </div>

        <div className="card-sucursal">
          <img
            className="producto-img"
            src="https://www.generacionuniversitaria.com.mx/wp-content/uploads/2022/06/programacion-1024x631.jpg"
          />
          <h3>Online</h3>
          <p>Clases en vivo + grabaciones</p>
          <span>Disponible para todo México y LATAM</span>
        </div>

      </div>

    </section>
  );
}

export default Sucursales;
