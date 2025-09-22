import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Rocket, Star, Sparkles } from 'lucide-react';
import './Portal.css';

const Portal = () => {
  const [dots, setDots] = useState('');

  // Animated dots for "Stay Tuned"
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Floating icons animation variants
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { 
      scale: 0.8, 
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="portal-page">
      {/* Animated Background Elements */}
      <div className="portal-bg-elements">
        <motion.div 
          className="bg-circle bg-circle-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="bg-circle bg-circle-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="bg-circle bg-circle-3"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="portal-container"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Icons */}
        <div className="floating-icons">
          <motion.div 
            className="floating-icon floating-icon-1"
            variants={floatingVariants}
            animate="animate"
          >
            <Zap size={24} />
          </motion.div>
          <motion.div 
            className="floating-icon floating-icon-2"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
          >
            <Rocket size={20} />
          </motion.div>
          <motion.div 
            className="floating-icon floating-icon-3"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
          >
            <Star size={18} />
          </motion.div>
          <motion.div 
            className="floating-icon floating-icon-4"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '0.5s' }}
          >
            <Sparkles size={22} />
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div className="portal-content" variants={fadeInUp}>
          {/* Logo/Icon */}
          <motion.div 
            className="portal-icon-container"
            variants={scaleIn}
          >
            <motion.div 
              className="portal-icon"
              variants={pulseVariants}
              animate="animate"
            >
              <Clock size={64} />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 className="portal-title" variants={fadeInUp}>
            Portal Coming Soon
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div className="portal-subtitle-container" variants={fadeInUp}>
            <h2 className="portal-subtitle">
              Stay Tuned{dots}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p className="portal-description" variants={fadeInUp}>
            We're building a comprehensive client communications portal to streamline 
            your funding journey. Stay connected with your dedicated team and track 
            your progress every step of the way.
          </motion.p>

          {/* Feature Preview Cards */}
          <motion.div className="portal-features" variants={fadeInUp}>
            <motion.div 
              className="feature-card"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">
                <Zap size={24} />
              </div>
              <h3>Direct Messaging</h3>
              <p>Instant communication with your funding specialists</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">
                <Rocket size={24} />
              </div>
              <h3>Document Sharing</h3>
              <p>Secure upload and review of application materials</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">
                <Star size={24} />
              </div>
              <h3>Progress Tracking</h3>
              <p>Real-time updates on your funding applications</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">
                <Sparkles size={24} />
              </div>
              <h3>Meeting Scheduler</h3>
              <p>Book consultations and strategy sessions</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portal;
