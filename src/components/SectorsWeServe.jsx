import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, HeartPulse, Building2, Zap, Shield, Mountain, Cpu, Users2 } from 'lucide-react';
import './SectorsWeServe.css';

const SECTORS = [
  {
    id: 'mfg',
    title: 'Manufacturing & Supply Chain Resilience',
    blurb:
      'We help manufacturers secure funding for facility expansions, equipment upgrades, and advanced production technologies. Our expertise spans reshoring initiatives, automation, and critical supply chain resilience programs that strengthen competitiveness in global markets.',
    img: '/media/sectors/manufacturing.jpg',
    icon: 'Factory',
  },
  {
    id: 'health',
    title: 'Healthcare & Biotechnology',
    blurb:
      'We support hospitals, medical centers, biotech firms, and pharmaceutical companies in accessing funding for research, drug development, and clinical infrastructure. From life sciences innovation to healthcare facility build-outs, we navigate complex programs to accelerate impact.',
    img: '/media/sectors/healthcare.jpg',
    icon: 'HeartPulse',
  },
  {
    id: 'construction',
    title: 'Construction',
    blurb:
      'From residential housing and commercial facilities to large-scale industrial infrastructure, we guide clients through funding and compliance for major construction projects. Examples include affordable housing, manufacturing plants, and energy-related construction initiatives.',
    img: '/media/sectors/construction.jpg',
    icon: 'Building2',
  },
  {
    id: 'clean',
    title: 'Clean Energy & Climate Transition',
    blurb:
      'We help energy innovators and project developers access grants for renewable power, energy efficiency, carbon capture, and electrification projects. Our team manages applications and compliance for high-value programs driving the global shift toward net zero.',
    img: '/media/sectors/clean-energy.jpg',
    icon: 'Zap',
  },
  {
    id: 'defense',
    title: 'Defense & Aerospace',
    blurb:
      'We support defense contractors, aerospace firms, and dual-use technology innovators in securing funding for R&D, production, and compliance. Our expertise covers advanced manufacturing, cybersecurity, space technology, and next-generation defense initiatives.',
    img: '/media/sectors/defense.jpg',
    icon: 'Shield',
  },
  {
    id: 'minerals',
    title: 'Critical Minerals & Resource Security',
    blurb:
      'We assist companies in mining, refining, processing, and recycling critical minerals essential for defense, clean energy, and advanced manufacturing. From exploration to ESG compliance, we ensure clients are aligned with government funding priorities for resource security.',
    img: '/media/sectors/critical-minerals.jpg',
    icon: 'Mountain',
  },
  {
    id: 'digital',
    title: 'Digital Infrastructure & Emerging Tech',
    blurb:
      'We partner with technology companies building the next generation of digital infrastructure and emerging technology. From broadband expansion and secure cloud systems to AI, quantum, advanced cybersecurity, and next-generation technology, we unlock funding to scale innovation and meet compliance demands.',
    img: '/media/sectors/digital-infra.jpg',
    icon: 'Cpu',
  },
  {
    id: 'workforce',
    title: 'General Workforce & Site Expansion',
    blurb:
      'We help businesses secure funding to expand or train their workforce, expand offices or operational sites, and strengthen regional growth. From skills development programs to facility upgrades, we align client needs with government incentives to cover capital costs and job creation.',
    img: '/media/sectors/workforce.jpg',
    icon: 'Users2',
  },
];

const ICON_MAP = {
  Factory,
  HeartPulse,
  Building2,
  Zap,
  Shield,
  Mountain,
  Cpu,
  Users2,
};

const SectorsWeServe = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slideshow functionality
  useEffect(() => {
    if (isPaused || isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % SECTORS.length);
    }, 4500); // 4.5 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused, isHovered]);

  const handleSectorClick = (index) => {
    setActiveIndex(index);
    if (isMobile) {
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 8000);
    }
  };

  const handleSectorHover = (index) => {
    if (!isMobile) {
      setIsHovered(true);
      setActiveIndex(index);
    }
  };

  const handleSectorLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const activeSector = SECTORS[activeIndex];

  return (
    <section className="sectorsSection" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className="header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="title">
            Sectors We Serve
          </h2>
          <p className="subtitle">
            We provide specialized funding support across diverse industries and sectors
          </p>
        </motion.div>

        {/* Icons Container */}
        <div className="iconsContainer">
          {/* Animated Line */}
          <div className="lineContainer">
            <svg 
              className="animatedLine" 
              viewBox="0 0 1000 4" 
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.line
                x1="0"
                y1="2"
                x2="1000"
                y2="2"
                stroke="#2C5777"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>
          </div>
          
          {/* Desktop Icons Grid */}
          <div className="desktopGrid">
            {SECTORS.map((sector, index) => {
              const IconComponent = ICON_MAP[sector.icon];
              const isActive = activeIndex === index;
              
              return (
                <motion.div 
                  key={sector.id} 
                  className="iconColumn"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.5 + (index * 0.1)
                  }}
                >
                  <button
                    id={`sector-${sector.id}`}
                    className={`iconButton ${isActive ? 'active' : ''}`}
                    onClick={() => handleSectorClick(index)}
                    onMouseEnter={() => handleSectorHover(index)}
                    onMouseLeave={handleSectorLeave}
                    aria-selected={isActive}
                    aria-describedby={`sector-info-${sector.id}`}
                  >
                    <IconComponent size={24} />
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="mobileScroll">
            <div className="mobileScrollContent">
              {SECTORS.map((sector, index) => {
                const IconComponent = ICON_MAP[sector.icon];
                const isActive = activeIndex === index;
                
                return (
                  <motion.div 
                    key={sector.id} 
                    className="mobileIconColumn"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.5 + (index * 0.1)
                    }}
                  >
                    <button
                      id={`sector-${sector.id}`}
                      className={`mobileIconButton ${isActive ? 'active' : ''}`}
                      onClick={() => handleSectorClick(index)}
                      aria-selected={isActive}
                      aria-describedby={`sector-info-${sector.id}`}
                    >
                      <IconComponent size={20} />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="infoCardContainer">
          <motion.div 
            key={activeSector.id}
            id={`sector-info-${activeSector.id}`}
            className="infoCard"
            role="region"
            aria-live="polite"
            aria-label={`Information about ${activeSector.title}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Arrow pointer */}
            <div className="arrow" />
            
            {/* Image */}
            <div className="imageContainer">
              <img
                src={activeSector.img}
                alt={activeSector.title}
                className="image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="placeholderImage" style={{ display: 'none' }}>
                <div className="placeholderIcon">
                  <Factory size={48} />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="content">
              <h3 className="contentTitle">
                {activeSector.title}
              </h3>
              <p className="contentText">
                {activeSector.blurb}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectorsWeServe;