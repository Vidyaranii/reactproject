
import { assets } from '../../assets/assets'
import './footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
            <img style={{height:'80px', width:'120px'}} src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit expedita ab sunt voluptatibus maiores consectetur saepe consequuntur voluptatum dignissimos voluptatem, ratione modi, excepturi facilis dolores quisquam. Illum dolores beatae qui?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
           <ul>
           <a href='#home-page'> <li>Home</li></a>
           <a href='#home-page'><li>About us</li></a>
           <a href='#home-page'><li>Delivery</li></a>
           <a href='#home-page'><li>Privacy Policy</li></a>
           </ul>

        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-223-343-4533</li>
                <li>contact@Quickbite.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 @ Quickbite.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer