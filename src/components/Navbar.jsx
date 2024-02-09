import React from 'react';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='nav-title'>Places to visit in TUNISIA</h1>
      <ul className='navbar-nav'>
        <li className="nav-item">
          <a href="#photogallery" className="nav-link active" aria-current="page">PhotoGallery</a>
        </li>
        <li className="nav-item">
        <a href="#places" className="nav-link active" aria-current="page">Places</a>
        </li>
        <li className="nav-item">
          <a href='#map' className='nav-link active' aria-current='page'>Map</a>
        </li>
      </ul>
    </nav>
  );
}