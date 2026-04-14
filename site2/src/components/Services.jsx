const phases = [
  {
    num: 'PHASE 01',
    title: 'Pre-Arrival & Travel',
    sub: 'Planning Every Detail',
    items: [
      'Specialist sourcing & second-opinion facilitation',
      'Appointment scheduling & treatment planning',
      'Visa documentation coordination',
      'International ticketing & travel arrangements',
    ],
  },
  {
    num: 'PHASE 02',
    title: 'Arrival & Treatment',
    sub: 'On-Ground, On-Call',
    items: [
      'Airport reception & executive transportation',
      'Secured short- or long-term housing',
      'Hospital liaison & appointment management',
      'Medical bill coordination & settlement',
      'Interpretation & patient advocacy',
    ],
  },
  {
    num: 'PHASE 03',
    title: 'Recovery & Follow-Up',
    sub: 'A Full, Dignified Return',
    items: [
      'Post-discharge care coordination',
      'Home-based recovery support',
      'Medication pickup & pharmacy liaison',
      'Nutritional & culturally appropriate meals',
      'Continuous reporting to designated officers',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="services light-section" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Our Process</span>
          <h2 id="services-title">
            A <em>complete continuum</em> of coordinated care
          </h2>
          <p>
            Three interconnected phases delivered with accountability, discretion, and genuine
            human care across every step of the medical journey.
          </p>
        </header>
        <div className="timeline">
          {phases.map((p) => (
            <article className="phase" key={p.num}>
              <div className="num">{p.num}</div>
              <h3>{p.title}</h3>
              <p className="sub">{p.sub}</p>
              <ul>
                {p.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
