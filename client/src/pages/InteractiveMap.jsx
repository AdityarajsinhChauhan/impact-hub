import React , { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import interactiveMapData from "../interactiveMapData";

const InteractiveMap = ({ setactive }) => {
  useEffect(() => {
    setactive("interactive map");
  }, [setactive]);
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="text-3xl font-bold mt-10">Interactive Map</h1>
      <p className="text-lg text-gray-700 mt-2 text-center max-w-2xl">
        Find volunteering events, donation centers, and advocacy groups near you.
      </p>

      <MapContainer center={[20.5937, 78.9629]} zoom={4} className="w-[90vw] h-[60vh] mt-5 rounded-lg shadow-md">
        {/* Map Tile */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Markers for Different Events */}
        {interactiveMapData.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup>
              <h2 className="font-bold">{location.name}</h2>
              <p className="text-gray-700">{location.description}</p>
              <a href={location.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Learn More →
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
