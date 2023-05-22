import React from 'react';
import { CollectionList } from '../helpers/CollectionList';
import { Link } from 'react-router-dom';
import "../styles/Collection.css";
import CollectionItem from '../components/CollectionItem';
import BannerImage from '../assets/whitebg.jpg';

function Collection() {
  return (
    <div className='collection' style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1 className='collectionTitle'>Our Collection</h1>
      <div className='collectionList'>
        {CollectionList.map((collectionItem, index) => {
          return( 
            <CollectionItem 
              key={index}
              id={index}
              image={collectionItem.image} 
              name={collectionItem.name} 
              price={collectionItem.price}
              details={collectionItem.details}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Collection;
