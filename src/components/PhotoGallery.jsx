import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import CSS for default styles
import images from '../Images';

export default function PhotoGallery() {
    return (
      <div>
        <ImageGallery items={images} showBullets={true} />
      </div>
    );
}
  