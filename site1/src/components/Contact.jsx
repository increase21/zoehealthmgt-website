import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    console.log('Contact submission:', data)
    setStatus('Thank you — we will be in touch shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-title">
          <span>Contact Us</span>
          <h2 id="contact-title">Start Your Coordinated Care Journey</h2>
          <p>Share a few details and our coordination team will reach out to discuss next steps.</p>
        </header>
        <div className="contact-wrap">
          <form onSubmit={handleSubmit} aria-label="Contact form" noValidate>
            <div className="row">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" required autoComplete="given-name" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" required autoComplete="family-name" />
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" />
              </div>
            </div>
            <label htmlFor="company">Company / Affiliation</label>
            <input id="company" name="company" type="text" autoComplete="organization" />
            <label htmlFor="message">How can we help?</label>
            <textarea id="message" name="message" rows="4" />
            <button type="submit">Send Message</button>
            {status && <p className="form-status" role="status">{status}</p>}
          </form>
          <aside>
            <h3>Get in touch</h3>
            <p>
              Our coordinators are available to support beneficiaries, sponsors, and CBN-designated
              officers throughout the medical journey.
            </p>
            <ul className="contact-info">
              <li>
                <span aria-hidden="true">📍</span>
                <div>
                  <strong>Service Area</strong>
                  Washington DC · Maryland · Virginia
                </div>
              </li>
              <li>
                <span aria-hidden="true">✉️</span>
                <div>
                  <strong>Email</strong>
                  care@zoehealthmanagement.com
                </div>
              </li>
              <li>
                <span aria-hidden="true">📞</span>
                <div>
                  <strong>Phone</strong>
                  +1 (202) 555-0130
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
