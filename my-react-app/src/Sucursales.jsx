import Mapa from './Mapa';
import "./Sucursales.css";

function Sucursales({ sucursalesData }) {
  const sucursales = sucursalesData || [
    {
      id: 1,
      nombre: "📍 Ciudad de México",
      direccion: "Av. Tecnología 123, Centro",
      modalidad: "Modalidad presencial y talleres empresariales",
      imagen: "https://www.aprender21.mx/images/course-thumbnails/ejava-thumbnail.webp",
      lat: 19.4326,
      lng: -99.1332
    },
    {
      id: 2,
      nombre: "Guadalajara",
      direccion: "Av. Innovación 456, Chapalita",
      modalidad: "Cursos de React y Python",
      imagen: "https://mexico.unir.net/wp-content/uploads/sites/6/2024/11/programacion-web.jpg",
      lat: 20.6596,
      lng: -103.2822
    },
    {
      id: 3,
      nombre: "Querétaro",
      direccion: "Av. Tecnología 789, Centro",
      modalidad: "Modalidad presencial y talleres empresariales",
      imagen: "https://www.dondeir.com/wp-content/uploads/2022/03/pilares-ofrecera-cursos-de-programacion-gratis-en-cdmx.jpg",
      lat: 20.5888,
      lng: -100.3889
    },
    {
      id: 4,
      nombre: "Puebla",
      direccion: "Av. Tecnología 101, Centro",
      modalidad: "Modalidad presencial y talleres empresariales",
      imagen: "https://www.curso-de-java.mx/images/programacion-python.jpg",
      lat: 19.0327,
      lng: -98.2064
    },
    {
      id: 5,
      nombre: "Ensenada",
      direccion: "Taller",
      modalidad: "Disponible para todo México y LATAM",
      imagen: "https://oem.com.mx/elsoldemexico/img/13775447/1720362976/BASE_LANDSCAPE/480/image.webp",
      lat: 31.8661,
      lng: -116.6195
    },
    {
      id: 6,
      nombre: "Online",
      direccion: "Clases en vivo + grabaciones",
      modalidad: "Disponible para todo México y LATAM",
      imagen: "https://www.generacionuniversitaria.com.mx/wp-content/uploads/2022/06/programacion-1024x631.jpg",
      lat: null,
      lng: null
    }
  ];

  return (
    <section className="sucursales">
      <h2 className="titulo-seccion">Nuestras Sucursales</h2>
      <p className="sub-seccion">
        Contamos con espacios de formación presencial y remota.
      </p>

      <div className="cards-sucursales">
        {sucursales.map((sucursal) => (
          <div key={sucursal.id} className="card-sucursal">
            <img
              className="producto-img"
              src={sucursal.imagen}
              alt={sucursal.nombre}
            />
            <h3>{sucursal.nombre}</h3>
            <p>{sucursal.direccion}</p>
            <span>{sucursal.modalidad}</span>
            {sucursal.lat && sucursal.lng && (
              <>
                <div className="coordenadas">
                  <small>📍 {sucursal.lat.toFixed(4)}, {sucursal.lng.toFixed(4)}</small>
                </div>
                <Mapa lat={sucursal.lat} lng={sucursal.lng} nombre_sucursal={sucursal.nombre} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sucursales;
