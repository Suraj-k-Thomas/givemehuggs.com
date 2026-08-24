/** One max-width + gutter rule for every section, so nothing drifts. */
export default function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}
