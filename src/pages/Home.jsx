import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import StatCounter from '../components/StatCounter.jsx'
import useReveal from '../hooks/useReveal.js'
import { IMG } from '../data/images.js'
import {
  INDUSTRIES, SERVICES, FEATURED_SERVICE_IDS, PROJECTS, WHY, SAFETY, STATS, VALUES,
} from '../data/content.js'

export default function Home() {
  const [statsRef, statsInView] = useReveal({ threshold: 0.4 })
  const featuredServices = FEATURED_SERVICE_IDS.map((id) => SERVICES.find((s) => s.id === id)).filter(Boolean)
  const featuredProjects = PROJECTS.slice(0, 3)

  return (
    <>
      <SEO
        title="Engineering Solutions Across Africa"
        description="Oil and Gas Construction (Pty) Ltd delivers total turn-key mechanical engineering solutions across the oil & gas, petrochemical, marine, mining and industrial sectors throughout Africa."
        path="/"
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src={IMG.proj3} alt="" aria-hidden="true" />
        </div>
        <div className="hero-content">
          <div className="hero-tag">KwaZulu-Natal, South Africa — Turnkey Mechanical EPC</div>
          <h1>ENGINEERING SOLUTIONS<span>ACROSS AFRICA</span></h1>
          <p className="lead">
            Delivering world-class turnkey mechanical engineering solutions for the oil &amp; gas, petrochemical,
            marine, mining, civil and industrial sectors.
          </p>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
            <Link to="/projects" className="btn btn-outline">View Projects</Link>
          </div>
          <div className="hero-stats" ref={statsRef}>
            {STATS.map((s) => (
              <StatCounter key={s.label} count={s.count} label={s.label} noPlus={s.noPlus} trigger={statsInView} />
            ))}
          </div>
        </div>
        <div className="scroll-cue">
          <span className="mono" style={{ fontSize: 10.5, letterSpacing: '.15em', color: 'rgba(255,255,255,0.6)' }}>SCROLL</span>
          <span className="line" />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section texture">
        <div className="wrap">
          <Reveal className="about-intro">
            <div className="eyebrow">ABOUT US</div>
            <h2>Total turn-key mechanical engineering, built on trust</h2>
            <p>
              Oil and Gas Construction (Pty) Ltd is a proudly South African company delivering total turn-key
              mechanical engineering solutions across the oil &amp; gas, petrochemical, marine, civil, mining and
              industrial sectors. We combine in-house technical expertise, qualified site teams, and an established
              supplier network to deliver projects safely, on time, and to specification.
            </p>
          </Reveal>

          <Reveal className="mvs-grid">
            <div className="mvs-card"><div className="mvs-label">Mission</div><p>World-class service driven to exceed expectations, so our workmanship speaks for itself.</p></div>
            <div className="mvs-card"><div className="mvs-label">Vision</div><p>Recognised as a leading total turn-key mechanical engineering partner across Africa and abroad.</p></div>
            <div className="mvs-card"><div className="mvs-label">Strategic Intent</div><p>Grow into the preferred supplier for planned developments throughout Africa and abroad.</p></div>
          </Reveal>

          <Reveal scale className="about-feature-img">
            <img src={IMG.proj3} alt="Structural steel gantry erection at Tsumeb Depot" loading="lazy" />
          </Reveal>
          <div className="about-feature-cap">
            <span className="mono">Tsumeb Depot — Structural Gantry Erection</span>
            <Link to="/about" className="btn btn-outline btn-sm">Learn More →</Link>
          </div>

          <div className="value-strip">
            {VALUES.map((v) => (
              <div className="value-item" key={v}><b>{v}</b>{
                { Safety: 'First', Quality: 'Assured', Honesty: 'Always', Trust: 'Earned', Respect: 'Mutual', Efficiency: 'Driven', Excellence: 'Delivered' }[v]
              }</div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section bg-light on-light texture-light">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow on-light">INDUSTRIES WE SERVE</div>
            <h2>Sectors we deliver for</h2>
            <p>From coastal depots to inland processing plants, our teams are equipped to work across the full spectrum of heavy industry.</p>
          </Reveal>
          <Reveal as="div" className="grid-4">
            {INDUSTRIES.map((i) => (
              <div className="ind-card" key={i.title}>
                <div className="ind-icon"><Icon name={i.icon} size={26} /></div>
                <h4>{i.title}</h4>
                <p>{i.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section bg-deep">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">SERVICES</div>
            <h2>Our areas of expertise</h2>
            <p>Twenty-two disciplines, one accountable turnkey team — from cost estimating and engineering design through to fabrication, installation and maintenance.</p>
          </Reveal>
          <div className="svc-card-grid">
            {featuredServices.map((s) => (
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
          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ marginBottom: 64 }}>
          <Reveal className="section-head">
            <div className="eyebrow">FEATURED PROJECTS</div>
            <h2>Delivered across the region</h2>
            <p>A selection of recent projects demonstrating our reach and capability across Southern Africa.</p>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="proj-portfolio" style={{ gap: 90 }}>
            {featuredProjects.map((p, i) => (
              <Reveal key={p.id}>
                <div className={`proj-showcase${i % 2 === 1 ? ' reverse' : ''}`}>
                  <div className="proj-showcase-img">
                    <span className="proj-showcase-num mono">{p.tag}</span>
                    <img src={IMG[p.img]} alt={p.title} loading="lazy" />
                  </div>
                  <div className="proj-showcase-copy">
                    <span className="proj-tag-mono">{p.client}</span>
                    <h3>{p.title}</h3>
                    <div className="proj-showcase-meta">
                      <span><Icon name="MapPin" size={14} /> {p.location}</span>
                    </div>
                    <p className="summary">{p.summary}</p>
                    <Link to={`/projects/${p.id}`} className="btn btn-outline btn-sm">Read Case Study →</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 70, paddingBottom: 150 }}>
            <Link to="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head center" style={{ marginBottom: 60 }}>
            <div className="eyebrow center">WHY CHOOSE US</div>
            <h2>Why clients trust us on-site</h2>
          </Reveal>
          <Reveal className="feat-grid">
            {WHY.map((w) => (
              <div className="feat-card" key={w.title}>
                <div className="feat-icon"><Icon name={w.icon} size={22} /></div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SAFETY & QUALITY */}
      <section className="section bg-light on-light texture-light">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow on-light">SAFETY &amp; QUALITY</div>
            <h2>Safety and quality, non-negotiable</h2>
            <p>In-house safety, quality assurance and quality control departments oversee every stage of delivery.</p>
          </Reveal>
          <Reveal className="grid-4">
            {SAFETY.map((s) => (
              <div className="ind-card" key={s.title}>
                <div className="ind-icon"><Icon name={s.icon} size={26} /></div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner texture">
        <Reveal as="div" className="wrap">
          <h2>Have a project in mind?</h2>
          <p>Talk to our director directly, or send through your project scope for a competitive quote.</p>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
            
          </div>
        </Reveal>
      </section>
    </>
  )
}

// Small helper kept local to this page — swap for `true` once a real PDF is
// placed at /public/oil-and-gas-construction-company-profile.pdf
function ProfileFileExists() {
  return false
}
