import React from 'react'
import './HomeContent.css'

import hair_icon from '../assets/hair-product-icon.png'

const homeContent = () => {
  return (
    <div className='home'> 
        <div className='header'>
            <p> SHOP NOW > </p>
        </div>
        <div className='homepage-content'>
            <h2> BEST SELLERS </h2>
            <div className='best-sellers-products'>
                <img src={hair_icon} alt='' />
                <img src={hair_icon} alt='' />
                <img src={hair_icon} alt='' />
                <img src={hair_icon} alt='' />
                <img src={hair_icon} alt='' />
                <img src={hair_icon} alt='' />
            </div>
        </div>
    </div>
  )
}

export default homeContent