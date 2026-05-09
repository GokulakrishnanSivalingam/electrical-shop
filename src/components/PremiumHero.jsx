import React, { useState, useEffect } from 'react';
import './PremiumHero.css';
import Events from './Events.jsx';
import { Link } from 'react-router-dom';
import sh1 from '../image/sh1.jpg';
import sh2 from '../image/sh2.jpg';
import sh3 from '../image/sh3.jpg';
import sh4 from '../image/sh4.jpg';
import sh5 from '../image/sh5.jpg';


const PremiumHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    {
      id: 1,
      title: "Your Trusted Electrical & Plumbing Shop",
      subtitle: "Quality Products Since 2000",
      description: "Visit our shop for premium electrical and plumbing supplies from trusted brands",
      cta: "Visit Our Shop",
      image:"https://res.cloudinary.com/dnb5k6kpt/image/upload/v1778301568/sh1_cvcqgm.jpg"
    },
    {
      id: 2,
      title: "Complete Electrical products",
      subtitle: "Expert Guidance & Quality Products",
      description: "From switches to wiring, we have everything for your electrical needs",
      cta: "Explore Products",
      image: "https://res.cloudinary.com/dnb5k6kpt/image/upload/v1778301571/sh2_vex2wj.jpg"
    },
    {
      id: 3,
      title: "Premium Plumbing Supplies",
      subtitle: "Durable Materials for Every Need",
      description: "Quality pipes, fittings, and accessories for residential and commercial projects",
      cta: "View more",
       image:"https://res.cloudinary.com/dnb5k6kpt/image/upload/v1778301577/sh3_qz0quy.jpg"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="premium-hero">
      <nav className="hero-navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h2>Siva Electricals</h2>
          </div>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
            <li><button onClick={() => scrollToSection('services')}>Services</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Achievements</button></li>
            
          </ul>
        </div>
      </nav>
      <div  className="hero-container">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div  id="hero" className="hero-overlay"></div>
              <div className="hero-content">
                <div className="hero-text">
                  <h1 className="hero-title">{slide.title}</h1>
                  <h2 className="hero-subtitle">{slide.subtitle}</h2>
                  <p className="hero-description">{slide.description}</p>
                  <a href="#services" className="hero-cta">
                    {slide.cta}
                    <svg className="cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="hero-nav hero-nav-prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="hero-nav hero-nav-next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
