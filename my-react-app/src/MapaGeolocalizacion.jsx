import { useEffect, useState } from 'react';

function crearOpenStreetMapUrl(lat, lng) {
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

function MapaGeolocalizacion() {
  const [ubicacion, setUbicacion] = useState(null);
  const [errorUbicacion, setErrorUbicacion] = useState('');

  useEffect(() => {
    if (!navigator.geolocation) {
      setErrorUbicacion('Tu navegador no soporta geolocalizacion.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setErrorUbicacion('No se pudo obtener tu ubicacion. Se muestra una ubicacion por defecto.');
        setUbicacion({ lat: 19.4326, lng: -99.1332 });
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  return (
    <div className="google-map">
      {errorUbicacion && (
        <p style={{ margin: '0 0 8px', fontSize: 14, color: '#fef08a' }}>{errorUbicacion}</p>
      )}
      {!ubicacion && <p style={{ margin: 0, fontSize: 14 }}>Obteniendo ubicacion...</p>}
      {ubicacion ? (
        <>
          <iframe
            title="Mapa de tu ubicacion"
            src={crearOpenStreetMapUrl(ubicacion.lat, ubicacion.lng)}
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: 12 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p style={{ marginTop: 8 }}>
            <a
              href={crearOpenStreetMapLink(ubicacion.lat, ubicacion.lng)}
              target="_blank"
              rel="noreferrer"
            >
              Ver ubicacion ampliada
            </a>
          </p>
        </>
      ) : null}
    </div>
  );
}

export default MapaGeolocalizacion;
