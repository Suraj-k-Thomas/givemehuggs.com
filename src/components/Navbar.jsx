import { useEffect, useState } from 'react'
import Logo from './Logo'
import Container from './Container'
import { Menu, Close } from './Icons'

/** `cta: true` marks the entry that becomes the coral button on desktop. */
const LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why Huggs', href: '#why-huggs' },
  { label: 'Get the app', href: '#get-the-app', cta: true },
]

/**
 * Sticky white header. It stays borderless while the hero is at the top of the
 * viewport and gains a hairline rule once the page scrolls, which is what keeps
 * the plain-white treatment from looking like an unfinished edge.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // A locked body would fight the sticky header, so the menu closes on resize
  // to desktop instead of trying to survive the breakpoint change.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const close = () => mq.matches && setOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_0.5px_0_0_var(--color-hairline)]' : ''
      }`}
    >
      <Container>
        <nav className="flex h-[4.5rem] items-center justify-between gap-4">
          <a href="#top" className="-m-1 p-1" aria-label="Give Me Huggs, home">
            <Logo size={38} />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.filter((l) => !l.cta).map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium text-body transition-colors hover:text-navy"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#get-the-app"
              className="hidden rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white
                         shadow-soft transition hover:bg-coral-dark hover:shadow-lift md:inline-flex"
            >
              Get the app
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="-mr-2 grid h-11 w-11 place-items-center rounded-xl text-navy md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-hairline bg-white md:hidden">
          <Container className="py-3">
            <ul className="grid">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-divider py-3.5 text-base font-medium text-navy last:border-0"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  )
}
