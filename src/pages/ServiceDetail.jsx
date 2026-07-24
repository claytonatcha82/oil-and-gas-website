import { Link, useParams, Navigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { SERVICES } from '../data/content.js'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = SERVICES.find((s) => s.id === id)

  if (!service) return <Navigate to="/services" replace />

  const related = (service.related || [])
    .map((rid) => SERVICES.find((s) => s.id === rid))
    .filter(Boolean)

  return (
    <>
      <SEO
        title={service.title}
        description={service.short}
        path={`/services/${service.id}`}
      />

      <section className="page-header texture">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>{service.title}</span>
          </div>
          <div className="eyebrow">SERVICE / {service.id.toUpperCase().replace(/-/g, ' ')}</div>
          <h1>{service.title}</h1>
          <p>{service.short}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap detail-grid">
          <Reveal className="detail-body">
            {service.body.map((para, i) => <p key={i}>{para}</p>)}
          </Reveal>

          <Reveal>
            <div className="side-card">
              <h5>Request this service</h5>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 14, marginBottom: 20 }}>
                Send us your scope of work and we&rsquo;ll respond with a competitive quote.
              </p>
              <Link to="/contact" className="btn btn-primary btn-block">Request a Quote</Link>
            </div>

            {related.length > 0 && (
              <div className="side-card">
                <h5>Related</h5>
                <ul className="side-list">
                  {related.map((r) => (
                    <li key={r.id}>
                      <Link to={`/services/${r.id}`} style={{ color: 'rgba(255,255,255,0.9)' }}>{r.title}</Link>
                      <span><Icon name={r.icon} size={16} /></span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
