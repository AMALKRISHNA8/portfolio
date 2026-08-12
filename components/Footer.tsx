export default function Footer() {
  return (
    <footer className="zero-g-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          {/* Floating Orbiting Satellite SVG */}
          <div className="satellite-wrapper float-slow">
            <svg className="satellite-svg" viewBox="0 0 40 40" fill="none">
              <circle
                cx="20"
                cy="20"
                r="16"
                stroke="#00f0ff"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.5"
              />
              <circle cx="20" cy="20" r="4" fill="#00f0ff" />
              <rect x="6" y="18" width="6" height="4" fill="#38bdf8" rx="1" />
              <rect x="28" y="18" width="6" height="4" fill="#38bdf8" rx="1" />
            </svg>
          </div>
          <div className="footer-copy">
            <strong>Amal Krishna A.K</strong>
            <span>© 2026 Amal Krishna A.K. All rights reserved.</span>
          </div>
        </div>

        <div className="footer-right">
          <a href="#hero" className="orbit-top-btn">
            <i className="fas fa-chevron-up"></i> ORBIT TOP
          </a>
        </div>
      </div>
    </footer>
  );
}
