export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src="/logo-white.png" alt="Zoe Health Management Systems" width="180" height="90" />
            <p>Supporting your journey to better health, from first consultation to complete recovery.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Travel Coordination</a></li>
              <li><a href="#services">Treatment Support</a></li>
              <li><a href="#services">Recovery Services</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">Our Vision</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="copy">
          © {new Date().getFullYear()} Zoe Health Management Systems. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
