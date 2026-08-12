'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setName('');
    setEmail('');
    setMessage('');

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
                href="mailto:amalkrishna.ak@gmail.com"
                className="c-link-box"
              >
                <div className="c-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div className="c-label">Email</div>
                  <div className="c-val">amalkrishna.ak@gmail.com</div>
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="c-link-box"
              >
                <div className="c-icon purple-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div>
                  <div className="c-label">GitHub</div>
                  <div className="c-val">github.com/amalkrishna</div>
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

              <button type="submit" className="btn-primary form-submit-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>

            <div className={`form-toast ${showToast ? '' : 'hidden'}`}>
              <i className="fas fa-circle-check"></i> Signal Transmitted! Thank you for reaching out, Amal will reply soon.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
