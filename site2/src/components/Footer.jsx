export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="brand-col">
            <div className="brand-logo">
              <span className="logo-badge">
                <img src="/zoehealth-logo.png" alt="Zoe Health Management Systems" width="48" height="48" />
              </span>
              <span>Zoe Health</span>
            </div>
            <p>
              Supporting your journey to better health — from first consultation to complete
              recovery, across the Washington DC, Maryland, and Virginia corridor.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Travel Coordination</a></li>
              <li><a href="#services">Treatment Support</a></li>
              <li><a href="#services">Recovery Care</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Washington DC · MD · VA</li>
              <li><a href="tel:+12025550130">+1 (202) 555-0130</a></li>
              <li><a href="mailto:care@zoehealthmanagement.com">care@zoehealthmanagement.com</a></li>
            </ul>
          </div>
        </div>
        <div className="copy">
          © {new Date().getFullYear()} Zoe Health Management Systems. All rights reserved.
          {/* <span>© {new Date().getFullYear()} Zoe Health Management Systems. All rights reserved.</span> */}
          {/* <span>
            <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">HIPAA Notice</a>
          </span> */}
        </div>
      </div>
    </footer>
  )
}
