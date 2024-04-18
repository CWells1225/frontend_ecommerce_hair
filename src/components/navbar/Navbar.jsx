import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import hair_logo from '../assets/hair_logo.jpeg';
import shopping_bag_icon from '../assets/shopping_bag_logo.jpeg';
import search_icon from '../assets/search_bar.png'; 
import login_icon from '../assets/profile_logo.jpeg';


const Navbar = () => {

    const [menu, setMenu] = useState('about');
  return (
    <div className='navbar'>

     <div className='nav-logo'>
     <Link to='/'><img src={hair_logo} alt='' /></Link>
     </div>

     <ul className='nav-menu'>
        <li onClick={()=> {setMenu('about')}}><Link to='/about'> About Us </Link>{menu==='about'?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu('shop')}}><Link to='/shop'> Shop </Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=> { setMenu('contact')}}> <Link to='/contact'> Contact Us </Link>{menu==='contact'?<hr/>:<></>}</li>
     </ul>

     <div className='nav-login-cart'>
            <div> 
            <Link to='/search'><img src={search_icon} alt='' /></Link>
            </div>
        
            <div> 
            <Link to='/login'> <img src={login_icon} alt='' /></Link>
            </div>
        
            <div> 
            <Link to='/cart'><img src={shopping_bag_icon} alt='' /></Link>
            </div>
     </div>

    </div>
  )
}

export default Navbar
