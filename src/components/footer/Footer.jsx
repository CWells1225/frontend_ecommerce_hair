import React from 'react'; 
import { Link } from 'react-router-dom';
import './Footer.css'

import instagram_icon from '../assets/instagram_icon.png';
import email_icon from '../assets/email-icon.png';

const Footer= () => {
  return (
    <div className='footer'>
        <ul className='footer-links'>
            <li><h2> Quick Links </h2></li>
            <li><p><Link to='/shop'> Shop </Link></p></li>
            <li><p><Link to> Shipping & Returns </Link></p></li>
            <li><p><Link to='/contact'> Contact Us </Link></p></li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={email_icon} alt='' />
            </div>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt='' />
            </div>
        </div>
        <div className='footer-copyright'>
                <hr />
                <p>Copyright @ 2024, Hair Extensions </p>
        </div>

    </div>
  )
}

export default Footer
