import { useEffect, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '350px',
};

const libraries = ['marker'];

function MapaGeolocalizacion() {
  const [ubicacion, setUbicacion] = useState(null);
  const [errorUbicacion, setErrorUbicacion] = useState('');
  const [mapa, setMapa] = useState(null);
  const marcadorRef = useRef(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || import.meta.env.API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script-parallax',
    googleMapsApiKey: apiKey || '',
    libraries,
  });

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

  useEffect(() => {
    if (!isLoaded || !mapa || !ubicacion || !window.google?.maps?.marker?.AdvancedMarkerElement) {
      return;
    }

    if (marcadorRef.current) {
      marcadorRef.current.map = null;
    }

    marcadorRef.current = new window.google.maps.marker.AdvancedMarkerElement({
      map: mapa,
      position: ubicacion,
      title: 'Tu ubicacion',
    });

    return () => {
      if (marcadorRef.current) {
        marcadorRef.current.map = null;
      }
    };
  }, [isLoaded, mapa, ubicacion]);

  if (!apiKey) {
    return (
      <div style={{ padding: 12, background: '#fff3cd', color: '#856404' }}>
        Google Maps API key no encontrada. Define <strong>VITE_GOOGLE_MAPS_API_KEY</strong> en tu .env
      </div>
    );
  }

  if (loadError) {
    return (
      <div style={{ padding: 12, background: '#fee2e2', color: '#991b1b' }}>
        Error al cargar Google Maps.
      </div>
    );
  }

  return (
    <div className="google-map">
      {errorUbicacion && (
        <p style={{ margin: '0 0 8px', fontSize: 14, color: '#fef08a' }}>{errorUbicacion}</p>
      )}
      {!isLoaded && <p style={{ margin: 0, fontSize: 14 }}>Cargando mapa...</p>}
      {isLoaded && ubicacion ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={ubicacion}
          zoom={16}
          onLoad={(mapInstance) => setMapa(mapInstance)}
          onUnmount={() => setMapa(null)}
          options={{ mapId: 'DEMO_MAP_ID' }}
        />
      ) : null}
      {isLoaded && !ubicacion && (
        <p style={{ margin: 0, fontSize: 14 }}>Obteniendo ubicacion...</p>
      )}
    </div>
  );
}

export default MapaGeolocalizacion;
