import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const RegisterReact = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);
    const handelOnSubmit = (event) => {
        event.preventDefault();

        setSuccess(false)
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two uppercase');
            return;
        }
        if (!/.{8}/.test(password)) {
            setPasswordError('Please add at least one special character');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please add at least one special character')
            return;
        }
        setPasswordError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSuccess(true)
                form.reset();
                console.log(user);
            })
            .catch(error => {
                console.log('error', error);
                setPasswordError(error.message)
            })
        // console.log(email, password);
    }
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
                {success && <p className='text-success'>Sussessfully Done!!!</p>}
                <p className='text-danger'>{passwordError}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RegisterReact;