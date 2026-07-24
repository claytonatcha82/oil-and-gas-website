import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { IMG } from '../data/images.js'
import { PROJECTS } from '../data/content.js'

export default function Projects() {
  return (
    <>
      <SEO
        title="Featured Projects"
        description="A selection of recent turnkey mechanical engineering projects delivered by Oil and Gas Construction (Pty) Ltd across Namibia and South Africa."
        path="/projects"
      />

      <section className="page-header texture">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Projects</div>
          <div className="eyebrow">PROJECT PORTFOLIO</div>
          <h1>Engineering Experience</h1>
          <p>Our portfolio reflects projects where our team has provided engineering
      consultation, technical advisory and specialist mechanical engineering
      expertise. These projects demonstrate the breadth of our experience
      across multiple industries and regions. The projects shown represent our
      consulting and engineering involvement and do not necessarily indicate
      that Oil and Gas Construction (Pty) Ltd acted as the principal
      construction contractor.</p>
        </div>
      </section>

     <section className="section">
  <div className="wrap">
    <div className="proj-portfolio">
      {PROJECTS.map((p, i) => (
        <Reveal key={p.id}>
          <div className={`proj-showcase${i % 2 === 1 ? ' reverse' : ''}`}>
            
            <div className="proj-showcase-img">
              <span className="proj-showcase-num mono">{p.tag}</span>
              <img src={IMG[p.img]} alt={p.title} loading="lazy" />
            </div>

            <div className="proj-showcase-copy">
              <span className="proj-tag-mono">{p.client}</span>

              <div className="project-badge">
                CONSULTING SERVICES
              </div>

              <h3>{p.title}</h3>

              <div className="proj-showcase-meta">
                <span>
                  <Icon name="MapPin" size={14} /> {p.location}
                </span>
                <span>
                  <Icon name="Wrench" size={14} /> {p.services[0]}
                </span>
              </div>

              <p className="summary">{p.summary}</p>

              <Link
                to={`/projects/${p.id}`}
                className="btn btn-outline btn-sm"
              >
                Read Case Study →
              </Link>
            </div>

          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
    </>
  )
}