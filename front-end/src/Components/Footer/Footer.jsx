import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import facebook_icon from "../Assets/facebook_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer Logo" />
        <p> GUDIYA</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={facebook_icon} alt="Facebook Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="Whatsapp Icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2023 GUDIYA. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
