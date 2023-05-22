import React from 'react';
import { CollectionList } from '../helpers/CollectionList';

function ItemDetails(props) {
  const id = props.match.params.id;
  const selectedItem = CollectionList[id];

  return (
    <div> 
      <h1>{selectedItem.name}</h1>
      <img src={selectedItem.image} alt={selectedItem.name} />
      <p>{selectedItem.price}</p>
      <p>{selectedItem.details}</p>
    </div>
  );
}

export default ItemDetails;
