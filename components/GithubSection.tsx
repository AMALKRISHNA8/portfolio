'use client';

import { useMemo } from 'react';

export default function GithubSection() {
  const tiles = useMemo(() => {
    return Array.from({ length: 48 }, (_, i) => {
      const rand = (i * 7 + 13) % 4;
      return rand > 0 ? `lvl-${rand}` : '';
    });
  }, []);

  return (
    <section id="github" className="section-padding">
      <div className="container">
        <div className="glass-card github-callout-card float-slow">
          <div className="github-callout-grid">
            <div className="github-text-side">
              <span className="section-tag">
                <i className="fab fa-github"></i> GitHub Activity
              </span>
              <h2 className="callout-title">
                Ongoing Code <span className="glow-text">Contributions</span>
              </h2>
              <p className="callout-desc">
                Regularly pushing security tools, post-quantum experiments, and backend scripts. Check out my repositories and contribution history on GitHub.
              </p>
              <a
                href="https://github.com/amalkrishna8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary float-btn"
              >
                <i className="fab fa-github"></i> Visit GitHub Profile{' '}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>

            {/* Cyber Terminal Commit Matrix Graphic */}
            <div className="github-terminal-side">
              <div className="terminal-header">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
                <span className="term-title">amalkrishna_contributions.sh</span>
              </div>
              <div className="terminal-matrix" id="terminal-matrix">
                {tiles.map((lvlClass, idx) => (
                  <div
                    key={idx}
                    className={`matrix-tile ${lvlClass}`}
                  />
                ))}
              </div>
              <div className="terminal-legend">
                <span>Less</span>
                <div className="legend-dots">
                  <span className="ld ld-0"></span>
                  <span className="ld ld-1"></span>
                  <span className="ld ld-2"></span>
                  <span className="ld ld-3"></span>
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
