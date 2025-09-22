import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CTABanner.css';

const CTABanner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section 
      className="cta-banner-section" 
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="cta-container">
        <div className="cta-content">
          <motion.div
            className="cta-text-container"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="cta-heading">
              Your funding journey starts here
            </h2>
            
            <p className="cta-subtext">
              Ready to take the next step? Let's discuss how we can help secure the funding your business needs to grow and succeed.
            </p>
          </motion.div>
          
          <motion.div
            className="cta-actions"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <motion.a 
              href="/contact" 
              className="cta-button"
              whileHover={{ 
                scale: 1.05,
                y: -3
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>Start Your Funding Journey</span>
              <svg className="button-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTABanner;
