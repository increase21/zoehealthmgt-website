const stats = [
  { num: '100%', label: 'End-to-End Coordination' },
  { num: '24/7', label: 'Patient Advocacy' },
  { num: '03', label: 'Tertiary Partners' },
  { num: 'DMV', label: 'Regional Coverage' },
]

export default function Stats() {
  return (
    <section className="stats-band" aria-label="Key metrics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
