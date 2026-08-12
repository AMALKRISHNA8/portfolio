export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">
            <i className="fas fa-layer-group"></i> Technical Arsenal
          </span>
          <h2 className="section-title">
            Skills, Tools & <span className="glow-text">Security Concepts</span>
          </h2>
          <p className="section-subtitle">
            Floating badges drifting weightlessly across key domains
          </p>
        </div>

        <div className="skills-categories-grid">
          {/* Category 1: Languages & Backend */}
          <div className="glass-card skill-cat-card float-slow">
            <div className="cat-header">
              <div className="cat-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Languages & Backend</h3>
            </div>
            <div className="chips-container">
              <span className="skill-badge highlight float-fast">
                <i className="fab fa-python"></i> Python
              </span>
              <span className="skill-badge highlight float-medium">
                <i className="fas fa-database"></i> SQL
              </span>
              <span className="skill-badge highlight float-slow">
                <i className="fab fa-node-js"></i> Node.js
              </span>
            </div>
          </div>

          {/* Category 2: Frontend & Mobile */}
          <div className="glass-card skill-cat-card float-medium">
            <div className="cat-header">
              <div className="cat-icon purple-icon">
                <i className="fas fa-mobile-screen"></i>
              </div>
              <h3>Frontend & Mobile</h3>
            </div>
            <div className="chips-container">
              <span className="skill-badge highlight float-slow">
                <i className="fab fa-react"></i> React Native
              </span>
              <span className="skill-badge float-fast">
                <i className="fas fa-palette"></i> UI/UX Basics
              </span>
            </div>
          </div>

          {/* Category 3: Database */}
          <div className="glass-card skill-cat-card float-fast">
            <div className="cat-header">
              <div className="cat-icon emerald-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Database</h3>
            </div>
            <div className="chips-container">
              <span className="skill-badge highlight float-medium">
                <i className="fas fa-leaf"></i> MongoDB
              </span>
            </div>
          </div>

          {/* Category 4: Cybersecurity Tools */}
          <div className="glass-card skill-cat-card float-slow full-width-cat">
            <div className="cat-header">
              <div className="cat-icon amber-icon">
                <i className="fas fa-shield-virus"></i>
              </div>
              <h3>Cybersecurity Tools</h3>
            </div>
            <div className="chips-container">
              <span className="skill-badge highlight float-fast">
                <i className="fas fa-network-wired"></i> Nmap
              </span>
              <span className="skill-badge highlight float-slow">
                <i className="fas fa-wave-square"></i> Wireshark
              </span>
              <span className="skill-badge highlight float-medium">
                <i className="fas fa-compact-disc"></i> FTK Imager
              </span>
              <span className="skill-badge highlight float-fast">
                <i className="fas fa-search"></i> Autopsy
              </span>
              <span className="skill-badge float-slow">
                <i className="fas fa-file-contract"></i> EnCase
              </span>
              <span className="skill-badge float-medium">
                <i className="fas fa-file-code"></i> HxD
              </span>
              <span className="skill-badge float-fast">
                <i className="fas fa-terminal"></i> 010 Editor
              </span>
              <span className="skill-badge highlight float-slow">
                <i className="fas fa-user-shield"></i> IDS / IPS
              </span>
              <span className="skill-badge highlight float-medium">
                <i className="fas fa-chart-line"></i> SIEM
              </span>
              <span className="skill-badge float-fast">
                <i className="fab fa-windows"></i> Windows Defender
              </span>
              <span className="skill-badge highlight float-slow">
                <i className="fab fa-linux"></i> Linux Hardening
              </span>
            </div>
          </div>

          {/* Category 5: Core Concepts */}
          <div className="glass-card skill-cat-card float-reverse full-width-cat">
            <div className="cat-header">
              <div className="cat-icon cyan-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Core Concepts</h3>
            </div>
            <div className="chips-container">
              <span className="skill-badge highlight float-fast">
                <i className="fas fa-key"></i> Cryptography
              </span>
              <span className="skill-badge highlight float-medium">
                <i className="fas fa-sitemap"></i> Networking
              </span>
              <span className="skill-badge highlight float-slow">
                <i className="fas fa-lock"></i> System & Network Security
              </span>
              <span className="skill-badge float-fast">
                <i className="fas fa-sliders"></i> OS Hardening
              </span>
              <span className="skill-badge highlight float-medium">
                <i className="fas fa-fingerprint"></i> Digital Forensics
              </span>
              <span className="skill-badge float-slow">
                <i className="fas fa-cubes"></i> Blockchain Basics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
