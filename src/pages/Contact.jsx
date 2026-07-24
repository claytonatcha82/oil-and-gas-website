import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { DIRECTOR } from '../data/content.js'

const initialForm = { name: '', company: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null) // null | 'success'

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

 async function handleSubmit(e) {
  e.preventDefault()

  try {
    await emailjs.send(
      'service_j7rllch',
      'template_842dqpd',
      {
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      },
      'spbN4yKCWZOjDEeSc'
    )

    setStatus('success')
    setForm(initialForm)

  } catch (error) {
    console.error(error)
    alert('Sorry, something went wrong. Please try again.')
  }
}

  return (<>
      <SEO
  title="Contact Us"
  description="Contact Oil and Gas Construction (Pty) Ltd — speak directly with our director about your mechanical engineering project, or send through your scope of work."
  path="/contact"
/>

<section className="page-header texture">
  <div className="wrap">
    <div className="breadcrumb">
      <Link to="/">Home</Link> / Contact
    </div>
    <div className="eyebrow">GET IN TOUCH</div>
    <h1>Contact us</h1>
    <p>Reach out to our director directly, or send through your project scope below.</p>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="contact-grid">

      <Reveal>
        <form onSubmit={handleSubmit} noValidate>

          <div className="field">
            <label htmlFor="cName">Name</label>
            <input
              id="cName"
              required
              placeholder="Your full name"
              value={form.name}
              onChange={update('name')}
            />
          </div>

          <div className="field">
            <label htmlFor="cCompany">Company</label>
            <input
              id="cCompany"
              placeholder="Company name"
              value={form.company}
              onChange={update('company')}
            />
          </div>

          <div className="field">
            <label htmlFor="cEmail">Email</label>
            <input
              id="cEmail"
              type="email"
              required
              placeholder="you@company.com"
              value={form.email}
              onChange={update('email')}
            />
          </div>

          <div className="field">
            <label htmlFor="cPhone">Phone</label>
            <input
              id="cPhone"
              type="tel"
              placeholder="+27..."
              value={form.phone}
              onChange={update('phone')}
            />
          </div>

          <div className="field">
            <label htmlFor="service">Service Required</label>
            <input
              id="service"
              type="text"
              placeholder="Please describe the service you require"
              value={form.service}
              onChange={update('service')}
            />
          </div>

          <div className="field">
            <label htmlFor="cMsg">Project Scope</label>
            <textarea
              id="cMsg"
              required
              placeholder="Tell us about your project scope, location and timeline..."
              value={form.message}
              onChange={update('message')}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Send Message
          </button>

          <div
            className={`form-msg${status === 'success' ? ' show' : ''}`}
            role="status"
          >
            Thank you — your message has been received. Our team will respond shortly.
          </div>

        </form>
      </Reveal>

      <Reveal>
        <div className="director-card">
          
          <div className="director-role">{DIRECTOR.role}</div>
          <div className="director-name">{DIRECTOR.name}</div>
          <div className="director-company">{DIRECTOR.company}</div>

          <div className="director-line">
            <span className="ico">
              <Phone size={16} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <a href={`tel:${DIRECTOR.phoneHref}`}>{DIRECTOR.phone}</a>
          </div>

          <div className="director-line">
            <span className="ico">
              <Mail size={16} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <a href={`mailto:${DIRECTOR.email}`}>{DIRECTOR.email}</a>
          </div>
        </div>
           </Reveal>

    </div>
  </div>
</section>

    </>
  )
}
