import Container from './Container'
import Reveal from './Reveal'
import StoreButtons from './StoreButtons'
import PhoneMockup from './app/PhoneMockup'
import { HeartSolid, Check } from './Icons'

const PROOF = [
  'Just a 5% platform fee',
  'Local-to-local Huggs skip Stripe + FX fees',
  'Pay with Apple Pay or card',
]

/**
 * Copy left, app screen right, on plain white. The mockup floats on its own
 * drop shadow rather than sitting in a tinted card, which is what carries the
 * separation now that there is no background wash.
 */
export default function Hero() {
  return (
    <section id="top" className="pt-12 pb-16 sm:pt-16 sm:pb-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          {/* copy */}
          <div className="max-w-xl text-center lg:text-left">
            <Reveal>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-coral-tint bg-coral-tint
                           px-3.5 py-1.5 text-xs font-semibold tracking-wide text-coral-dark"
              >
                <HeartSolid className="h-3.5 w-3.5" />
                Spreading love
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 font-display text-4xl font-bold text-navy sm:text-5xl lg:text-[3.4rem]">
                Send a little love to the{' '}
                <span className="text-coral">creators</span> you{' '}
                <span className="text-brandblue">love</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-relaxed text-body">
                Give Me Huggs replaces the tip jar with a relationship. Pick an artist, writer,
                developer or musician, send a hugg, and most of it reaches them — local-to-local
                Huggs skip Stripe and FX fees entirely.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <StoreButtons className="mt-8 justify-center lg:justify-start" />
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
                {PROOF.map((item) => (
                  <li key={item} className="inline-flex items-center gap-2 text-sm font-medium text-faint">
                    <Check className="h-4 w-4 text-brandblue" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* app screen */}
          <Reveal delay={0.1} y={26} className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
