import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <div className="notfound">
        <div className="code">404</div>
        <h1 style={{ marginTop: 20, marginBottom: 16 }}>Page not found</h1>
        <p style={{ color: 'var(--grey-500)', marginBottom: 34, maxWidth: 440 }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </>
  )
}
