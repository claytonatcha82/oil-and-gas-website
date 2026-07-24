import { useEffect, useRef, useState } from 'react'

export default function StatCounter({ count, label, noPlus = false, trigger }) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!trigger || started.current) return
    started.current = true
    const duration = 1500
    const start = performance.now()
    let raf
    function step(now) {
      const p = Math.min((now - start) / duration, 1)
      setValue(Math.floor(p * count))
      if (p < 1) raf = requestAnimationFrame(step)
      else setValue(count)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [trigger, count])

  return (
    <div className="hero-stat">
      <div className="num">{value}{noPlus ? '' : '+'}</div>
      <div className="lbl">{label}</div>
    </div>
  )
}
