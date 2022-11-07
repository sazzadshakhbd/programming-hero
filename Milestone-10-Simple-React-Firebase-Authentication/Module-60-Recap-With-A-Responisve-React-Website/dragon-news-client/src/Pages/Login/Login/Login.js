import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')
    const from = location.state?.from?.pathname || '/';
    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your Email is not verified, Please Verify your email address')
                }
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
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

export default Login;