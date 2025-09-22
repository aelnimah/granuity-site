import React, { useEffect } from 'react';
import CoreServicesTabs from '../components/CoreServicesTabs';
import SectorsWeServe from '../components/SectorsWeServe';
import ProcessTimeline from '../components/ProcessTimeline';
import CTABanner from '../components/CTABanner';
import './Services.css';

const Services = () => {
  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="services-page">
      {/* Hero/Intro Section */}
      <section className="services-hero">
        {/* Background Image */}
        <div className="services-hero-background"></div>
        
        {/* Overlay for readability */}
        <div className="services-hero-overlay"></div>
        
        <div className="services-hero-container">
          <div className="services-hero-content">
            <div className="services-hero-text">
              <h1 className="services-hero-headline">
                Our Services
              </h1>
              <p className="services-hero-subheadline">
                At Grantuity, we provide end-to-end support — from grant writing and strategic advisory to project management and business development — helping organizations access the funding they need to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="core-services-section" id="core-services">
        <div className="core-services-container">
          <div className="core-services-header">
            <h2 className="core-services-title">Our Core Services</h2>
          </div>
          
          <CoreServicesTabs />
        </div>
      </section>

      {/* Sectors We Serve Section */}
      <SectorsWeServe />

      {/* Process Timeline Section */}
      <ProcessTimeline />

      {/* CTA Banner Section */}
      <CTABanner />
    </div>
  );
};

export default Services;
