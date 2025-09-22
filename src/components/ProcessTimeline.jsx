import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, FileText, Send, CheckCircle, TrendingUp } from 'lucide-react';
import './ProcessTimeline.css';

const STAGES = [
  {
    id: 'discovery',
    title: 'Funding Discovery',
    description: 'We identify and analyze the best funding opportunities aligned with your business goals and project requirements.',
    icon: Search,
  },
  {
    id: 'development',
    title: 'Proposal Development',
    description: 'Our experts craft compelling, compliant proposals that maximize your chances of securing funding approval.',
    icon: FileText,
  },
  {
    id: 'submission',
    title: 'Submission',
    description: 'We handle all submission requirements, deadlines, and follow-ups to ensure your application is processed smoothly.',
    icon: Send,
  },
  {
    id: 'approval',
    title: 'Approval',
    description: 'We guide you through the approval process, addressing any questions and ensuring all conditions are met.',
    icon: CheckCircle,
  },
  {
    id: 'growth',
    title: 'Growth',
    description: 'With funding secured, we support your project implementation and help identify additional growth opportunities.',
    icon: TrendingUp,
  },
];

const ProcessTimeline = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="process-container">
        {/* Header */}
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="process-title">Our Process Timeline</h2>
          <p className="process-subtitle">
            From initial discovery to successful growth, we guide you through every step of the funding journey.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="desktop-process">
          {/* Simple horizontal line */}
          <div className="process-line-container">
            <motion.div
              className="process-line"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          {/* Process steps */}
          <div className="process-steps">
            {STAGES.map((stage, index) => {
              const IconComponent = stage.icon;
              
              return (
                <div key={stage.id} className="process-step">
                  {/* Icon Circle */}
                  <motion.div 
                    className="step-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: "easeOut", 
                      delay: 0.8 + (index * 0.1) 
                    }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <IconComponent size={24} />
                  </motion.div>
                  
                  {/* Content Card */}
                  <motion.div 
                    className="step-card"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: "easeOut", 
                      delay: 1.0 + (index * 0.15) 
                    }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h3 className="step-title">{stage.title}</h3>
                    <p className="step-description">{stage.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="mobile-process">
          {STAGES.map((stage, index) => {
            const IconComponent = stage.icon;
            
            return (
              <motion.div
                key={stage.id}
                className="mobile-step"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut", 
                  delay: 0.3 + (index * 0.15) 
                }}
              >
                <div className="mobile-icon">
                  <IconComponent size={20} />
                </div>
                <div className="mobile-content">
                  <h3 className="mobile-title">{stage.title}</h3>
                  <p className="mobile-description">{stage.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;