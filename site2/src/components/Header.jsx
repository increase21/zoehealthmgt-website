export default function Header() {
  return (
    <>
      <div className="announcement" role="complementary">
        <div className="container">
          <span>
             Premium medical travel coordination in the DMV
          </span>
          <span>
            <a href="tel:+12025550130" style={{ color: 'inherit' }}>+1 (202) 555-0130</a>
            {' · '}
            <a href="mailto:care@zoehealthmanagement.com" style={{ color: 'inherit' }}>
              care@zoehealthmanagement.com
            </a>
          </span>
        </div>
      </div>
      <header className="site-header" role="banner">
        <div className="container">
          <a href="#" className="logo-wrap" aria-label="Zoe Health Management Systems home">
            <span className="logo-badge">
              <img src="/zoehealth-logo.png" alt="Zoe Health Management Systems logo" width="48" height="48" />
            </span>
            <span className="text-logo">
              Zoe Health
              <small>Management Systems</small>
            </span>
          </a>
          <nav aria-label="Primary">
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <a href="#contact" className="header-cta">Book a Consultation</a>
        </div>
      </header>
    </>
  )
}
