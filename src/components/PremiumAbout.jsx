import React from 'react';
import './PremiumAbout.css';

const PremiumAbout = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Product Categories' },
    { number: '100+', label: 'Plumbing Accessories' }
  ];

  const values = [
    {
      icon: '🏆',
      title: 'Quality First',
      description: 'We source only the highest quality electrical and plumbing products from trusted manufacturers.'
    },
    {
      icon: '🤝',
      title: 'Customer Trust',
      description: 'Building lasting relationships through reliable service and transparent business practices.'
    },
    {
      icon: '⚡',
      title: 'Expert Knowledge',
      description: 'Our team brings deep expertise in electrical solutions and modern technology.'
    },
    {
      icon: '🏪',
      title: 'Local Shop',
      description: 'Visit our physical shop for personal assistance and immediate product availability.'
    }
  ];

  const timeline = [
    {
      year: '2000',
      title: 'Founded',
      description: 'Siva Electricals started as a small local shop with a vision to provide quality electrical supplies.'
    },
    {
      year: '2004',
      title: 'Expansion',
      description: 'Expanded our product range to include DTH recharge services.'
    },
    {
      year: '2014',
      title: 'Plumbing Services',
      description: 'Expanded our product range to include Plumbing Accessories and its services.'
    },
    {
      year: '2025',
      title: 'Modern Era',
      description: 'Complete  transformation with premium products and enhanced customer service.'
    }
  ];

  return (
    <section id="about" className="premium-about">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">About Our Shop</h2>
          <p className="about-subtitle">
            Your trusted local electrical and plumbing shop providing quality products and expert service since 2008
          </p>
        </div>

        <div className="about-content">
          <div className="about-main fade-in-left">
            <div className="about-text">
              <h3>Powering Communities with Excellence</h3>
              <p>
                Welcome to Siva Electricals, your premier destination for comprehensive electrical and plumbing solutions. 
                For over 15 years, we've been serving our community with unwavering commitment to quality, 
                reliability, and customer satisfaction.
              </p>
              <p>
                What started as a small electrical shop has grown into a trusted establishment offering a complete range 
                of products for residential, commercial, and industrial needs. Our carefully curated selection includes 
                everything from basic switches and wiring to advanced smart home solutions and professional-grade plumbing materials.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Premium Quality Products</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Expert Technical Support</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Competitive Pricing</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>In-Store Pickup Available</span>
                </div>
              </div>
            </div>
            
            <div className="about-image fade-in-right">
              <img 
                src="https://i.pinimg.com/736x/37/a9/52/37a9521834225b1672fb686506bd293b.jpg" 
                alt="Siva Electricals Store" 
                className="about-img"
              />
              <div className="image-overlay">
                <div className="overlay-text">
                  <h4>Visit Our Store</h4>
                  <p>Experience our quality products and expert service firsthand</p>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="values-section">
          <h3 className="section-title">Our Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h3 className="section-title">Our Journey</h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-year">{item.year}</div>
                </div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default PremiumAbout;
