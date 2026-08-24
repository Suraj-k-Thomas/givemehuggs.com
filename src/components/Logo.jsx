import logoUrl from '../assets/logo.svg'
import { HeartSolid } from './Icons'

/**
 * Brand lockup. `size` drives the mark; the wordmark is optional so the same
 * component covers the navbar, the footer, and the app screen's own header.
 */
export default function Logo({
  size = 44,
  showWordmark = true,
  showTagline = false,
  wordmarkClass = 'text-lg sm:text-xl',
  className = '',
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={logoUrl}
        alt=""
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="shrink-0"
        decoding="async"
      />

      {showWordmark && (
        <span className="grid leading-none">
          <span className={`font-display font-bold tracking-tight ${wordmarkClass}`}>
            <span className="text-coral">Give me </span>
            <span className="text-brandblue">Huggs</span>
          </span>

          {showTagline && (
            <span className="mt-1 inline-flex items-center gap-1 text-[0.6875rem] font-medium tracking-wide text-faint">
              Spreading love
              <HeartSolid className="h-3 w-3 text-coral" />
            </span>
          )}
        </span>
      )}
    </span>
  )
}
