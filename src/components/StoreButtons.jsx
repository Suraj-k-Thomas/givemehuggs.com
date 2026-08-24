import { Apple, GooglePlay } from './Icons'

/**
 * App Store + Google Play pair. Shared by the hero and the app CTA so the two
 * never drift apart; `variant="onWhite"` is the default outlined treatment.
 */
export default function StoreButtons({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <StoreButton href="#" Icon={Apple} kicker="Download on the" store="App Store" />
      <StoreButton href="#" Icon={GooglePlay} kicker="Get it on" store="Google Play" />
    </div>
  )
}

function StoreButton({ href, Icon, kicker, store }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 rounded-2xl bg-navy px-5 py-3 text-white
                 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
    >
      <Icon className="h-7 w-7 shrink-0" />
      <span className="grid text-left leading-none">
        <span className="text-[0.6875rem] font-medium tracking-wide text-white/70">{kicker}</span>
        <span className="mt-1 font-display text-base font-semibold">{store}</span>
      </span>
    </a>
  )
}
