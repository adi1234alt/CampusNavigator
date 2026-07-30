import buildings from "../../data/buildings";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import SearchLocation from "./SearchLocation";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        const current = [
          location.coords.latitude,
          location.coords.longitude,
        ];

        setPosition(current);
        map.flyTo(current, 17);
      },
      () => {
        alert("Please allow location access.");
      }
    );
  }, [map]);

  if (!position) return null;

  return (
    <Marker position={position}>
      <Popup>📍 You are here</Popup>
    </Marker>
  );
}

function MapView({ searchText }) {
  const locations = [
    {
      name: "Library",
      position: [23.0775, 76.8513],
    },
    {
      name: "Academic Block",
      position: [23.0780, 76.8520],
    },
    {
      name: "Hostel",
      position: [23.0768, 76.8504],
    },
    {
      name: "Cafeteria",
      position: [23.0771, 76.8526],
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Smart Campus Map
      </h2>

      <MapContainer
        center={[23.0775, 76.8513]}
        zoom={16}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "15px",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((place, index) => (
          <Marker key={index} position={place.position}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}

        <SearchLocation
          searchText={searchText}
          locations={locations}
        />

        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default MapView;