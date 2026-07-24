import * as Icons from 'lucide-react'

/**
 * Renders a lucide-react icon by its string name (as stored in data/content.js).
 * Falls back to a generic circle icon if the name doesn't match, so a typo
 * never crashes the page.
 */
export default function Icon({ name, size = 22, strokeWidth = 1.75, ...rest }) {
  const Cmp = Icons[name] || Icons.CircleDot
  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />
}
