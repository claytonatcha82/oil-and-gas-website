import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { SERVICES } from '../data/content.js'

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Twenty-two turnkey mechanical engineering disciplines — engineering & design, fabrication, pipeline installation, storage tanks, ship repairs, welding, NDT, and more."
        path="/services"
      />

      <section className="page-header texture">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Services</div>
          <div className="eyebrow">AREAS OF EXPERTISE</div>
          <h1>Our services</h1>
          <p>Twenty-two disciplines delivered by one accountable turnkey team — select a service to view full scope details.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 90 }}>
        <div className="wrap">
          <div className="svc-card-grid">
            {SERVICES.map((s) => (
              <Reveal key={s.id}>
                <Link to={`/services/${s.id}`} className="svc-card" style={{ textAlign: 'left' }}>
                  <div className="svc-card-icon"><Icon name={s.icon} size={26} /></div>
                  <h4>{s.title}</h4>
                  <p>{s.short}</p>
                  <span className="svc-card-link">Learn More <Icon name="ArrowRight" size={15} strokeWidth={2.2} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
