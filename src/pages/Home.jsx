import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const logos = [
  { src: '/logos/doe.png', alt: 'U.S. Department of Energy', href: 'https://www.energy.gov/' },
  { src: '/logos/usda.png', alt: 'USDA', href: 'https://www.usda.gov/' },
  { src: '/logos/eda.png', alt: 'Economic Development Administration', href: 'https://www.eda.gov/' },
  { src: '/logos/ised.png', alt: 'Innovation, Science and Economic Development Canada', href: 'https://ised-isde.canada.ca/' },
  { src: '/logos/nrc.png', alt: 'National Research Council', href: 'https://nrc.canada.ca/' },
  { src: '/logos/feddev.png', alt: 'FedDev Ontario', href: 'https://feddev-ontario.canada.ca/' },
  { src: '/logos/nyedc.png', alt: 'New York EDC', href: 'https://www.nycedc.com/' },
  { src: '/logos/ildceo.png', alt: 'Illinois DCEO', href: 'https://dceo.illinois.gov/' },
  { src: '/logos/ncdc.png', alt: 'North Carolina Department of Commerce', href: 'https://www.commerce.nc.gov/' },
  { src: '/logos/omed.png', alt: 'Ontario Ministry of Economic Development', href: 'https://www.ontario.ca/page/ministry-economic-development-job-creation-trade' },
];

