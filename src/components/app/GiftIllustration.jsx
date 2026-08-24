import { u } from './scale'

/**
 * The gift illustration from the "Send a little love" card, with the hearts and
 * coins that float around it. Everything lives in one SVG viewBox so the whole
 * arrangement scales as a unit and never drifts out of position.
 */
export default function GiftIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 140 116"
      className={className}
      style={{ width: u(13.5) }}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gh-box" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f66a63" />
          <stop offset="1" stopColor="#ea4a51" />
        </linearGradient>
        <linearGradient id="gh-lid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fda69d" />
          <stop offset="1" stopColor="#f9857c" />
        </linearGradient>
        <linearGradient id="gh-coin" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#ffd76a" />
          <stop offset="1" stopColor="#e8a51b" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="70" cy="103" rx="34" ry="6" fill="#f2545b" opacity="0.13" />

      {/* box */}
      <rect x="36" y="56" width="68" height="44" rx="6" fill="url(#gh-box)" />
      <rect x="32" y="47" width="76" height="13" rx="5" fill="url(#gh-lid)" />
      <rect x="63" y="47" width="14" height="53" fill="#ffb9b1" opacity="0.95" />

      {/* bow */}
      <path d="M70 47c-7-11-24-16-28-7s11 10 28 7Z" fill="#fb9c92" />
      <path d="M70 47c7-11 24-16 28-7s-11 10-28 7Z" fill="#fb9c92" />
      <path d="M70 47c-4-6-13-9-16-5s5 6 16 5Z" fill="#f9857c" />
      <path d="M70 47c4-6 13-9 16-5s-5 6-16 5Z" fill="#f9857c" />
      <circle cx="70" cy="44" r="6.5" fill="#ffb9b1" />

      {/* floating hearts */}
      <path
        d="M124 22a6 6 0 0 0-8.6 0l-.9 1-.9-1a6 6 0 0 0-8.6 8.3l9.5 9.7 9.5-9.7a6 6 0 0 0 0-8.3Z"
        fill="#f2545b"
        opacity="0.95"
      />
      <path
        d="M31 12a4.3 4.3 0 0 0-6.1 0l-.7.7-.7-.7A4.3 4.3 0 0 0 17.4 18l6.8 6.9 6.8-6.9A4.3 4.3 0 0 0 31 12Z"
        fill="#fb9c92"
      />
      <path
        d="M104 76a3.4 3.4 0 0 0-4.9 0l-.5.6-.5-.6a3.4 3.4 0 0 0-4.9 4.7l5.4 5.5 5.4-5.5a3.4 3.4 0 0 0 0-4.7Z"
        fill="#f9857c"
      />

      {/* floating coins */}
      <g>
        <circle cx="19" cy="66" r="11" fill="url(#gh-coin)" />
        <circle cx="19" cy="66" r="11" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.4" />
        <text
          x="19"
          y="71.5"
          textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="12"
          fontWeight="700"
          fill="#8a5a00"
        >
          $
        </text>
      </g>
      <g>
        <circle cx="121" cy="57" r="8" fill="url(#gh-coin)" />
        <circle cx="121" cy="57" r="8" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.2" />
        <text
          x="121"
          y="61"
          textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill="#8a5a00"
        >
          $
        </text>
      </g>

      {/* sparkles */}
      <path d="M46 22l1.3 3.4L50.7 27l-3.4 1.3L46 31.7 44.7 28.3 41.3 27l3.4-1.3Z" fill="#ffd76a" />
      <path d="M92 14l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1Z" fill="#a9cdef" />
    </svg>
  )
}
