function crearOpenStreetMapUrl(lat, lng, zoom = 15) {
  const offset = 0.02;
  const left = lng - offset;
  const right = lng + offset;
  const top = lat + offset;
  const bottom = lat - offset;

  return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lng}`;
}

function crearOpenStreetMapLink(lat, lng, zoom = 15) {
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`;
}

function Mapa({ lat, lng, nombre_sucursal }) {
  const mapUrl = crearOpenStreetMapUrl(lat, lng);
  const mapLink = crearOpenStreetMapLink(lat, lng);

  return (
    <div>
      <h2>{nombre_sucursal}</h2>
      <iframe
        title={`Mapa de ${nombre_sucursal}`}
        src={mapUrl}
        width="100%"
        height="350"
        style={{ border: 0, borderRadius: 12 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p style={{ marginTop: 8 }}>
        <a href={mapLink} target="_blank" rel="noreferrer">
          Ver mapa ampliado
        </a>
      </p>
    </div>
  );
}

export default Mapa;
