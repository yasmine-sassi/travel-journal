import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import Data from '../Data.js';

const Map = () => {
  return (
    <MapContainer center={[34, 9]} zoom={7} style={{ height: '600px', width: '800px' }} className='map-container'>
      <TileLayer className='map-info'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Data.map((location) => (
        <Marker key={location.key} position={location.position} className='marker'>
          <Popup>
            <div>
              <h5>{location.title}</h5>
              <p>Location: {location.location}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
