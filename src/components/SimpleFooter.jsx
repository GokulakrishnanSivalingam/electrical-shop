import React from 'react';
import './SimpleFooter.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SimpleFooter = () => {
  return (
    <footer className="simple-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2>Siva Electricals</h2>
          <p>
            Trusted electrical & plumbing shop delivering quality products and services since 2000.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 Thiruvennai Nallur</p>
          <p>📞 +91 9843644675</p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 Siva Electricals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SimpleFooter;