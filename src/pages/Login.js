import {useState, useEffect, useContext} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Navigate} from 'react-router-dom';

import UserContext from '../UserContext';

import Swal from 'sweetalert2';

export default function Login(){

    const {user, setUser} = useContext(UserContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isActive, setIsActive] = useState(false)

    function authenticate(e){
        e.preventDefault()

        fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
        
            console.log(data);

            
            if(typeof data.access !== "undefined") {
                
                localStorage.setItem('token', data.access);
                retrieveUserDetails(data.access);

                Swal.fire({
                    title: " Login Successful!",
                    icon: "success",
                    text: "Welcome to Zurich!"

                })
            } else {
                Swal.fire({
                    title: "Authentication! Failed!",
                    icon: "error",
                    text: "Please check your login details and try again!"

                })
            };
    });

        // Set the email of the authenticated user in the local storage
        // Syntax
        // localStorage.setItem('propertyName', value);
        // localStorage.setItem('email', email);
        // Sets the global user state to have properties obtain from local storage
        // setUser({email: localStorage.getItem('email')});

        // Clear input fields after submission
        setEmail('')
        setPassword('')
        // navigate('/')

        // alert("Successfully login!")

        
};
    const retrieveUserDetails = (token) => {
            // The token will be sent as part of the request's header information
            // We put "Bearer" in front of the token to follow implementation standards for JWTs
            fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // Global user state for validation accross the whole app
                // Changes the global "user" state to store the "id" and the "isAdmin" property of the user which will be used for validation across the whole application
                setUser({
                    id: data._id,
                    isAdmin: data.isAdmin
                })
            })
        };

    useEffect(() => {
        if((email !== '' && password !== '')){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [email, password])

    return( 
        (user.isAdmin === true) ?
        <Navigate to="/Dashboard"/>
       :
        (user.id !== null) ?
        <Navigate to="/" />
        :
        <Form onSubmit={e => authenticate(e)}>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </Form.Group>

            {   isActive ?
                <Button variant="primary" type="submit" id="submitBtn">
                    Submit
                </Button>
                :
                <Button variant="primary" type="submit" id="submitBtn" disabled>
                    Submit
                </Button>
            }
        </Form>
    )
};

