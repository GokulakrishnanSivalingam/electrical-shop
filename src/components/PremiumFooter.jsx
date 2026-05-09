import React, { useState } from 'react';
import './PremiumFooter.css';

const PremiumFooter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // Simulate subscription
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' }
  ];

  const services = [
    { name: 'Electrical Supplies', icon: '⚡' },
    { name: 'Plumbing Solutions', icon: '🔧' },
    { name: 'DTH Recharge', icon: '📺' },
    { name: 'Installation', icon: '🏠' }
  ];

  const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/919876543210', icon: '💬' },
    { name: 'Facebook', href: 'https://facebook.com/sivaelectricals', icon: '📘' },
    { name: 'Instagram', href: 'https://instagram.com/sivaelectricals', icon: '📷' },
    { name: 'YouTube', href: 'https://youtube.com/sivaelectricals', icon: '📺' }
  ];

  const paymentMethods = [
    { name: 'Cash', icon: '💵' },
    { name: 'UPI', icon: '📱' },
    { name: 'Credit/Debit Card', icon: '💳' },
    { name: 'Net Banking', icon: '🏦' }
  ];

  return (
    <footer className="premium-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-brand">
              <h3 className="brand-title">Siva Electricals</h3>
              <p className="brand-description">
                Your trusted local electrical and plumbing shop providing quality products and expert service since 2008.
              </p>
              <div className="brand-contact">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>cuddulore Road ,Main road ,ThiruvennaiNallur</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+919876543210" className="contact-link">+91 9843644675</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:info@sivaelectricals.com" className="contact-link">info@sivaelectricals.com</a>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="section-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="section-title">Our Services</h4>
              <ul className="footer-services">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-name">{service.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="section-title">Newsletter</h4>
              <p className="newsletter-description">
                Subscribe to get updates on new products and exclusive offers
              </p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    {subscribed ? (
                      <span className="success-icon">✓</span>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 18a8 8 0 100-16 8 8 0 0116 0zm-1-11.5a.5.5 0 00-1 0v6.793l-2.146-2.147a.5.5 0 00-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L11 12.293V6.5z" />
                      </svg>
                    )}
                  </button>
                </div>
                {subscribed && (
                  <div className="subscription-success">
                    Successfully subscribed! Check your email for confirmation.
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-info">
              <div className="footer-social">
                <h5 className="social-title">Follow Us</h5>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.name}
                    >
                      <span className="social-icon">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <div className="legal-content">
            <div className="legal-links">
              <a href="/privacy" className="legal-link">Privacy Policy</a>
              <a href="/terms" className="legal-link">Terms of Service</a>
              <a href="/refund" className="legal-link">Refund Policy</a>
              <a href="/shipping" className="legal-link">Shipping Info</a>
            </div>
            <div className="copyright">
              <p>&copy; 2024 Siva Electricals. All rights reserved.</p>
              <p>Made with ❤️ in India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
