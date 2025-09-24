import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const handleHomeClick = () => {
    // Always scroll to top when clicking home/logo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    // Always scroll to top when navigating to any page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Left Column: Logo + Tagline */}
          <div className="footer-column footer-brand">
            <Link to="/" className="footer-logo" onClick={handleHomeClick}>
              <img src="/logo.png" alt="Grantuity Group" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline">
              Ingenuity, Powered by Grantuity
            </p>
          </div>
          
          {/* Right Column: Links + Contact Side by Side */}
          <div className="footer-column footer-right">
            
            {/* Quick Links */}
            <div className="footer-links-section">
              <h4 className="footer-subtitle">Quick Links</h4>
              <nav className="footer-nav">
                <Link to="/" className="footer-link" onClick={handleHomeClick}>Home</Link>
                <Link to="/services" className="footer-link" onClick={handleNavClick}>Services</Link>
                <Link to="/blog" className="footer-link" onClick={handleNavClick}>Blog</Link>
                <Link to="/contact" className="footer-link" onClick={handleNavClick}>Contact Us</Link>
                <Link to="/portal" className="footer-link" onClick={handleNavClick}>Portal</Link>
              </nav>
            </div>
            
            {/* Contact Information */}
            <div className="footer-contact-section">
              <h4 className="footer-subtitle">Contact Information</h4>
              <div className="contact-info">
                
                {/* Address */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={16} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Address</div>
                    <div className="contact-text">
                      First Canadian Place<br />
                      100 King Street West Suite 5600<br />
                      Toronto, ON, M5X 1C9
                    </div>
                    <div className="appointment-note">(by appointment only)</div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={16} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Email</div>
                    <a href="mailto:contact@grantuity.org" className="contact-link">
                      contact@grantuity.org
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={16} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Phone</div>
                    <a href="tel:+18666440469" className="contact-link">
                      1 (866) 644-0469
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom - Unified Block */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="footer-disclaimer">
              We are an independent consulting firm that provides advisory services to businesses and are not affiliated, partnered, or endorsed in any way by any government entities or agencies.
            </p>
            <p className="footer-copyright">
              © 2025 Grantuity Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
