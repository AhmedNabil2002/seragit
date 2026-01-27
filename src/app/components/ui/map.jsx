// src/components/Map.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export  function Map() {
  const location = [30.05817,31.32726 ]; // 👈 غيّر الإحداثيات هنا

  return (
    <MapContainer
      center={location}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location}>
        <Popup>Company Location</Popup>
      </Marker>
    </MapContainer>
  );
}
