import Container from './Container'
import Reveal from './Reveal'
import StoreButtons from './StoreButtons'
import { Check, Sparkle } from './Icons'

const REASONS = [
  'Every cent of a hugg reaches the creator',
  'Instant payouts — no monthly minimum',
  'Your note travels with the gift',
  'Works on iOS and Android',
]

/** Closing download band. Still white; a hairline card carries the emphasis. */
export default function AppCTA() {
  return (
    <section id="get-the-app" className="border-t border-divider py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-hairline bg-white p-8 shadow-lift sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-coral uppercase">
                  <Sparkle className="h-4 w-4" />
                  Get the app
                </span>

                <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
                  Start sending huggs today
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-body">
                  Free to download, free to join. Support the people whose work already made your
                  week better.
                </p>

                <StoreButtons className="mt-8" />
              </div>

              <ul id="why-huggs" className="grid gap-4 scroll-mt-28">
                {REASONS.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-start gap-3 border-b border-divider pb-4 last:border-0 last:pb-0"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brandblue-tint text-brandblue">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium text-navy">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
