export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">
            <i className="fas fa-user-graduate"></i> Academic & Drive
          </span>
          <h2 className="section-title">
            Securing Digital Horizons with <span className="glow-text">Passion & Code</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Main Bio Card */}
          <div className="glass-card about-main-card float-slow">
            <div className="card-header-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Education & Background</h3>
            <p className="institution-sub">
              KTU 2019 Scheme • St. Joseph&apos;s College of Engineering and Technology, Palai
            </p>

            <div className="bio-text">
              <p>
                I am a final-year <strong>B.Tech Computer Science and Engineering</strong> student with a specialized focus in <strong>Cyber Security</strong> at <strong>St. Joseph&apos;s College of Engineering and Technology, Palai</strong>, Kottayam, Kerala (KTU 2019 Scheme).
              </p>
              <p>
                My academic and personal journey spans from classical software development to post-quantum cryptography, network security analysis, and secure web applications. I am deeply driven to become <strong>job-ready through hands-on project engineering</strong> and open-source contributions.
              </p>
            </div>

            <div className="about-stats-grid">
              <div className="stat-box">
                <span className="sb-label">Degree</span>
                <span className="sb-val">B.Tech CSE (Cyber Security)</span>
              </div>
              <div className="stat-box">
                <span className="sb-label">College</span>
                <span className="sb-val">SJCET Palai</span>
              </div>
              <div className="stat-box">
                <span className="sb-label">Location</span>
                <span className="sb-val">Kottayam, Kerala 🇮🇳</span>
              </div>
              <div className="stat-box">
                <span className="sb-label">Status</span>
                <span className="sb-val status-green">● Open for Roles</span>
              </div>
            </div>
          </div>

          {/* Personal Interests Card */}
          <div className="glass-card about-interests-card float-reverse">
            <div className="card-header-icon purple-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Interests & Pursuits</h3>
            <p className="institution-sub">What drives my growth outside academics</p>

            <div className="interests-list">
              <div className="interest-item float-fast">
                <span className="i-emoji">⚽</span>
                <div>
                  <strong className="i-title">Football</strong>
                  <span className="i-desc">Team strategy, physical endurance, and active sports</span>
                </div>
              </div>
              <div className="interest-item float-medium delay-1">
                <span className="i-emoji">🛡️</span>
                <div>
                  <strong className="i-title">Cybersecurity</strong>
                  <span className="i-desc">CTF challenges, digital forensics, and network defense</span>
                </div>
              </div>
              <div className="interest-item float-slow delay-2">
                <span className="i-emoji">💻</span>
                <div>
                  <strong className="i-title">Programming</strong>
                  <span className="i-desc">Python, SQL, Node.js, and clean backend architecture</span>
                </div>
              </div>
              <div className="interest-item float-medium delay-3">
                <span className="i-emoji">🤖</span>
                <div>
                  <strong className="i-title">AI Tools</strong>
                  <span className="i-desc">Accelerating workflows with modern AI platforms</span>
                </div>
              </div>
              <div className="interest-item float-fast delay-4">
                <span className="i-emoji">🌐</span>
                <div>
                  <strong className="i-title">Open-Source & GitHub</strong>
                  <span className="i-desc">Sharing code repositories and learning with global devs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
