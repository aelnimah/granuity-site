import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Copy, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  
  const handleHomeClick = () => {
    // Always scroll to top when clicking home/logo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    setShowEmailModal(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@grantuity.org');
    alert('Email copied to clipboard!');
    setShowEmailModal(false);
  };

  const openGmail = () => {
    const email = 'contact@grantuity.org';
    const subject = 'Inquiry from Grantuity Website';
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`, '_blank');
    setShowEmailModal(false);
  };

  const openOutlook = () => {
    const email = 'contact@grantuity.org';
    const subject = 'Inquiry from Grantuity Website';
    window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}`, '_blank');
    setShowEmailModal(false);
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
                    <MapPin size={18} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Address</div>
                    <a 
                      href="https://www.google.com/maps/place/100+King+St+W+%235600,+Toronto,+ON+M5X+1C9/@43.648835,-79.381774,15z/data=!4m6!3m5!1s0x882b34d29f5481fb:0x23f1edc5b66bd99!8m2!3d43.6488349!4d-79.3817742!16s%2Fg%2F11pvcvf2vp?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      First Canadian Place<br />
                      100 King Street West Suite 5600<br />
                      Toronto, ON, M5X 1C9
                    </a>
                    <div className="appointment-note">(by appointment only)</div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={18} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Email</div>
                    <a 
                      href="mailto:contact@grantuity.org?subject=Inquiry from Grantuity Website" 
                      className="contact-link"
                      onClick={handleEmailClick}
                    >
                      contact@grantuity.org
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={18} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Phone</div>
                    <a href="tel:+18666440469" className="contact-link">
                      1 (866) 644-0469
                    </a>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">LinkedIn</div>
                    <a 
                      href="https://www.linkedin.com/company/grantuity/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      Follow us on LinkedIn
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
            <div className="footer-legal-links">
              <Link to="/terms" className="footer-legal-link" onClick={handleNavClick}>Terms of Service</Link>
              <span className="footer-legal-separator">|</span>
              <Link to="/privacy" className="footer-legal-link" onClick={handleNavClick}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Email Options Modal */}
      {showEmailModal && (
        <div className="email-modal-overlay" onClick={() => setShowEmailModal(false)}>
          <div className="email-modal" onClick={(e) => e.stopPropagation()}>
            <div className="email-modal-header">
              <h3>Choose how to contact us</h3>
              <button 
                className="email-modal-close" 
                onClick={() => setShowEmailModal(false)}
              >
                ×
              </button>
            </div>
            
            <div className="email-modal-content">
              <p className="email-modal-description">
                We'd love to hear from you! Choose your preferred way to send us an email:
              </p>
              
              <div className="email-options">
                <button className="email-option" onClick={copyEmail}>
                  <Copy size={20} />
                  <div>
                    <strong>Copy Email Address</strong>
                    <span>Copy contact@grantuity.org to your clipboard</span>
                  </div>
                </button>
                
                <button className="email-option" onClick={openGmail}>
                  <ExternalLink size={20} />
                  <div>
                    <strong>Open Gmail</strong>
                    <span>Compose email in Gmail web app</span>
                  </div>
                </button>
                
                <button className="email-option" onClick={openOutlook}>
                  <ExternalLink size={20} />
                  <div>
                    <strong>Open Outlook</strong>
                    <span>Compose email in Outlook web app</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
