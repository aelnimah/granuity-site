import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on a page that should always have solid navbar
  const isAlwaysSolidPage = location.pathname.startsWith('/blog') || 
                           location.pathname === '/terms' || 
                           location.pathname === '/privacy';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Set initial scroll state on page load
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Re-run when route changes

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHomeClick = () => {
    // Always scroll to top when clicking home/logo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    // Always scroll to top when navigating to any page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <nav className={`navbar ${isScrolled || isAlwaysSolidPage ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo - Left Side */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={handleHomeClick}>
            <img 
              src={isScrolled || isAlwaysSolidPage ? "/logo3.png" : "/logo.png"} 
              alt="Grantuity Group" 
              className="logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Right Side */}
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleHomeClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={handleNavClick}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" onClick={handleNavClick}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleNavClick}>Contact Us</Link>
            </li>
          </ul>
          <Link to="/portal" className="portal-button" onClick={handleNavClick}>Portal</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-mobile-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={(e) => { handleHomeClick(); toggleMobileMenu(); }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={handleNavClick}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" onClick={handleNavClick}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleNavClick}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/portal" className="portal-button mobile" onClick={handleNavClick}>Portal</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
