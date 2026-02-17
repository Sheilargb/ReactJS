import { useEffect, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '350px',
};

const libraries = ['marker'];

function Mapa({ lat, lng, nombre_sucursal }) {
  const [mapa, setMapa] = useState(null);
  const marcadorRef = useRef(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || import.meta.env.API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || '',
    libraries,
  });

  const center = { lat, lng };

  useEffect(() => {
    if (!isLoaded || !mapa || !window.google?.maps?.marker?.AdvancedMarkerElement) {
      return;
    }

    if (marcadorRef.current) {
      marcadorRef.current.map = null;
    }

    marcadorRef.current = new window.google.maps.marker.AdvancedMarkerElement({
      map: mapa,
      position: center,
      title: nombre_sucursal,
    });

    return () => {
      if (marcadorRef.current) {
        marcadorRef.current.map = null;
      }
    };
  }, [isLoaded, mapa, center.lat, center.lng, nombre_sucursal]);

  if (!apiKey) {
    return (
      <div style={{ padding: 12, background: '#fff3cd', color: '#856404' }}>
        Google Maps API key no encontrada. Define <strong>VITE_GOOGLE_MAPS_API_KEY</strong> en tu .env
      </div>
    );
  }

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <div>
      <h2>{nombre_sucursal}</h2>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={(mapInstance) => setMapa(mapInstance)}
        onUnmount={() => setMapa(null)}
        options={{ mapId: 'DEMO_MAP_ID' }}
      />
    </div>
  );
}

export default Mapa;

