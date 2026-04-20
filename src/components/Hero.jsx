export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">Medical Travel & Coordinated Care</span>
          <h1 id="hero-title">
            Supporting Your Journey to <span className="accent">Better Health</span>
          </h1>
          <p>
            Zoe Health Management Systems delivers comprehensive travel, treatment, and recovery
            coordination across the Washington DC, Maryland, and Virginia corridor, connecting
            patients to the nation’s leading tertiary healthcare institutions.
          </p>
          <div className="btn-row">
            <a href="#contact" className="btn btn-primary">Request a Consultation</a>
            <a href="#services" className="btn btn-ghost">Explore Services</a>
          </div>
          <dl className="hero-stats" aria-label="Key highlights">
            <div>
              <dt>End-to-End</dt>
              <dd>Care Coordination</dd>
            </div>
            <div>
              <dt>DMV</dt>
              <dd>Regional Reach</dd>
            </div>
            <div>
              <dt>24/7</dt>
              <dd>Patient Advocacy</dd>
            </div>
          </dl>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=80"
            alt="Male doctor conducting a patient consultation"
            width="1000"
            height="1200"
            fetchPriority="high"
            decoding="async"
            style={{ transform: 'scaleX(-1)' }}
          />
          <div className="hero-media-card" aria-hidden="true">
            <strong>Johns Hopkins · UMMS · Children’s National</strong>
            <span>Partner Health Systems</span>
          </div>
        </div>
      </div>
    </section>
  )
}
