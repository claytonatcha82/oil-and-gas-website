import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { IMG } from '../data/images.js'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav-inner">
        <NavLink to="/" className="nav-logo">
          <img src={IMG.logo} alt="Oil and Gas Construction logo" width="38" height="38" />
          <span>Oil &amp; Gas Construction</span>
        </NavLink>

        <div className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-cta">
          <NavLink to="/contact" className="btn btn-outline btn-sm">Request a Quote</NavLink>
          <button
            className="nav-burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu size={20} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  )
}
