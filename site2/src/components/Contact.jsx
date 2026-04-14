import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    console.log('Contact submission:', data)
    setStatus('Thank you. A coordinator will reach out within one business day.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <aside className="contact-info-col">
          <span className="eyebrow">Get in Touch</span>
          <h3>
            Begin the <em>conversation</em>.
          </h3>
          <p>
            Whether you represent a patient, a sponsoring organization, or a designated CBN
            officer, we’d be honored to walk alongside you on this journey.
          </p>
          <dl>
            <dt>Service Area</dt>
            <dd>Washington DC · Maryland · Virginia</dd>
            <dt>Phone</dt>
            <dd><a href="tel:+12025550130">+1 (202) 555-0130</a></dd>
            <dt>Email</dt>
            <dd><a href="mailto:care@zoehealthmanagement.com">care@zoehealthmanagement.com</a></dd>
            <dt>Hours</dt>
            <dd>Monday – Friday, 8:00 AM – 6:00 PM ET</dd>
          </dl>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-title" noValidate>
          <h2 id="contact-title" className="serif" style={{ color: 'white', fontSize: '2rem', marginBottom: '2rem' }}>
            Request a Consultation
          </h2>
          <div className="row">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" required autoComplete="given-name" placeholder="Jane" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" required autoComplete="family-name" placeholder="Doe" />
            </div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@example.com" />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
          <label htmlFor="company">Company / Affiliation</label>
          <input id="company" name="company" type="text" autoComplete="organization" placeholder="Organization name" />
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message" rows="3" placeholder="Tell us a little about your needs..." />
          <button type="submit">Send Message →</button>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </div>
    </section>
  )
}
