import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FileText, Target, Calendar, TrendingUp } from 'lucide-react';
import './CoreServicesTabs.css';

const CoreServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(null);
  const placeholderRef = useRef(null);
  const isInView = useInView(placeholderRef, { once: true, margin: "-100px" });

  const services = [
    {
      id: 'grant-writing',
      title: 'Grant Writing & Funding Acquisition',
      icon: FileText,
      description: 'We specialize in crafting compelling grant applications that maximize your funding opportunities. Our expert team researches, writes, and submits applications across federal, state, and local government programs, ensuring your project receives the attention it deserves.',
      image: '/media/services/gwfa.jpg'
    },
    {
      id: 'strategic-advisory',
      title: 'Strategic Advisory',
      icon: Target,
      description: 'Our strategic advisory services provide expert guidance to align your projects with funding priorities and government initiatives. We help you develop comprehensive strategies that position your organization for success in competitive funding environments.',
      image: '/media/services/sa.jpg'
    },
    {
      id: 'project-management',
      title: 'Project Management',
      icon: Calendar,
      description: 'From initial planning through final compliance reporting, we ensure seamless execution of your funded projects. Our project management expertise keeps your initiatives on track, on budget, and in full compliance with funding requirements.',
      image: '/media/services/pm.jpg'
    },
    {
      id: 'business-development',
      title: 'Business Development',
      icon: TrendingUp,
      description: 'We support your organization\'s growth through strategic funding strategies and partnership development. Our business development services help you identify opportunities, build relationships, and create sustainable pathways for expansion and innovation.',
      image: '/media/services/bd.jpg'
    }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveTab(index);
    }
  };

  return (
    <div className="core-services-tabs">
      {/* Tab Navigation */}
      <div className="tabs-navigation">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <button
              key={service.id}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-selected={activeTab === index}
              role="tab"
              tabIndex={activeTab === index ? 0 : -1}
            >
              <div className="tab-icon">
                <IconComponent size={20} />
              </div>
              <span className="tab-label">{service.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === null ? (
          <motion.div
            ref={placeholderRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="tab-placeholder"
          >
            <div className="placeholder-content">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="placeholder-image"
              >
                <img
                  src="/media/services/explore-placeholder.png"
                  alt="Explore Our Services"
                  className="explore-illustration"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                className="placeholder-text-content"
              >
                <h3 className="placeholder-heading">Explore Our Services</h3>
                <p className="placeholder-subtext">
                  Select a service above to learn more about how we can help your business grow.
                </p>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="tab-panel"
            >
              <div className="tab-panel-content">
                <div className="tab-text">
                  <h3 className="tab-title">{services[activeTab].title}</h3>
                  <p className="tab-description">{services[activeTab].description}</p>
                </div>
                <div className="tab-image">
                  <motion.img
                    src={services[activeTab].image}
                    alt={services[activeTab].title}
                    className="service-image"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-placeholder" style={{ display: 'none' }}>
                    <div className="placeholder-icon">
                      {React.createElement(services[activeTab].icon, { size: 48 })}
                    </div>
                    <span className="placeholder-text">Service Image</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default CoreServicesTabs;
