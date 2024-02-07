import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Place from './components/Place'
import data from './Data'
import PhotoGallery from './components/PhotoGallery'


export default function App() {
  const places = data.map((item) => {
    return <Place key={item.key} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <PhotoGallery id="photogallery"/>
      <section id="places" className="places-list">{places}</section>
      <Footer />
    </div>
  );
}
