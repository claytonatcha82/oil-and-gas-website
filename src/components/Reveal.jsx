import useReveal from '../hooks/useReveal.js'

/**
 * Wraps any block of content and fades/slides it in the first time it
 * scrolls into the viewport. Use `scale` for the subtler zoom-in variant
 * (used on the large about-page feature image).
 */
export default function Reveal({ as: Tag = 'div', scale = false, className = '', style, children }) {
  const [ref, inView] = useReveal()
  const base = scale ? 'reveal-scale' : 'reveal'
  return (
    <Tag ref={ref} className={`${base}${inView ? ' in' : ''}${className ? ' ' + className : ''}`} style={style}>
      {children}
    </Tag>
  )
}
