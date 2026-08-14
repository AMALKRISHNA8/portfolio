'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ⚠️ REPLACE THIS with your real Web3Forms access key
  // Get your free key at: https://web3forms.com
  const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          message: message,
          subject: `Portfolio Contact: Message from ${name}`,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setToastType('success');
        setToastMessage(
          'Signal Transmitted! Thank you for reaching out, Amal will reply soon.'
        );
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setToastType('error');
        setToastMessage(
          'Transmission failed! Please try again or email directly.'
        );
      }
    } catch {
      setToastType('error');
      setToastMessage(
        'Connection lost! Please try again or email directly.'
      );
    }

    setIsSubmitting(false);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">
            <i className="fas fa-paper-plane"></i> Get In Touch
          </span>
          <h2 className="section-title">
            Send a Signal Across <span className="glow-text">Space</span>
          </h2>
          <p className="section-subtitle">
            Open for software roles, security research, or project collaborations
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Floating Contact Cards */}
          <div className="glass-card contact-info-card float-slow">
            <h3>Amal Krishna A.K</h3>
            <p className="c-sub">
              B.Tech CSE (Cyber Security) Student • SJCET Palai
            </p>

            <div className="contact-links-list">
              <a
                href="mailto:amalkrishnaak62@gmail.com"
                className="c-link-box"
              >
                <div className="c-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div className="c-label">Email</div>
                  <div className="c-val">amalkrishnaak62@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="c-link-box"
              >
                <div className="c-icon blue-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div>
                  <div className="c-label">LinkedIn</div>
                  <div className="c-val">linkedin.com/in/amalkrishna</div>
                </div>
              </a>

              <a
                href="https://github.com/amalkrishna8"
                target="_blank"
                rel="noopener noreferrer"
                className="c-link-box"
              >
                <div className="c-icon purple-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div>
                  <div className="c-label">GitHub</div>
                  <div className="c-val">github.com/amalkrishna8</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-card contact-form-card float-reverse">
            <h3>Transmit a Message</h3>

            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Share your message or opportunity details..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-cream form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Transmitting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>

            <div
              className={`form-toast ${showToast ? '' : 'hidden'} ${
                toastType === 'error' ? 'form-toast-error' : ''
              }`}
            >
              <i
                className={
                  toastType === 'success'
                    ? 'fas fa-circle-check'
                    : 'fas fa-circle-exclamation'
                }
              ></i>{' '}
              {toastMessage}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
