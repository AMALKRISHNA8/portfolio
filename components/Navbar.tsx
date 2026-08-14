'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollTop / docHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme to <html> element
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav id="navbar" className="glass-nav">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={closeMenu}>
            <div className="logo-shield">
              <i className="fas fa-user-shield"></i>
            </div>
            <div className="logo-text">
              Amal Krishna<span className="dot"> AK</span>
              <span className="logo-sub">CyberSec & Dev</span>
            </div>
          </a>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="nav-links">
            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                <i className="fas fa-user"></i> About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" onClick={closeMenu}>
                <i className="fas fa-microchip"></i> Skills
              </a>
            </li>
            <li>
              <Link href="/projects" className="nav-link" onClick={closeMenu}>
                <i className="fas fa-folder-open"></i> Projects
              </Link>
            </li>
            <li>
              <a href="https://github.com/amalkrishna8" className="nav-link" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-cta" onClick={closeMenu}>
                <i className="fas fa-paper-plane"></i> Contact Me
              </a>
            </li>
          </ul>

          <div className="nav-right-controls">
            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>

            {/* Hamburger */}
            <div
              className="hamburger"
              id="hamburger"
              aria-label="Toggle menu"
              role="button"
              tabIndex={0}
              onClick={() => setIsOpen(!isOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsOpen(!isOpen);
                }
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
