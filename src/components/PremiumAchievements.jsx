import React from 'react';
import './PremiumAchievements.css';

const PremiumAchievements = () => {
  const achievements = [
    {
      id: 1,
      icon: '🏆',
      number: '15+',
      label: 'Years of Experience',
      description: 'Serving the community with excellence since 2000'
    },
    {
      id: 2,
      icon: '👥',
      number: '5000+',
      label: 'Happy Customers',
      description: 'Trusted by thousands of satisfied customers'
    },
    {
      id: 3,
      icon: '⚡',
      number: '10000+',
      label: 'Products Sold',
      description: 'Wide range of quality electrical and plumbing products'
    },
    {
      id: 4,
      icon: '⭐',
      number: '4.9',
      label: 'Customer Rating',
      description: 'Excellent reviews from our valued customers'
    }
  ];

  return (
    <section id="contact" className="premium-achievements">
      <div className="container">
        <div className="achievements-header">
          <h2 className="achievements-title">Our Achievements</h2>
          <p className="achievements-subtitle">
            Proudly serving our community with dedication and excellence
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className="achievement-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="achievement-icon-wrapper">
                <span className="achievement-icon">{achievement.icon}</span>
              </div>
              <div className="achievement-content">
                <div className="achievement-number">{achievement.number}</div>
                <h3 className="achievement-label">{achievement.label}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumAchievements;
