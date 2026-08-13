'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const fullName = 'AMAL KRISHNA AK';
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullName.length) {
        setDisplayText(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Blink cursor a few times then hide
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 120);
    return () => clearInterval(typingInterval);
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
            <div className="hero-name-pill">
              <span className="pill-dot"></span>
              AMAL KRISHNA A.K
            </div>

            {/* Main Stylish Name Headline */}
            <div className="stylish-portfolio-wrapper">
              <h1 className="stylish-portfolio-title">
                {displayText}
                {showCursor && <span className="typing-cursor">|</span>}
              </h1>
              <div className="stylish-portfolio-glow" aria-hidden="true">
                {displayText}
              </div>
            </div>

            {/* Subtitle Tagline */}
            <p className="stylish-hero-sub">
              Final-year <strong>B.Tech CSE (Cyber Security)</strong> Engineer at <strong>SJCET Palai</strong> • Post-Quantum Cryptography &amp; Secure Systems
            </p>

            {/* Action Buttons */}
            <div className="hero-action-buttons">
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
