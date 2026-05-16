import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img src="/logo.png" alt="HMNS Logo" className="footer-logo-img" />
              <h2 className="footer-logo">HMNS Software Solution Pvt Ltd</h2>
            </div>
            <p className="footer-desc">
              Your digital transformation partner providing cutting-edge technology and innovative solutions to take your business to new heights.
            </p>
            <div className="footer-contact-info">
              <p>Email: info@hmnssoftware.in</p>
              <p>Phone: +91 1234567890</p>
            </div>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-column">
              <h3>Other Pages</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/works">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Our Services</h3>
              <ul>
                <li><a href="#">Java Development</a></li>
                <li><a href="#">DevOps Automation</a></li>
                <li><a href="#">SAP Solutions</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Mobile App Development</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Newsletter</h3>
              <p className="newsletter-text">Subscribe to our newsletter for latest updates.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Email Address" />
                <button className="btn-subscribe">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HMNS Software Solution Pvt Ltd. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

