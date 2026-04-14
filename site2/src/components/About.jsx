const commitments = [
  'Accountable case management',
  'Discretion and confidentiality',
  'Culturally aware care',
  'Continuous family updates',
  'Trusted hospital liaisons',
  '24/7 coordinator access',
]

export default function About() {
  return (
    <section id="about" className="about light-section" aria-labelledby="about-title">
      <div className="container">
        <div className="about-content">
          <span className="eyebrow">About Zoe Health</span>
          <h2 id="about-title">
            Trusted partners in <em>every step</em> of the medical journey.
          </h2>
          <blockquote className="about-quote">
            “To deliver comprehensive travel, treatment, and recovery coordination for every
            patient we serve, from the first consultation to complete recovery.”
          </blockquote>
          <p>
            Operating within the Washington DC, Maryland, and Virginia corridor, Zoe Health
            Management Systems is strategically positioned to facilitate structured access to
            leading tertiary healthcare institutions and nationally ranked specialty centers.
          </p>
          <p>
            Our role is to serve as a trusted, on-ground coordination partner, ensuring that
            beneficiaries receive seamless, accountable, and well-managed care.
          </p>

          <ul className="about-checks" aria-label="Our commitments">
            {commitments.map((c) => (
              <li key={c}>
                <span className="check" aria-hidden="true">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-media">
          <img
            src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80"
            alt="Doctor conversing warmly with a patient during consultation"
            loading="lazy"
            width="900"
            height="1125"
          />
        </div>
      </div>
    </section>
  )
}
