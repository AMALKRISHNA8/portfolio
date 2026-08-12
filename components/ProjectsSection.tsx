export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">
            <i className="fas fa-rocket"></i> Zero-G Artifacts
          </span>
          <h2 className="section-title">
            Featured <span className="glow-text">Projects & Systems</span>
          </h2>
          <p className="section-subtitle">
            Hover over cards to stabilize their orbit in space
          </p>
        </div>

        <div className="projects-zero-g-grid">
          {/* Project 1 */}
          <div className="glass-card project-zero-g-card float-slow">
            <div className="project-top">
              <div className="project-icon-box">
                <i className="fas fa-key"></i>
              </div>
              <span className="proj-badge badge-pqc">Post-Quantum Research</span>
            </div>
            <h3 className="proj-title">Post-Quantum Secure Communication System</h3>
            <p className="proj-desc">
              A secure communication system combining <strong>CRYSTALS-Kyber</strong> (post-quantum key encapsulation mechanism) with <strong>AES-256-GCM</strong> symmetric encryption for quantum-resistant data protection.
            </p>
            <div className="proj-tags">
              <span>#Python</span>
              <span>#CRYSTALS-Kyber</span>
              <span>#AES-256-GCM</span>
              <span>#PQC</span>
            </div>
            <div className="proj-footer">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <i className="fab fa-github"></i> Repository
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="glass-card project-zero-g-card float-medium delay-1">
            <div className="project-top">
              <div className="project-icon-box emerald-icon">
                <i className="fas fa-terminal"></i>
              </div>
              <span className="proj-badge badge-repo">GitHub Collection</span>
            </div>
            <h3 className="proj-title">Cybersecurity Basics Repository</h3>
            <p className="proj-desc">
              Curated collection of Python-based cybersecurity fundamentals, network analysis scripts, hashing utilities, and security automation snippets.
            </p>
            <div className="proj-tags">
              <span>#Python</span>
              <span>#Networking</span>
              <span>#Security Fundamentals</span>
              <span>#OpenSource</span>
            </div>
            <div className="proj-footer">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <i className="fab fa-github"></i> Repository
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="glass-card project-zero-g-card float-fast delay-2">
            <div className="project-top">
              <div className="project-icon-box purple-icon">
                <i className="fas fa-user-lock"></i>
              </div>
              <span className="proj-badge badge-web">Web App Security</span>
            </div>
            <h3 className="proj-title">Cybersecurity Mini-Project</h3>
            <p className="proj-desc">
              Local web application with secure login & registration system built to demonstrate authentication best practices, password hashing, and input sanitization.
            </p>
            <div className="proj-tags">
              <span>#Node.js</span>
              <span>#SQL</span>
              <span>#Authentication</span>
              <span>#Web Security</span>
            </div>
            <div className="proj-footer">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <i className="fab fa-github"></i> Repository
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="glass-card project-zero-g-card float-slow delay-3">
            <div className="project-top">
              <div className="project-icon-box amber-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <span className="proj-badge badge-event">Event Lead</span>
            </div>
            <h3 className="proj-title">RED vs BLUE – Cyber Battle 2025</h3>
            <p className="proj-desc">
              Coordinated and helped run a flagship tech-fest cybersecurity attack/defense competition; managed CTF challenge flags, scoring environment, and battle logistics.
            </p>
            <div className="proj-tags">
              <span>#CTF</span>
              <span>#AttackAndDefense</span>
              <span>#EventCoordination</span>
              <span>#SJCET</span>
            </div>
            <div className="proj-footer">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <i className="fab fa-github"></i> Event Details
              </a>
            </div>
          </div>

          {/* Project 5 */}
          <div className="glass-card project-zero-g-card float-medium delay-4">
            <div className="project-top">
              <div className="project-icon-box cyan-icon">
                <i className="fas fa-globe"></i>
              </div>
              <span className="proj-badge badge-site">Personal Portfolio</span>
            </div>
            <h3 className="proj-title">Portfolio Website</h3>
            <p className="proj-desc">
              Personal portfolio website built with zero-gravity space aesthetics, canvas starfield background, mouse-parallax drift, and floating project cards.
            </p>
            <div className="proj-tags">
              <span>#Next.js</span>
              <span>#React</span>
              <span>#TypeScript</span>
              <span>#Canvas</span>
            </div>
            <div className="proj-footer">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                <i className="fab fa-github"></i> Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
