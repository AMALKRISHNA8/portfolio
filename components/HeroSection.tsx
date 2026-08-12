'use client';

export default function HeroSection() {
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

            {/* Main Stylish PORTFOLIO Headline */}
            <div className="stylish-portfolio-wrapper">
              <h1 className="stylish-portfolio-title">
                PORTFOLIO
              </h1>
              <div className="stylish-portfolio-glow" aria-hidden="true">
                PORTFOLIO
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

        {/* Bottom Bar */}
        <div className="editorial-bottom-bar">
          <div className="hero-name-label">
            Amal Krishna A.K
          </div>
          <a href="#contact" className="hero-domain-link">
            amalkrishna.dev
          </a>
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
