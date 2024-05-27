import React from 'react'; 
import { Form, Button, Card } from 'react-bootstrap';


const Signup = () => { 
    
    return (
        <div className='signup'>
            <div className='signup-container'>
                <h1> CREATE AN ACCOUNT </h1>
                <div className='signup-fields'>
                    <input type='first name' placeholder='First name' />
                    <input type='last name' placeholder='Last name' />
                    <input type='email' placeholder='Email address' />
                    <input type='password' placeholder='Password' />
                </div>
                <button> Create An Account </button>
            </div>
        </div>
    );
};

export default Signup; 