const successStories = [
  {
    id: 1,
    company: 'Dana Incorporated',
    logo: '/logos/dana.png',
    website: 'https://www.dana.com/',
    fundingDetails: [
      {
        amount: '$80,000,000',
        label: 'FUNDING APPROVAL',
        description: 'Grant secured over ten years utilizing the Strategic Innovation Fund. Enabled project development for e-motors, e-invertors, and heat management systems for the Fortune 500 company.'
      },
      {
        amount: '500+',
        label: 'JOB CREATION',
        description: 'Bolstered the company\'s workforce in order to meet current and future labor demands.'
      }
    ]
  },
  {
    id: 2,
    company: 'Everblue',
    logo: '/logos/everblue.png',
    website: 'https://www.goeverblue.com/',
    fundingDetails: [
      {
        amount: '$1,400,000',
        label: 'FUNDING APPROVAL',
        description: 'Grant from North Carolina\'s JDIG (Job Development Investment Grant) which accelerated Everblue\'s future growth within the state.'
      },
      {
        amount: '$700,000',
        label: 'FUNDING APPROVAL',
        description: 'Grant from the local municipality and county — incentivized expansion into a new, all-encapsulating office facility.'
      }
    ]
  },
  {
    id: 3,
    company: 'Precision Evolution Global',
    logo: '/logos/peg.png',
    website: 'https://www.precision-globe.com/',
    fundingDetails: [
      {
        amount: '$500,000',
        label: 'FUNDING APPROVAL',
        description: 'Interest-free loan from FedDev Ontario which increased their biopharmaceutical event capacity and frequency.'
      },
      {
        amount: '$50,000',
        label: 'FUNDING APPROVAL',
        description: 'Grant from CanExport which expanded operations across the US, leading to greater overall market capture in the industry.'
      }
    ]
  }
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ grants: 0, capital: 0, projects: 0 });
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const statsRef = useRef(null);
  const sliderRef = useRef(null);
  const videoRef = useRef(null);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCount = (target, key) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    // Small delay to ensure intersection observer has fully triggered
    const timeoutId = setTimeout(() => {
      animateCount(1000, 'grants');
      animateCount(300, 'capital');
      animateCount(500, 'projects');
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [isVisible]);

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

  // Aggressive autoplay for mobile - no play button overlay
  useEffect(() => {
    const forceVideoPlay = async () => {
      if (videoRef.current) {
        // Set all necessary properties for mobile autoplay
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;
        videoRef.current.controls = false;
        videoRef.current.setAttribute('playsinline', 'true');
        videoRef.current.setAttribute('webkit-playsinline', 'true');
        
        try {
          await videoRef.current.play();
          console.log('Video autoplay successful');
        } catch (error) {
          console.log('Autoplay blocked, trying immediate retry:', error);
          
          // Try again immediately
          setTimeout(async () => {
            try {
              await videoRef.current.play();
              console.log('Video autoplay successful on retry');
            } catch (err) {
              console.log('Still blocked, will try on interaction:', err);
              // Last resort - play on any interaction
              const playOnInteraction = () => {
                videoRef.current.play().catch(() => {});
                document.removeEventListener('touchstart', playOnInteraction);
                document.removeEventListener('click', playOnInteraction);
                document.removeEventListener('scroll', playOnInteraction);
              };
              document.addEventListener('touchstart', playOnInteraction, { once: true });
              document.addEventListener('click', playOnInteraction, { once: true });
              document.addEventListener('scroll', playOnInteraction, { once: true });
            }
          }, 100);
        }
      }
    };

    // Try to play immediately when component mounts
    forceVideoPlay();
    
    // Also try when video loads
    if (videoLoaded && !videoError) {
      forceVideoPlay();
    }
  }, [videoLoaded, videoError]);

  // Carousel auto-rotation
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % successStories.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleCarouselMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleCarouselMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Manual navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPreviousSlide = () => {
    goToSlide(currentSlide === 0 ? successStories.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    goToSlide(currentSlide === successStories.length - 1 ? 0 : currentSlide + 1);
  };

  // Slider navigation functions
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0].offsetWidth + 32; // slide width + gap
      const currentScroll = sliderRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - slideWidth 
        : currentScroll + slideWidth;
      
      sliderRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home">
      <section className="hero">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          className="hero-video"
          onError={(e) => {
            console.error('Video failed to load:', e);
            setVideoError(true);
            // Hide video and show fallback background
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('hero-fallback');
          }}
          onLoadedData={async (e) => {
            setVideoLoaded(true);
            console.log('Video data loaded');
            
            // Immediately try to play when data loads
            try {
              e.target.muted = true;
              e.target.playsInline = true;
              e.target.controls = false;
              await e.target.play();
              console.log('Video started playing on data load');
            } catch (err) {
              console.log('Could not play on data load:', err);
            }
          }}
        >
          <source src="/media/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for readability */}
        <div className="hero-overlay"></div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-headline">
                Unlock Government<br />Funding With Confidence
              </h1>
              <p className="hero-subheadline">
                We help businesses navigate complex funding programs at every level of government — from federal to local — to secure the capital they need to grow.
              </p>
              <div className="hero-buttons">
                <a href="/services" className="hero-button hero-button-primary">
                  Explore Our Services
                </a>
                <a href="/success-stories" className="hero-button hero-button-secondary">
                  See Our Success Stories
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-section" ref={statsRef}>
        <div className="impact-container">
          {/* Section Title */}
          <div className="impact-section-header fade-up">
            <h2 className="impact-section-title">Government Funding Programs</h2>
            <p className="impact-section-subtitle">We have supported clients in preparing and submitting applications for a wide range of government funding opportunities available through various government programs and initiatives.</p>
          </div>

          {/* Logo Strip */}
          <div className="impact-logos">
            <div className="logo-strip">
              {logos.map((logo, index) => (
                <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer" className="logo-link">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="logo-fallback" style={{ display: 'none' }}>Logo unavailable</span>
                </a>
              ))}
              {logos.map((logo, index) => ( // Duplicate for seamless scroll
                <a key={`duplicate-${index}`} href={logo.href} target="_blank" rel="noopener noreferrer" className="logo-link">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="logo-fallback" style={{ display: 'none' }}>Logo unavailable</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <p className="logo-disclaimer">
            Logos are for reference only. We are not affiliated with, endorsed by, or partnered with these agencies.
          </p>

          {/* Our Impact Section */}
          <div className="impact-content">
            <div className="impact-header">
              <h3 className="impact-title">Our Impact</h3>
              <p className="impact-subtitle">Transforming businesses through strategic government funding solutions</p>
            </div>

          {/* Stats Cards */}
          <div className="impact-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6312 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6312 13.6815 18 14.5717 18 15.5C18 16.4283 17.6312 17.3185 16.9749 17.9749C16.3185 18.6312 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-number">
                ${counts.capital}M+
              </div>
              <div className="stat-label">Capital Raised</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-number">
                {counts.grants.toLocaleString()}+
              </div>
              <div className="stat-label">Grants Secured</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-number">
                {counts.projects.toLocaleString()}+
              </div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Our Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-header fade-up">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">Tailored solutions to help your business thrive</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card scale-in stagger-1">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-title">Grant Writing & Funding Acquisition</h3>
              <p className="service-description">We identify and secure government funding opportunities aligned with your goals.</p>
            </div>

            <div className="service-card scale-in stagger-2">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.663 17H4.337C3.186 17 2.5 15.5 3.5 14.5L8.5 9.5C9.5 8.5 10.5 8.5 11.5 9.5L16.5 14.5C17.5 15.5 16.814 17 15.663 17H10.337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-title">Strategic Advisory</h3>
              <p className="service-description">We provide insights and strategies to drive sustainable business growth.</p>
            </div>

            <div className="service-card scale-in stagger-3">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 3V9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-title">Project Management</h3>
              <p className="service-description">We plan, manage, and deliver complex projects on time and on budget.</p>
            </div>

            <div className="service-card scale-in stagger-4">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 10H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-title">Business Development</h3>
              <p className="service-description">We help build partnerships, expand markets, and accelerate growth.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Client Success Stories Section */}
      <section className="success-stories-section">
        <div className="success-stories-container">
          <div className="success-stories-header">
            <h2 className="success-stories-title">Client Success Stories</h2>
            <p className="success-stories-subtitle">Real results from businesses we've helped secure funding</p>
          </div>
          
          <div 
            className="success-stories-carousel"
            onMouseEnter={handleCarouselMouseEnter}
            onMouseLeave={handleCarouselMouseLeave}
          >
            {/* Navigation Arrows */}
            <button 
              className="carousel-arrow carousel-arrow-left" 
              aria-label="Previous slide"
              onClick={goToPreviousSlide}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="carousel-container" ref={carouselRef}>
              <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {successStories.map((story) => (
                  <div key={story.id} className="success-story-slide">
                    <div className="story-header">
                      <a 
                        href={story.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="company-logo-link"
                      >
                        <img 
                          src={story.logo} 
                          alt={`${story.company} logo`} 
                          className="company-logo"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="logo-placeholder" style={{display: 'none'}}>
                          {story.company.split(' ').map(word => word[0]).join('')}
                        </div>
                      </a>
                      <h3 className="company-name">{story.company}</h3>
                    </div>
                    
                    <div className="funding-details">
                      {story.fundingDetails.map((detail, index) => (
                        <div key={index} className="funding-detail-card">
                          <div className="funding-amount">{detail.amount}</div>
                          <div className="funding-label">{detail.label}</div>
                          <div className="funding-description">{detail.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="carousel-arrow carousel-arrow-right" 
              aria-label="Next slide"
              onClick={goToNextSlide}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="carousel-indicators">
            {successStories.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="success-stories-footer">
            <a href="/blog" className="read-more-btn">Read More Success Stories</a>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Work With Us Section */}
      <section className="work-with-us-section">
        <div className="work-with-us-container">
          <div className="work-with-us-header">
            <h2 className="work-with-us-title">Work With Us</h2>
            <p className="work-with-us-subtitle">Ready to secure the funding your business needs? Let's get started.</p>
          </div>

          {/* Pipeline Steps */}
          <div className="pipeline-steps">
            <div className="pipeline-line"></div>
            
            <div className="step">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="step-title">Get In Touch</h3>
              <p className="step-description">Tell us about your project and funding goals</p>
            </div>

            <div className="step">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.07 4.93C17.22 3.08 14.76 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 9.24 20.92 6.78 19.07 4.93Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="step-title">Strategy Session</h3>
              <p className="step-description">We analyze your needs and create a funding plan</p>
            </div>

            <div className="step">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="step-title">Launch Success</h3>
              <p className="step-description">We help you secure funding and grow your business</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="contact-form-card">
              <h3 className="contact-form-title">Ready to Get Started?</h3>
              <p className="contact-form-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              {/* Netlify Forms Configuration - Submissions sent to elnimaha@gmail.com */}
              <form 
                name="home-contact" 
                method="POST" 
                data-netlify="true" 
                className="contact-form"
              >
                {/* Hidden input for Netlify form detection */}
                <input type="hidden" name="form-name" value="home-contact" />
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder="Your full name"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="your.email@company.com"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    className="form-input" 
                    placeholder="Your company name"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-textarea" 
                    placeholder="Tell us about your project and funding goals..."
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
