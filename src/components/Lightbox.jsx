import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Full-screen image viewer. `items` is an array of { src, alt }, `index`
 * is the currently shown item. Pass `onClose`/`onNav` to control state from
 * the parent (Gallery / ProjectDetail keep the index in their own state).
 */
export default function Lightbox({ items, index, onClose, onNav }) {
  const isOpen = index !== null && index !== undefined

  const handleKey = useCallback((e) => {
    if (!isOpen) return
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onNav(-1)
    if (e.key === 'ArrowRight') onNav(1)
  }, [isOpen, onClose, onNav])

  useEffect(() => {
    if (!isOpen) return
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKey])

  if (!isOpen) return null
  const item = items[index]

  return (
    <div className="lightbox show" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button className="lightbox-close" onClick={onClose} aria-label="Close image viewer">
        <X size={20} aria-hidden="true" />
      </button>
      <button className="lightbox-nav prev" onClick={() => onNav(-1)} aria-label="Previous image">
        <ChevronLeft size={22} aria-hidden="true" />
      </button>
      <img src={item.src} alt={item.alt} />
      <button className="lightbox-nav next" onClick={() => onNav(1)} aria-label="Next image">
        <ChevronRight size={22} aria-hidden="true" />
      </button>
    </div>
  )
}
