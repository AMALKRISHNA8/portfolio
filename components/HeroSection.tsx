'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      {/* Editorial Canva Portfolio Model Hero */}
      <section id="hero" className="editorial-hero">
        {/* Top Header Bar */}
        <div className="editorial-top-bar">
          <div className="hero-role-label">
            Cyber Security Analyst & Full Stack Developer
          </div>
          <a href="#about" className="hero-top-arrow" aria-label="Scroll down">
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        {/* Center Stage: Layered Text + Subject Portrait Image */}
        <div className="editorial-hero-stage">
          {/* Giant Text Wrapper containing both Solid (z:1) and Outlined Stroke (z:3) layers */}
          <div className="hero-giant-text-wrapper">
            <span className="hero-text-solid" aria-hidden="true">
              PORTFOLIO
            </span>
            <span className="hero-text-stroke" aria-hidden="true">
              PORTFOLIO
            </span>
          </div>

          {/* Subject Portrait Image (z:2) */}
          <div className="hero-portrait-wrapper">
            <Image
              src="/hero-model.jpg"
              alt="Amal Krishna A.K Portfolio Portrait"
              width={600}
              height={700}
              priority
              className="hero-portrait-img"
            />
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
            Final-year <strong>B.Tech CSE (Cyber Security)</strong> student at{' '}
            <strong>SJCET Palai</strong>, building post-quantum cryptography applications, network defenses, and modern software architectures.
          </p>

          <div className="bio-actions">
            <a href="#projects" className="btn-cream">
              View Projects <i className="fas fa-arrow-right"></i>
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
