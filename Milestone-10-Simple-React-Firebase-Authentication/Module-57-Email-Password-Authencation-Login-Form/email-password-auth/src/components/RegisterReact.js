import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const handelOnSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log('error', error);
        })
    console.log(email, password);
}

const RegisterReact = () => {
    return (
        <div className='mx-auto w-50'>
            <Form className='my-5' onSubmit={handelOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RegisterReact;