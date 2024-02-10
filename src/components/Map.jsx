import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import data from '../Data.js';

const Map = () => {
  return (
    <section id="map" className='map-container container'>
      <MapContainer center={[34, 9]} zoom={7} style={{ height: '600px', width: '800px' }} className='map'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((location) => (
          <Marker key={location.id} position={location.position}>
            <Popup>
              <div style={{textAlign: "center"}}>
                <h2>{location.name}</h2>
                <h5>{location.location}</h5>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default Map;

