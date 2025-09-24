import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import './Contact.css';
import { submitToNetlify, createSuccessMessage, createErrorMessage, replaceFormWithMessage } from '../utils/formSubmission';
import '../utils/formSubmission.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    country: '',
    stateProvince: '',
    industry: '',
    revenue: '',
    message: ''
  });

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isMapInView = useInView(mapRef, { once: true, margin: "-100px" });

  // Contact information data for mapping
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@grantuity.org',
      link: 'mailto:contact@grantuity.org'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '1 (866) 644-0469',
      link: 'tel:+18666440469'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Connect with us',
      link: 'https://www.linkedin.com/company/grantuity/'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'First Canadian Place\n100 King Street West Suite 5600\nToronto, ON, M5X 1C9',
      link: 'https://www.google.com/maps/place/100+King+St+W+%235600,+Toronto,+ON+M5X+1C9/@43.648835,-79.381774,15z/data=!4m6!3m5!1s0x882b34d29f5481fb:0x23f1edc5b66bd99!8m2!3d43.6488349!4d-79.3817742!16s%2Fg%2F11pvcvf2vp?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    submitToNetlify(e, 'page-contact', 
      () => replaceFormWithMessage(e.target, createSuccessMessage()),
      () => replaceFormWithMessage(e.target, createErrorMessage())
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const formFieldVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <motion.section 
        className="contact-hero"
        ref={heroRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="contact-hero-container">
          <motion.h1 
            className="contact-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Let's start building your success story
          </motion.h1>
          <motion.p 
            className="contact-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Contact us today to find out how we can help your business grow and secure the capital you need.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        className="contact-main"
        ref={formRef}
        initial={{ opacity: 0 }}
        animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="contact-container">
          <div className="contact-layout">
            
            {/* Left Column - Contact Info */}
            <motion.div 
              className="contact-info-column"
              variants={containerVariants}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
            >
              <h2 className="contact-info-title">Get in Touch</h2>
              <div className="contact-info-cards">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="contact-info-card"
                      variants={cardVariants}
                      whileHover={{ 
                        y: -5,
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className="contact-info-icon">
                        <IconComponent size={24} />
                      </div>
                      <div className="contact-info-content">
                        <h3 className="contact-info-label">{info.title}</h3>
                        <p className="contact-info-value">{info.content}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div 
              className="contact-form-column"
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {/* Netlify Forms Configuration - Submissions sent to elnimaha@gmail.com */}
              <form 
                name="page-contact" 
                method="POST" 
                data-netlify="true" 
                className="contact-form" 
                onSubmit={handleSubmit}
              >
                {/* Hidden inputs for Netlify form detection and spam protection */}
                <input type="hidden" name="form-name" value="page-contact" />
                <input type="hidden" name="bot-field" />
                    
                    <h2 className="contact-form-title">Send us a message</h2>
                  
                  <motion.div 
                    className="form-row"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isFormInView ? "visible" : "hidden"}
                  >
                    <motion.div className="form-group" variants={formFieldVariants}>
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>
                    <motion.div className="form-group" variants={formFieldVariants}>
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="form-row"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isFormInView ? "visible" : "hidden"}
                  >
                    <motion.div className="form-group" variants={formFieldVariants}>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>
                    <motion.div className="form-group" variants={formFieldVariants}>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="form-row"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isFormInView ? "visible" : "hidden"}
                  >
                    <motion.div className="form-group" variants={formFieldVariants}>
                      <label htmlFor="companyName">Company Name</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                    <motion.div className="form-group" variants={formFieldVariants}>
                      <label htmlFor="website">Website/Socials</label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="form-row"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isFormInView ? "visible" : "hidden"}
                  >
                    <motion.div className="form-group" variants={formFieldVariants}>
                      <label htmlFor="country">Country</label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Country</option>
                        <option value="Canada">Canada</option>
                        <option value="United States">United States</option>
                        <option value="Other">Other</option>
                      </select>
                    </motion.div>
                    <motion.div className="form-group" variants={formFieldVariants}>
                      <label htmlFor="stateProvince">State/Province</label>
                      <input
                        type="text"
                        id="stateProvince"
                        name="stateProvince"
                        value={formData.stateProvince}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="form-row"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isFormInView ? "visible" : "hidden"}
                  >
                    <motion.div className="form-group" variants={formFieldVariants}>
                      <label htmlFor="industry">Industry</label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Industry</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Technology">Technology</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Construction">Construction</option>
                        <option value="Clean Energy">Clean Energy</option>
                        <option value="Defense">Defense</option>
                        <option value="Other">Other</option>
                      </select>
                    </motion.div>
                    <motion.div className="form-group" variants={formFieldVariants}>
                      <label htmlFor="revenue">Company Annual Revenue</label>
                      <select
                        id="revenue"
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Revenue Range</option>
                        <option value="Under $1M">Under $1M</option>
                        <option value="$1M - $5M">$1M - $5M</option>
                        <option value="$5M - $25M">$5M - $25M</option>
                        <option value="$25M - $100M">$25M - $100M</option>
                        <option value="Over $100M">Over $100M</option>
                      </select>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="form-group form-group-full"
                    variants={formFieldVariants}
                    initial="hidden"
                    animate={isFormInView ? "visible" : "hidden"}
                  >
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      placeholder="Tell us about your project and funding needs..."
                    ></textarea>
                  </motion.div>

                  <motion.button 
                    type="submit" 
                    className="contact-submit-button"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  >
                    Send Message
                  </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="contact-map-section"
        ref={mapRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="contact-container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.260439428824!2d-79.38177738450266!3d43.64883489791216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d29f5481fb%3A0x23f1edc5b66bd99!2s100%20King%20St%20W%20%235600%2C%20Toronto%2C%20ON%20M5X%201C9%2C%20Canada!5e0!3m2!1sen!2sca!4v1732226400000!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Grantuity Group Office Location - First Canadian Place, 100 King Street West Suite 5600, Toronto, ON, M5X 1C9"
            ></iframe>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
