import React from 'react';
import './PremiumServices.css';

const PremiumServices = () => {
  const services = [
    {
      id: 1,
      icon: '⚡',
      title: 'Electrical Supplies',
      image: 'https://i.pinimg.com/1200x/58/d6/2f/58d62fd73f09512558cf3024db7841a7.jpg',
      features: ['Wires Items', 'Varities of Switches', 'Premium Lightings'],
      color: 'rgba(152, 82, 227, 0.6)'
    },
    {
      id: 2,
      icon: '🔧',
      title: 'Plumbing Supplies',
      image: 'https://i.pinimg.com/736x/b9/27/9f/b9279ffa4f22567c387a41eb0cad4f09.jpg',
      features: ['WaterLine pipes and Accessories', 'Taps and showers', 'Ceramics Items'],
      color: 'rgba(152, 82, 227, 0.6)'
    },
    {
      id: 3,
      icon: '🏠',
      title: 'Sun Direct DTH',
      image: 'https://i.pinimg.com/736x/5d/1b/fb/5d1bfb80ccd70e14804881c4daf779c9.jpg',
      features: ['Recharge', 'Activation and Fitting', 'Timely Service'],
      color: 'rgba(152, 82, 227, 0.6)'
    }
  ];

  return (
    <section id="services" className="premium-services">
      <div className="container">
        
        <div className="services-header">
          <h2 className="services-title">
            Our Electrical & Plumbing Shop Services
          </h2>
          <p className="services-subtitle">
            Visit our shop for quality electrical and plumbing products with expert guidance and professional service
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >

              <div 
                className="service-header" 
                style={{ backgroundColor: service.color }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>

              <div className="service-content">

                {/* IMAGE SECTION */}
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-image"
                  />
                </div>

                {/* FEATURES */}
                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <div key={index} className="feature-badge">
                      <svg 
                        className="badge-icon" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="currentColor"
                      >
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PremiumServices;