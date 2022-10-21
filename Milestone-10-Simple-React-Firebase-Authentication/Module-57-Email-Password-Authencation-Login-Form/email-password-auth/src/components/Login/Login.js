import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [success, setSuccess] = useState(false)
    const [userEmail, setUserEmail] = useState('');
    const loginHandler = (event) => {
        event.preventDefault();
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
            })
            .catch(error => {
                console.error('error ', error)
            })
    }
    const handelEmail = (event) => {
        const email = event.target.value;
        setUserEmail(email)
        console.log(email)
    }
    const handelForgetPassword = () => {
        if (!userEmail) {
            alert('Please Enter Your Email Address');
            return
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password Reset Email Send. Please Check Your Email')
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    return (
        <div>
            <h2 className='text-success'>Please Login !!!</h2>
            <div className='mx-auto w-50'>
                <Form className='my-5' onSubmit={loginHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handelEmail} type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {success && <p className='text-success'>Successfully Login to the account</p>}
                <p><small>New to this website? Please <Link to="/login">Register</Link></small></p>
                <p><small>Forget Password? <button onClick={handelForgetPassword} className='btn btn-link'>Reset Password</button></small></p>
            </div>
        </div>
    );
};

export default Login;