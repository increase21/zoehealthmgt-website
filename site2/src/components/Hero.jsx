export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div>
          <span className="eyebrow">Medical Concierge · DMV</span>
          <h1 id="hero-title">
            Your journey. <em>Coordinated</em> with uncompromising care.
          </h1>
          <p className="lead">
            Zoe Health Management Systems is your trusted, on-ground partner for medical travel,
            treatment, and recovery, connecting patients to the nation’s leading tertiary
            healthcare institutions across Washington DC, Maryland, and Virginia.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-gold">
              Book a Consultation <span className="arrow">→</span>
            </a>
            <a href="#services" className="btn btn-outline">Our Process</a>
          </div>
          <div className="hero-proof">
            <div className="avatars" aria-hidden="true">
              <span>JH</span>
              <span>UM</span>
              <span>CN</span>
            </div>
            <div>
              <strong>Trusted by leading DMV health systems</strong>
              Johns Hopkins · UMMS · Children’s National
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-media-frame">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80"
              alt="Compassionate healthcare professional attending to a patient"
              width="1000"
              height="1250"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-badge-top">24/7 Concierge</div>
          {/* <div className="hero-float-card">
            <div className="label"><span className="dot"></span>On Duty Now</div>
            <strong>Patient advocates available around the clock</strong>
          </div> */}
        </div>
      </div>
    </section>
  )
}
