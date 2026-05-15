import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Arounda</h2>
            <p className="footer-desc">
              Your digital design and development partner for high-impact results
            </p>
            <div className="footer-awards">
              <p>89+ Reviews on Clutch</p>
              <p>Top Rated Plus Agency on Upwork</p>
              <p>Top 50 Trending team on Dribbble</p>
              <p>Projects are Featured on Behance platform</p>
            </div>
            <a href="mailto:info@arounda.agency" className="footer-email">
              info@arounda.agency
            </a>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Brand Identity</a></li>
                <li><a href="#">Logo Design</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Mobile App Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">MVP Development</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Solutions</h3>
              <ul>
                <li><a href="#">MVP Design</a></li>
                <li><a href="#">Product Redesign</a></li>
                <li><a href="#">Team Extension</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Industries</h3>
              <ul>
                <li><a href="#">Web 3, Blockchain</a></li>
                <li><a href="#">SaaS</a></li>
                <li><a href="#">Fintech</a></li>
                <li><a href="#">AI & ML</a></li>
                <li><a href="#">Healthcare</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-locations">
          <div className="location-item">
            <h4>US</h4>
            <p>21255 Burbank Boulevard, Los Angeles, CA 91367</p>
          </div>
          <div className="location-item">
            <h4>GB</h4>
            <p>125 Kingsway, London, England WC2B 6NH</p>
          </div>
          <div className="location-item">
            <h4>NL</h4>
            <p>38-40 Lincolnweg, Amsterdam, Noord Holland 1033 SN</p>
          </div>
          <div className="location-item">
            <h4>AU</h4>
            <p>1 Sussex Street, Barangaroo, Sydney, NSW 2000</p>
          </div>
          <div className="location-item">
            <h4>AE</h4>
            <p>Level 1, Yas Mall, Yas Island, Abu Dhabi</p>
          </div>
          <div className="location-item">
            <h4>RO</h4>
            <p>27 Park Herastrau, Bucharest</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Arounda. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Editorial Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
