import Container from './Container'
import Reveal from './Reveal'
import { Search, Gift, HeartSolid } from './Icons'

const STEPS = [
  {
    Icon: Search,
    accent: 'coral',
    title: 'Mention @huggs',
    body: 'Type @huggs in the creator\u2019s YouTube, Twitch or Kick chat — or open the app and pick a creator directly. Either way, you get a payment link instantly.',
  },
  {
    Icon: Gift,
    accent: 'brandblue',
    title: 'Send your hugg',
    body: 'Choose a tier — $1, $5, $10 or $25 — add a note if you want to say why, and pay in one tap with Apple Pay, Google Pay or card. It’s a simple 5% fee, shown clearly before you pay.',
  },
  {
    Icon: HeartSolid,
    accent: 'coral',
    title: 'They feel it, publicly',
    body: 'The bot posts a shout-out in chat and your note lands with them straight away. We take a 5% fee — local-to-local huggs skip Stripe and FX fees too.',
  },
]

/** Three feature cards: white on white, lifted by shadow and a hairline. */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-divider py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.14em] text-brandblue uppercase">
            How it works
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
            From a mention to a moment of love
          </h2>
          <p className="mt-4 text-lg text-body">
            Simple pricing: a flat 5% fee per hugg. No monthly subscription, no payout waiting period.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3">
          {STEPS.map(({ Icon, accent, title, body }, i) => (
            <Reveal as="li" key={title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-hairline bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${
                    accent === 'coral' ? 'bg-coral-tint text-coral' : 'bg-brandblue-tint text-brandblue'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>

                <span className="mt-6 block text-xs font-semibold tracking-widest text-faint">
                  STEP {i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-3 leading-relaxed text-body">{body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
