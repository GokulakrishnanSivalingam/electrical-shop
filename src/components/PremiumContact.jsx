import React, { useState } from 'react';
import './PremiumContact.css';

const PremiumContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'general'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const services = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'electrical', label: 'Electrical Products' },
    { value: 'plumbing', label: 'Plumbing Supplies' },
    { value: 'installation', label: 'Installation Service' },
    { value: 'support', label: 'Technical Support' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'general'
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="premium-contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Have questions about our products or services? We're here to help you with expert advice and support
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="9876543210"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Service Type <span className="required">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {services.map(service => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="How can we help you?"
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us more about your requirements..."
                  rows="6"
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? (
                  <span className="loading-spinner">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 3a7 7 0 100 14v1a1 1 0 102 0v-1a7 7 0 10-14z" opacity="0.2" />
                      <path d="M10 3a7 7 0 100 14v1a1 1 0 102 0v-1a7 7 0 10-14z" opacity="0.4" transform="rotate(45 10 10)" />
                      <path d="M10 3a7 7 0 100 14v1a1 1 0 102 0v-1a7 7 0 10-14z" opacity="0.6" transform="rotate(90 10 10)" />
                      <path d="M10 3a7 7 0 100 14v1a1 1 0 102 0v-1a7 7 0 10-14z" opacity="0.8" transform="rotate(135 10 10)" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus && (
                <div className={`status-message ${submitStatus}`}>
                  {submitStatus === 'success' ? (
                    <span className="success-content">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 18a8 8 0 100-16 8 8 0 0116 0zm-1-11.5a.5.5 0 00-1 0v6.793l-2.146-2.147a.5.5 0 00-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L11 12.293V6.5z" />
                      </svg>
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </span>
                  ) : (
                    <span className="error-content">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 18a8 8 0 100-16 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                      </svg>
                      Oops! Something went wrong. Please try again or call us directly.
                    </span>
                  )}
                </div>
              )}
            </form>
          </div>

          <div className="contact-info-section">
            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">📍</div>
                <h3>Visit Our Store</h3>
              </div>
              <div className="info-content">
                <p className="info-text">
                  123 Main Road, Near Bus Stand,<br />
                  Your City, State - 123456
                </p>
                <a href="https://maps.google.com" target="_blank" className="info-link">
                  Get Directions
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 16s6-5.686 6-10S6 0 6 6s-6 1.686-6 6 1.686 6 6-6 10zm0-12a4 4 0 100 8 4 4 0 004-4z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">📞</div>
                <h3>Call Us</h3>
              </div>
              <div className="info-content">
                <p className="info-text">
                  <a href="tel:+919876543210" className="info-phone">+91 98765 43210</a>
                  <br />
                  <a href="tel:+919876543211" className="info-phone">+91 98765 43211</a>
                </p>
                <p className="info-hours">
                  Mon - Sat: 9:00 AM - 8:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">📧</div>
                <h3>Email Us</h3>
              </div>
              <div className="info-content">
                <p className="info-text">
                  <a href="mailto:info@sivaelectricals.com" className="info-email">
                    info@sivaelectricals.com
                  </a>
                  <br />
                  <a href="mailto:support@sivaelectricals.com" className="info-email">
                    support@sivaelectricals.com
                  </a>
                </p>
                <p className="info-response">
                  We respond within 24 hours
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">💬</div>
                <h3>WhatsApp Support</h3>
              </div>
              <div className="info-content">
                <p className="info-text">
                  Quick support via WhatsApp
                </p>
                <a href="https://wa.me/919876543210" target="_blank" className="whatsapp-btn">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5.665 7.158l-2.037-2.037c-.196-.196-.511-.196-.707 0l-1.414 1.414c-.196.196-.196.196-.511 0-.707l2.037-2.037c.196-.196.511-.196.707 0 .196.196.196.511 0 .707l-1.414 1.414c-.196.196-.196.511 0-.707l2.037-2.037z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumContact;
