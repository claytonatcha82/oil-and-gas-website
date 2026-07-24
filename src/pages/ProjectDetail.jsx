import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { IMG } from '../data/images.js'
import { PROJECTS } from '../data/content.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = PROJECTS.find((p) => p.id === id)
  const [lbIndex, setLbIndex] = useState(null)

  if (!project) return <Navigate to="/projects" replace />

  const items = project.gallery.map((key) => ({ src: IMG[key], alt: project.title }))

  return (
    <>
      <SEO
        title={project.title}
        description={project.summary}
        path={`/projects/${project.id}`}
        image={IMG[project.img]}
      />

      <section className="page-header texture">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/projects">Projects</Link> / <span>{project.title}</span>
          </div>
          <div className="eyebrow">{project.tag.toUpperCase()}</div>
          <h1>{project.title}</h1>
          <p>{project.client} — {project.location}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap detail-grid">
          <Reveal className="detail-body">
            <img
              src={IMG[project.img]}
              alt={project.title}
              style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }}
              onClick={() => setLbIndex(0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLbIndex(0)}
              aria-label="Open project image gallery"
            />
            <h2>Project summary</h2>
            <p>{project.summary}</p>
            <h2>Gallery</h2>
            <div className="gallery-strip">
              {project.gallery.map((key, i) => (
                <img
                  key={key}
                  src={IMG[key]}
                  alt={project.title}
                  loading="lazy"
                  onClick={() => setLbIndex(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLbIndex(i)}
                />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="side-card">
              <h5>Project details</h5>
              <ul className="side-list">
                <li><span>Client</span>{project.client}</li>
                <li><span>Location</span>{project.location}</li>
                <li><span>Services</span>{project.services.join(', ')}</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <Lightbox
        items={items}
        index={lbIndex}
        onClose={() => setLbIndex(null)}
        onNav={(dir) => setLbIndex((cur) => (cur + dir + items.length) % items.length)}
      />
    </>
  )
}
