const services = [
  {
    icon: '✈️',
    title: 'Pre-Arrival & Travel Coordination',
    items: [
      'Specialist sourcing & second-opinion facilitation',
      'Appointment scheduling & treatment planning',
      'Visa documentation coordination support',
      'International ticketing & travel arrangements',
    ],
  },
  {
    icon: '🏥',
    title: 'Arrival & Treatment Phase',
    items: [
      'Airport reception & executive transportation',
      'Short- or long-term housing arrangements',
      'Hospital liaison & appointment management',
      'Medical bill coordination & structured settlement',
      'Interpretation & patient advocacy',
    ],
  },
  {
    icon: '💚',
    title: 'Post-Treatment & Recovery',
    items: [
      'Post-discharge care coordination',
      'Home-based recovery support',
      'Medication pickup & pharmacy coordination',
      'Culturally appropriate meal preparation',
      'Follow-up appointment management',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title">
      <div className="container">
        <header className="section-title">
          <span>What We Do</span>
          <h2 id="services-title">End-to-End Patient Coordination</h2>
          <p>
            One trusted, on-ground partner through every stage of the medical journey so patients
            and families can focus on healing.
          </p>
        </header>
        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.title}>
              <div className="icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
