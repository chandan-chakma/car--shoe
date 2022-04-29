import React from 'react';
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/login')
    }


    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const passowrd = event.target.password.value;

    }
    return (
        <div className='register'>
            <h2 className='text-center m-5'>Please Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="text" name="name" id="" placeholder='your name' />

                <input type="email" name="email" id="" placeholder='your email' required />

                <input type="password" name="password" id="" placeholder='password' required />

                <input className='text-primary' type="submit" value="Signup" />

            </form>
            <p className='text-center'>Already have an account? <Link to='/login' onClick={handleNavigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Signup;