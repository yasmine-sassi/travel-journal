import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Place from './components/Place'
import data from './Data'
import PhotoGallery from './components/PhotoGallery'
import Map from './components/Map'
import './components/Map.css'


export default function App() {
  const places = data.map((item) => {
    return <Place key={item.key} {...item} />;
  });

  return (
    <div >
      <Navbar />
      <section id="photogallery">
        <PhotoGallery />
      </section>
      <section id="places" className="places-list">{places}</section>
      <section className='map-section container' id='map'>
        <h3 className='map-title'>In case you wanted a clearer view !</h3>
        <Map />
      </section>
      <Footer />
    </div>
  );
}
