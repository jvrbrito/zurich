import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Details.css';
import BannerImage from '../assets/whitebg.jpg';
import { CollectionList } from '../helpers/CollectionList';
import {Container, Row, Col} from 'react-bootstrap';

export default function Details() {
  const { id } = useParams();
  const selectedItem = CollectionList.find(item => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { name, details, price, image } = selectedItem;

  return (
    <div className='details' style={{ backgroundImage: `url(${BannerImage})` }}>
		<div className='leftside'>
      <h1>{name}</h1>
      <p>{details}</p>
      <p>{price}</p>
	  </div>
      <div className="container">
        <div className="full-view"></div>
        <div className="preview-list">
          <ul>
            {Array.isArray(image) ? (
              image.map((img, index) => (
                <li key={index}>
                  <input type="radio" id={`tab-${index + 1}`} name="gallery-group" />
                  <label htmlFor={`tab-${index + 1}`}>
                    <div className="tab">
                      <img src={img} alt="Preview" />
                    </div>
                  </label>
                  <div className="content">
                    <img src={img} alt="Full View" />
                  </div>
                </li>
              ))
            ) : (
              <li>
                <input type="radio" id="tab-1" name="gallery-group" />
                <label htmlFor="tab-1">
                  <div className="tab">
                    <img src={image} alt="Preview" />
                  </div>
                </label>
                <div className="content">
                  <img src={image} alt="Full View" />
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
