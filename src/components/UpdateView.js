import { useState, useEffect, useContext } from 'react';
import UserContext from '../UserContext';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Form, Button } from 'react-bootstrap';


export default function UpdateView(props) {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [brandName, setBrandName] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [products, setProducts] = useState([]);

  const { productId } = useParams();

  useEffect(() => {
    if (brandName !== '' && details !== '' && price !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [brandName, details, price]);

  function updateProduct(e) {
    e.preventDefault();
    if (user.isAdmin) 
      fetch(`${process.env.REACT_APP_API_URL}/products/${productId}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: brandName,
          description: details,
          price: price,
          user:user
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data === true) {
            setBrandName('');
            setDetails('');
            setPrice('');

            Swal.fire({
              title: 'Successfully updated item!',
              icon: 'success',
              text: '',
            })
            navigate(`/dashboard`);
          }
        });
    }
  

  return (
    <>
      {user.isAdmin === false ? (
        <Navigate to="/login" />
      ) : (
        <Form onSubmit={updateProduct}>
          <Form.Group className="mb-3" controlId="BrandName">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control
              type="text"
              value={brandName}
              onChange={(e) => {
                setBrandName(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="details">
            <Form.Label>Details</Form.Label>
            <Form.Control
              type="text"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Form.Group>

          {isActive ? (
            <Button variant="primary" type="submit" id="submitBtn">
              Upload
            </Button>
          ) : (
            <Button variant="secondary" type="submit" id="submitBtn" disabled>
              Upload
            </Button>
          )}
        </Form>
      )}
    </>
  );
}
