import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const { registerUser, isLoading, error, loginWithGoogle } = useAuth()

    //Location & Navigate
    const location = useLocation()
    const navigate = useNavigate()

    //handle google login
    const handleGoogleLogin = () => {
        loginWithGoogle(location, navigate);
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        if (data.password !== data.password2) {
            alert('Your Password did not match')
            return;
        }

        registerUser(data.email, data.password, data.name, location, navigate)
    }
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center">
                            <h2 className='mb-5'>Sign Up to Edu Bro</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='w-75 mb-3'  {...register("name", { required: true })} placeholder='Enter Full Name' /> <br />
                                <input className='w-75 mb-3'  {...register("email", { required: true })} placeholder='Enter Email' /> <br />
                                <input className='w-75 mb-3' {...register("password", { required: true })} placeholder='Enter Password' /> <br />
                                <input className='w-75 mb-3' {...register("password2", { required: true })} placeholder='Re-enter Password' /> <br />

                                <button type='submit'>Sign Up</button>
                            </form>
                            <div className='login-meta mt-4'>
                                <p>Already have an account? <Link to={'/login'}><span className='login-links'>Login here</span></Link></p>
                                <span style={{ cursor: "pointer" }} className='fs-4'>Continue with <FcGoogle onClick={handleGoogleLogin} className='fs-2 google' /></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;