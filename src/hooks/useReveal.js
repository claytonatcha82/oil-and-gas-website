import { useEffect, useRef, useState } from 'react'

/**
 * Adds a fade/translate-in reveal effect the first time an element scrolls
 * into view. Returns a ref to attach and a boolean for whether it's visible.
 * Respects prefers-reduced-motion implicitly (CSS handles the reduced case).
 */
export default function useReveal(options = { threshold: 0.12 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      })
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView]
}
