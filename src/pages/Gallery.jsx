import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { IMG } from '../data/images.js'
import { GALLERY } from '../data/content.js'

export default function Gallery() {
  const categories = useMemo(() => ['All', ...new Set(GALLERY.map((g) => g.cat))], [])
  const [active, setActive] = useState('All')
  const [lbIndex, setLbIndex] = useState(null)

  const items = active === 'All' ? GALLERY : GALLERY.filter((g) => g.cat === active)
  const lightboxItems = items.map((g) => ({ src: IMG[g.img], alt: g.cap }))

  return (
    <>
      <SEO
        title="Project Gallery"
        description="Site photography from Oil and Gas Construction (Pty) Ltd projects across storage tanks, pipelines, structural steel, marine and mechanical fabrication."
        path="/gallery"
      />

      <section className="page-header texture">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Gallery</div>
          <div className="eyebrow">SITE PHOTOGRAPHY</div>
          <h1>Project gallery</h1>
          <p>Browse our project photography by category, or view the full collection.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="gal-filters">
            {categories.map((c) => (
              <button
                key={c}
                className={`gal-filter${c === active ? ' active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="gal-masonry">
          {items.map((g, i) => (
            <button className="gal-item" key={`${g.img}-${g.cat}`} onClick={() => setLbIndex(i)}>
              <img src={IMG[g.img]} alt={g.cap} loading="lazy" />
              <span className="gal-cap">{g.cap}</span>
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        items={lightboxItems}
        index={lbIndex}
        onClose={() => setLbIndex(null)}
        onNav={(dir) => setLbIndex((cur) => (cur + dir + lightboxItems.length) % lightboxItems.length)}
      />
    </>
  )
}
