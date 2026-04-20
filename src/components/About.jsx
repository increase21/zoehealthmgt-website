export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-media">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80"
              alt="Healthcare team coordinating patient care"
              loading="lazy"
              width="900"
              height="1100"
            />
          </div>
          <div className="about-quote-card">
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true">
              <path d="M0 22V12C0 5.4 4.4 0.8 11 0V4.8C7.2 5.6 5.2 8.4 5.2 12H11V22H0ZM17 22V12C17 5.4 21.4 0.8 28 0V4.8C24.2 5.6 22.2 8.4 22.2 12H28V22H17Z" fill="currentColor"/>
            </svg>
            <p>
              To deliver comprehensive travel, treatment, and recovery coordination for every
              patient we serve — from the first consultation to complete recovery.
            </p>
            <span>— Our Vision</span>
          </div>
        </div>

        <div className="about-content">
          <span className="eyebrow">About Us</span>
          <h2 id="about-title">Coordinated Care, <br />Grounded in Trust</h2>
          <p>
            Operating within the Washington DC–Maryland–Virginia corridor, Zoe Health Management
            Systems is strategically positioned to facilitate structured access to leading
            tertiary healthcare institutions and nationally ranked specialty centers.
          </p>
          <p>
            Our role is to serve as a trusted, on-ground coordination partner, ensuring that
            beneficiaries receive seamless, accountable, and well-managed care throughout their
            medical journey.
          </p>

          <ul className="about-pillars" aria-label="Our commitments">
            <li>
              <span className="pillar-icon" aria-hidden="true">🤝</span>
              <div>
                <strong>Trusted Partner</strong>
                <p>On-ground coordination from first consultation through recovery.</p>
              </div>
            </li>
            <li>
              <span className="pillar-icon" aria-hidden="true">📋</span>
              <div>
                <strong>Accountable Care</strong>
                <p>Continuous reporting and structured case management.</p>
              </div>
            </li>
            <li>
              <span className="pillar-icon" aria-hidden="true">🌍</span>
              <div>
                <strong>DMV Network</strong>
                <p>Direct access to the region’s top tertiary health systems.</p>
              </div>
            </li>
          </ul>

          <div id="partners" className="partners" aria-label="Hospital partners">
            <span className="partner-pill">Johns Hopkins Health System</span>
            <span className="partner-pill">University of Maryland Medical System</span>
            <span className="partner-pill">Children’s National Hospital</span>
            <span className="partner-pill">Specialty Centers & Physician Networks</span>
          </div>
        </div>
      </div>
    </section>
  )
}
