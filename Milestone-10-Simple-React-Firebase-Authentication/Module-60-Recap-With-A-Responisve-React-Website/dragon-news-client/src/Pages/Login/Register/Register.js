import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message)
            })
    }
    return (
        <div>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <div className='mt-3'>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </div>
            </Form>
        </div>
    );
};

export default Register;