import { useEffect } from 'react'

const SITE_URL = 'https://oilandgasconstruction.com'
const SITE_NAME = 'Oil and Gas Construction (Pty) Ltd'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

function setMeta(attr, key, value) {
  if (!value) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets a unique document title + meta description + Open Graph / Twitter
 * card tags for the current route. Rendered once near the top of each page.
 * No external dependency (react-helmet-async) required — plain useEffect
 * keeps the bundle smaller and avoids version-mismatch issues.
 */
export default function SEO({ title, description, path = '/', image }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const url = `${SITE_URL}${path}`
    const ogImage = image || DEFAULT_IMAGE

    document.title = fullTitle
    setMeta('name', 'description', description)
    setCanonical(url)

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', ogImage)

    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)
  }, [title, description, path, image])

  return null
}
