import Container from './Container'
import Logo from './Logo'
import { Instagram, TikTok, XMark } from './Icons'

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Why Huggs', href: '#why-huggs' },
      { label: 'Get the app', href: '#get-the-app' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
]

const SOCIALS = [
  { label: 'Instagram', Icon: Instagram },
  { label: 'TikTok', Icon: TikTok },
  { label: 'X', Icon: XMark },
]

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-white py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Logo size={40} showTagline />
            <p className="mt-4 text-sm leading-relaxed text-body">
              Small cash gifts for the creators whose work you enjoy.
            </p>

            <ul className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-hairline
                               text-faint transition hover:border-coral hover:text-coral"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="font-display text-sm font-semibold text-navy">{title}</h2>
              <ul className="mt-4 grid gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-body transition-colors hover:text-coral">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-divider pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-faint">© {new Date().getFullYear()} Give me Huggs</p>
          <p className="text-sm text-faint">Made for creators, everywhere.</p>
        </div>
      </Container>
    </footer>
  )
}
