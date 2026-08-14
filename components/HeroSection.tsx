'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay before starting the animation for a cinematic feel
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Editorial Canva Cyber Portfolio Hero (Stylish Typography, No Photo) */}
      <section id="hero" className="editorial-hero text-hero-mode">
        {/* Top Header Bar */}
        <div className="editorial-top-bar">
          <div className="hero-role-label">
            <i className="fas fa-shield-alt text-cyan"></i> Cyber Security Analyst &amp; Full Stack Developer
          </div>
          <a href="#about" className="hero-top-arrow" aria-label="Scroll down">
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        {/* Center Stage: Stylish Typography Showcase */}
        <div className="editorial-hero-stage text-hero-stage">
          <div className="stylish-hero-container">
            {/* Name Badge */}
            <div className={`hero-name-pill ${isVisible ? 'animate-in' : ''}`}>
              <span className="pill-dot"></span>
              AMAL KRISHNA A.K
            </div>

            {/* Main Stylish Name Headline — Split Line Animation */}
            <div className="stylish-portfolio-wrapper">
              <h1 className="stylish-portfolio-title">
                <span className={`hero-word-line ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.2s' }}>
                  <span className="hero-word">AMAL</span>
                </span>
                <span className={`hero-word-line ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.4s' }}>
                  <span className="hero-word">KRISHNA</span>
                </span>
                <span className={`hero-word-line ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.6s' }}>
                  <span className="hero-word">AK</span>
                </span>
              </h1>
              <div className="stylish-portfolio-glow" aria-hidden="true">
                AMAL KRISHNA AK
              </div>
            </div>

            {/* Subtitle Tagline */}
            <p className={`stylish-hero-sub ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.9s' }}>
              Final-year <strong>B.Tech CSE (Cyber Security)</strong> Engineer at <strong>SJCET Palai</strong> • Post-Quantum Cryptography &amp; Secure Systems
            </p>

            {/* Action Buttons */}
            <div className={`hero-action-buttons ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '1.1s' }}>
              <a href="#projects" className="btn-cream">
                Explore Projects <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn-outline-cream">
                Get In Touch
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Editorial Bio Strip */}
      <section className="editorial-bio-strip">
        <div className="container bio-strip-inner">
          <p className="bio-tagline">
            Building post-quantum cryptography applications, network defenses, and high-performance software architectures with modern web technologies.
          </p>

          <div className="bio-actions">
            <a href="#skills" className="btn-cream">
              Technical Skills <i className="fas fa-microchip"></i>
            </a>
            <a href="#contact" className="btn-outline-cream">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
