/**
 * Inline SVG icon set.
 * Stroke icons inherit `currentColor` and a 1.7 stroke; `Heart` and `HeartSolid`
 * are separate because a filled heart reads far better at app-UI sizes.
 */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ children, className = 'h-5 w-5', solid = false, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...(solid ? { fill: 'currentColor' } : stroke)}
      {...rest}
    >
      {children}
    </svg>
  )
}

export const HeartSolid = (p) => (
  <Svg solid {...p}>
    <path d="M20.8 4.9a5.4 5.4 0 0 0-7.7 0L12 6l-1.1-1.1a5.4 5.4 0 0 0-7.7 7.7l8.8 8.8 8.8-8.8a5.4 5.4 0 0 0 0-7.7Z" />
  </Svg>
)

export const Heart = (p) => (
  <Svg {...p}>
    <path d="M20.8 4.9a5.4 5.4 0 0 0-7.7 0L12 6l-1.1-1.1a5.4 5.4 0 0 0-7.7 7.7l8.8 8.8 8.8-8.8a5.4 5.4 0 0 0 0-7.7Z" />
  </Svg>
)

export const Gift = (p) => (
  <Svg {...p}>
    <path d="M20 12v8.2a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8V12" />
    <rect x="2.5" y="7" width="19" height="5" rx="1.2" />
    <path d="M12 21V7" />
    <path d="M12 7H7.8A2.4 2.4 0 1 1 9.4 2.6C11.2 3.4 12 7 12 7Z" />
    <path d="M12 7h4.2a2.4 2.4 0 1 0-1.6-4.4C12.8 3.4 12 7 12 7Z" />
  </Svg>
)

export const Bell = (p) => (
  <Svg {...p}>
    <path d="M18.2 8.6a6.2 6.2 0 1 0-12.4 0c0 6.6-2.8 8.6-2.8 8.6h18s-2.8-2-2.8-8.6" />
    <path d="M13.8 20.6a2.1 2.1 0 0 1-3.6 0" />
  </Svg>
)

export const Menu = (p) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
)

export const Close = (p) => (
  <Svg {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Svg>
)

export const Home = (p) => (
  <Svg {...p}>
    <path d="M3.5 10.2 12 3.2l8.5 7v10a.8.8 0 0 1-.8.8h-4.9v-6H9.2v6H4.3a.8.8 0 0 1-.8-.8Z" />
  </Svg>
)

export const Search = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </Svg>
)

export const Activity = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="m8.4 12.3 2.6 2.6 4.6-5.2" />
  </Svg>
)

export const User = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="3.8" />
    <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
  </Svg>
)

export const Palette = (p) => (
  <Svg {...p}>
    <path d="M12 21.4a9.4 9.4 0 1 1 9.4-9.4c0 2.6-2.1 3.6-3.9 3.6h-1.9a2.4 2.4 0 0 0-1.5 4.3 1.6 1.6 0 0 1-1 1.5 9.6 9.6 0 0 1-1.1 0Z" />
    <circle cx="8.4" cy="9.6" r="1.1" />
    <circle cx="13" cy="7.4" r="1.1" />
  </Svg>
)

export const Pencil = (p) => (
  <Svg {...p}>
    <path d="M4 20h4.2L20 8.2 15.8 4 4 15.8Z" />
    <path d="m14.4 5.4 4.2 4.2" />
  </Svg>
)

export const Code = (p) => (
  <Svg {...p}>
    <path d="m8.6 18-6-6 6-6M15.4 6l6 6-6 6" />
  </Svg>
)

export const Headphones = (p) => (
  <Svg {...p}>
    <path d="M4 15.4V12a8 8 0 0 1 16 0v3.4" />
    <rect x="2.4" y="14.2" width="4.6" height="7" rx="2" />
    <rect x="17" y="14.2" width="4.6" height="7" rx="2" />
  </Svg>
)

export const Sparkle = (p) => (
  <Svg solid {...p}>
    <path d="M12 2.8 13.9 9 20 10.9 13.9 12.8 12 19 10.1 12.8 4 10.9 10.1 9Z" />
  </Svg>
)

export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Svg>
)

export const Check = (p) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Svg>
)

/* ---------- store + social marks (filled, brand-shaped) ---------- */

export const Apple = ({ className = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.8-2.2.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.8ZM14.2 5.5c.6-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.9-1 2.9 1.1.1 2.2-.5 2.8-1.3Z" />
  </svg>
)

export const GooglePlay = ({ className = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#34A853" d="M3.6 2.3 13.9 12 3.6 21.7A1.8 1.8 0 0 1 3 20.4V3.6c0-.5.2-1 .6-1.3Z" />
    <path fill="#FBBC04" d="m17.1 8.7 2.9 1.7c1.1.6 1.1 2.6 0 3.2l-2.9 1.7L13.9 12Z" />
    <path fill="#EA4335" d="M3.6 2.3c.4-.4 1.1-.4 1.7-.1l11.8 6.5L13.9 12Z" />
    <path fill="#4285F4" d="M3.6 21.7 13.9 12l3.2 3.3L5.3 21.8c-.6.3-1.3.3-1.7-.1Z" />
  </svg>
)

export const XMark = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.5 3h3.2l-7 8 7.8 10h-6l-4.7-6.1L5.3 21H2l7.4-8.4L2 3h6.1l4.4 5.8L17.5 3Zm-1.1 16h1.8L7.5 4.9H5.6L16.4 19Z" />
  </svg>
)

export const Instagram = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)

export const TikTok = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.2 2h-3v13.1a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.5a5.6 5.6 0 1 0 4.8 5.6V8.4a6.4 6.4 0 0 0 3.8 1.2V6.5a3.6 3.6 0 0 1-3.8-3.4V2Z" />
  </svg>
)
