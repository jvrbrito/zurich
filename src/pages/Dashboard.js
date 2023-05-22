import { useState, useEffect, useContext } from 'react';
import UserContext from '../UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {Form, Table, Button, Tabs, Tab } from 'react-bootstrap';
import Inventory from '../components/Inventory';


export default function Dashboard() {
  

  
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const [brandName, setBrandName] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    if (brandName !== '' && details !== '' && price !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [brandName, details, price]);

  function addProduct(e) {
    e.preventDefault();
    if (user.isAdmin)

    fetch(`${process.env.REACT_APP_API_URL}/products/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: brandName,
        description: details,
        price: price,
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
            title: 'Successfully added new item!',
            icon: 'success',
            text: '',
          });
        }
      });
  }

      const retrieveUserDetails = (token) => {

            fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
                headers: {
                Authorization: `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               
                setUser({
                    id: data._id,
                    isAdmin: data.isAdmin
                })
            })
        };



function ProductList() {
  

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
  }, [])
} 


  return (
  	(user.isAdmin === false)?
        <Navigate to ="/login" />
        :
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
 

      <Tab eventKey="products" title="Add Products">
        <>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Upload Photo</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
        </>
        <Form onSubmit={(e) => addProduct(e)} >

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
                setPrice(e.target.value)}}
                />
          </Form.Group>
      
          { isActive ?
                    <Button variant="primary" type="submit" id="submitBtn">
                     Upload
                    </Button>
                    :
                    <Button variant="secondary" type="submit" id="submitBtn" disabled>
                      Upload
                    </Button>
          }
    </Form>
      </Tab>

<Tab eventKey="allProducts" title="All Products">
      <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Date Posted</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Inventory key={product._id} product={product} />
        ))}

      </tbody>
    
    </Table>
          <ProductList /> 
    </Tab>

    </Tabs>
  )
}


