import React from 'react';
import { Link } from 'react-router-dom';

export default function CollectionItem({ id, image, name, price, details }) {
  return (
    <div className='collectionItem'>
      <Link to={`/item/${id}`}>
        <div className='image-container' style={{ backgroundImage: `url(${getImageURL(image)})` }}></div>
      </Link>
      <h1>{name}</h1>
      <p>{price}</p>
      
    </div>
  );
}

// Helper function to get the appropriate image URL
function getImageURL(image) {
  if (Array.isArray(image)) {
    // If the image is an array, return the first image URL
    return image[0];
  }
  // If it's a single image path, return it directly
  return image;
}
