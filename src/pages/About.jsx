import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Oil and Gas Construction (Pty) Ltd — a proudly South African turnkey mechanical engineering contractor based in KwaZulu-Natal, delivering across Africa and abroad."
        path="/about"
      />

      <section className="page-header texture">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / About</div>
          <div className="eyebrow">COMPANY PROFILE</div>
          <h1>About Oil and Gas Construction</h1>
          <p>A proudly South African turnkey mechanical engineering contractor, based in KwaZulu-Natal — home to South Africa&rsquo;s busiest port city.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap detail-grid">
          <Reveal className="detail-body">
            <h2>Company overview</h2>
            <p>Oil and Gas Construction (Pty) Ltd was founded by a motivated and experienced individual, David Atcha, dedicated to servicing the mechanical engineering sector. Since then, the company has grown steadily, building a strong client base and a capable operational team.</p>
            <p>In response to the economic challenges of recent years, and guided by a deliberate strategic growth plan, the company diversified into SMEIP (Supply, Manufacture, Engineering, Installation and Procurement) and turnkey ventures, broadening its reach across multiple market segments of the mechanical engineering sector.</p>
            <p>We specialise in the manufacture, fabrication, repair, maintenance and inspection of equipment, currently servicing oil and gas, petrochemical processing, marine, civil, mining, paper, sugar, water &amp; sanitation, and food &amp; beverage industries.</p>

            <h2>Our capabilities</h2>
            <p>Based in KwaZulu-Natal, we hold strategic access to the region&rsquo;s industrial, marine, and logistics corridors. We maintain in-house safety, project management, estimating, procurement, and quality departments, ensuring every project is delivered within agreed time frames and to assured quality standards.</p>
            <p>Our associated workshop facilities are equipped for fabrication, welding, machining, grit blasting, and corrosion protection, while our site teams are trained and suitably qualified to deliver end products that meet scope, specification and quality standards.</p>

            <h2>International project bidding &amp; delivery</h2>
            <p>Our management team actively participates in international business development and project execution, travelling across borders to identify opportunities, submit competitive bids, and oversee successful project delivery on behalf of our consultant clients — upholding project quality standards and global best practice.</p>
          </Reveal>

          <Reveal>
            <div className="side-card">
              <h5>Mission</h5>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 14.5, lineHeight: 1.65 }}>
                To provide a world-class service to our clients, driven to exceed expectations so that our
                workmanship speaks for itself and future projects are entrusted to us.
              </p>
            </div>
            <div className="side-card">
              <h5>Vision</h5>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 14.5, lineHeight: 1.65 }}>
                To be recognised as a leading total turn-key mechanical engineering partner across Africa and abroad.
              </p>
            </div>
            <div className="side-card">
              <h5>Value Proposition</h5>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 14.5, lineHeight: 1.65 }}>
                Safety, Quality, Honesty, Trust, Respect, Efficiency and Service Excellence underpin everything we do.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
