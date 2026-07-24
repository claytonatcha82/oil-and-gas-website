import { Link } from 'react-router-dom'
import { IMG } from '../data/images.js'
import { DIRECTOR } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src={IMG.logo} alt="Oil and Gas Construction logo" width="42" height="42" loading="lazy" />
              <span>Oil &amp; Gas Construction</span>
            </div>
            <p style={{ color: 'var(--grey-500)', fontSize: 14.5, lineHeight: 1.7, maxWidth: 300 }}>
              Total turn-key mechanical engineering solutions across the oil &amp; gas, petrochemical, marine,
              mining and industrial sectors — proudly South African, operating across Africa and abroad.
            </p>
            
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/gallery">Gallery</Link>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <Link to="/services/engineering-design">Engineering &amp; Design</Link>
            <Link to="/services/storage-tanks">Storage Tanks</Link>
            <Link to="/services/pipeline-fabrication">Pipeline Fabrication</Link>
            <Link to="/services/ship-repairs">Ship Repairs</Link>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <p>KwaZulu-Natal, South Africa</p>
            <a href={`mailto:${DIRECTOR.email}`}>{DIRECTOR.email}</a>
            <a href={`tel:${DIRECTOR.phoneHref}`}>{DIRECTOR.phone}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Oil and Gas Construction (Pty) Ltd. All rights reserved.</span>
          <span className="mono">KZN, SOUTH AFRICA</span>
        </div>
      </div>
    </footer>
  )
}
