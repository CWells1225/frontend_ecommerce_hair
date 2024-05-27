import React from 'react';

const Login = () => {
    return 
    <div className='login'>  
        <div className='login-container'>
            <h1> Login </h1>
            <div className='login-fields'>
                <input type='email' placeholder='Email Address' />
                <input type='password' placeholder='password' />
            </div>
            <p className='login'> Forgot your password? </p>
            <button className='sign-in'> Sign In </button>
            <p className='sign-in-link'> Create account </p>
        </div>
    </div>
} ;

export default Login