import { Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect, useContext } from 'react';
import UserContext from '../UserContext';

export default function Inventory(props) {
  const { product } = props;
  const [isActive, setIsActive] = useState(product.isActive);
  const productId = product._id;
  const {user, setUser} = useContext(UserContext);



  async function archiveClick() {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/products/${productId}/archive`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(`token`)}`
        },
        body: JSON.stringify({
          isActive: false,
        }),
      }
    ).then(()=> {setIsActive(false)})
    let results = await response.json();
    console.log(results);
  }

  async function restoreClick() {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/products/${productId}/restore`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(`token`)}`
        },
        body: JSON.stringify({
          isActive: true,
        }),
      }
    ).then(()=> {setIsActive(true)})
    let results = await response.json();
    console.log(results);
  }




  return (
    <tr>
      <td>{product._id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.createdOn}</td>
      <td>
        <Button className="bg-primary" as={Link} to={`/products/${product._id}/update`}>
          Update
        </Button>
        {isActive ? (
          <Button className="bg-danger" productId={product._id} onClick={archiveClick}>
            Archive
          </Button>
        ) : (
          <Button className="bg-primary" productId={product._id} onClick={restoreClick}>
            Restore
          </Button>
        )}
      </td>
    </tr>
  );
}
