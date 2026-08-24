import { Palette, Pencil, Code, Headphones } from '../Icons'
import { u } from './scale'

/**
 * The creator row from the app's home screen.
 *
 * The real app shows creator photographs here; this recreation uses gradient
 * discs with a craft glyph so the mockup stays a crisp, dependency-free
 * recreation of the UI rather than shipping stock portraits.
 */
export const CREATORS = [
  { label: 'Artist', Icon: Palette, ring: '#f2545b', from: '#f9a49d', to: '#f2545b' },
  { label: 'Writer', Icon: Pencil, ring: '#e8a51b', from: '#f6cd8a', to: '#e09415' },
  { label: 'Developer', Icon: Code, ring: '#4a90d9', from: '#a9cdef', to: '#4a90d9' },
  { label: 'Musician', Icon: Headphones, ring: '#7052ea', from: '#b9a6f7', to: '#7052ea' },
]

export default function AvatarRow({ showLabels = true }) {
  return (
    <ul className="flex items-start justify-between" style={{ gap: u(0.5) }}>
      {CREATORS.map(({ label, Icon, ring, from, to }) => (
        <li key={label} className="grid justify-items-center" style={{ gap: u(0.45) }}>
          <span
            className="grid place-items-center rounded-full text-white"
            style={{
              width: u(5.1),
              height: u(5.1),
              backgroundImage: `linear-gradient(150deg, ${from}, ${to})`,
              boxShadow: `0 0 0 ${u(0.2)} #fff, 0 0 0 ${u(0.38)} ${ring}`,
            }}
          >
            <Icon style={{ width: u(2.2), height: u(2.2) }} />
          </span>

          {showLabels && (
            <b className="font-medium text-body" style={{ fontSize: u(0.92), lineHeight: 1 }}>
              {label}
            </b>
          )}
        </li>
      ))}
    </ul>
  )
}
