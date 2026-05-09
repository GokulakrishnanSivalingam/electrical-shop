import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      number: "15+",
      title: "Years in Business",
      description: "Serving the community with quality electrical and plumbing solutions",
      icon: "🏆"
    },
    {
      id: 2,
      number: "5000+",
      title: "Happy Customers",
      description: "Trusted by thousands of satisfied customers across the region",
      icon: "😊"
    },
    {
      id: 3,
      number: "24/7",
      title: "Emergency Service",
      description: "Round-the-clock support for all your electrical emergencies",
      icon: "🚨"
    },
    {
      id: 4,
      number: "100+",
      title: "Product Range",
      description: "Extensive collection of electrical, plumbing, and DTH products",
      icon: "📦"
    },
    {
      id: 5,
      number: "50+",
      title: "Brand Partnerships",
      description: "Collaborating with leading brands in the industry",
      icon: "🤝"
    },
    {
      id: 6,
      number: "98%",
      title: "Customer Satisfaction",
      description: "Maintaining excellent service quality and customer happiness",
      icon: "⭐"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015 Certified",
      description: "Quality Management Systems"
    },
    {
      id: 2,
      name: "Authorized Dealer",
      description: "Certified partner for major electrical brands"
    },
    {
      id: 3,
      name: "Government Approved",
      description: "Licensed electrical contractor"
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <h2 className="section-title">Our Achievements</h2>
        <p className="section-subtitle">Excellence in service since 2009</p>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className="achievement-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="achievement-icon">
                <span className="icon-emoji">{achievement.icon}</span>
              </div>
              <div className="achievement-number">{achievement.number}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3 className="certifications-title">Certifications & Awards</h3>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="certification-badge">
                  <span>🏅</span>
                </div>
                <h4>{cert.name}</h4>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
