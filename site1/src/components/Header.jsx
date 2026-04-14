export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container nav">
        <a href="#" className="brand" aria-label="Zoe Health Management Systems home">
          <img src="/zoehealth-logo.png" alt="Zoe Health Management Systems logo" width="140" height="44" />
        </a>
        <nav aria-label="Primary">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="#contact" className="cta">Get Started</a>
      </div>
    </header>
  )
}
