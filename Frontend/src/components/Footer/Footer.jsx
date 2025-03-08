import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste soluta voluptate rem in, facere voluptatem ab molestiae. Consequatur quis quam repudiandae quaerat? Amet labore obcaecati veritatis laboriosam modi numquam? Rem.</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="facebook-icon" />
    <img src={assets.twitter_icon} alt="twiter-icon" />
    <img src={assets.linkedin_icon} alt="linkedin-icon" />
</div>
        </div>
        <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
</ul>
        </div>
        <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+7-602-846-1971</li>
    <li>contact@tomato.com</li>
</ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright-text">
        Copyright 2025 &copy;Tomato.com-All Rights Reserved
      </p>
    </div>
  )
}
