import React, {useState} from 'react';
import './Navbar.css';

// import logo from 
import shopping_bag_icon from '../assets/shopping_bag_logo.jpeg';
import search_icon from '../assets/search_bar.png'; 
import login_icon from '../assets/profile_logo.jpeg';


const Navbar = () => {

    const [menu, setMenu] = useState('about');
  return (
    <div className='navbar'>

     <div className='nav-logo'>
        {/* <img src={logo} alt='' /> */}
        <p> Hair Extensions </p>
     </div>

     <ul className='nav-menu'>
        <li onClick={()=> {setMenu('about')}}> About Us{menu==='about'?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu('shop')}}> Shop {menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=> { setMenu('contact')}}> Contact Us {menu==='contact'?<hr/>:<></>}</li>
     </ul>

     <div className='nav-login-cart'>
        <ul>
            <li> 
            <img src={search_icon} alt='' />
            </li>
        
            <li> 
            <img src={login_icon} alt='' />
            </li>
        
            <li> 
            <img src={shopping_bag_icon} alt='' />
            </li>
        </ul>
     </div>

    </div>
  )
}

export default Navbar
