import ScreenHeader from './ScreenHeader'
import AvatarRow from './AvatarRow'
import GiftIllustration from './GiftIllustration'
import SendHuggsButton from './SendHuggsButton'
import { u, U_DEFAULT } from './scale'

/**
 * The device shell. This is the only component that owns `--u` (see scale.js):
 * everything inside sizes itself from that one variable, so a caller resizes
 * the whole app screen by passing a different `unit`.
 */
export default function PhoneMockup({ unit = U_DEFAULT, className = '' }) {
  return (
    <div
      className={`relative shrink-0 bg-navy ${className}`}
      style={{
        '--u': unit,
        width: u(35.2),
        padding: u(0.9),
        borderRadius: u(4.6),
        boxShadow: 'var(--shadow-phone)',
      }}
      role="img"
      aria-label="The Give me Huggs app home screen, showing creators you can support and a Send Huggs button."
    >
      {/* screen */}
      <div
        className="relative overflow-hidden bg-white"
        style={{ borderRadius: u(3.9), paddingInline: u(1.7), paddingBottom: u(2.2) }}
      >
        {/* status bar + notch */}
        <div className="flex items-center justify-center" style={{ height: u(3.2) }}>
          <i className="rounded-full bg-navy" style={{ width: u(7.2), height: u(1.05) }} />
        </div>

        <div className="grid" style={{ gap: u(2) }}>
          <ScreenHeader />

          <div className="grid" style={{ gap: u(0.5) }}>
            <h3 className="font-display font-bold text-navy" style={{ fontSize: u(1.85), lineHeight: 1.2 }}>
              Send a little love
            </h3>
            <p className="text-body" style={{ fontSize: u(1.12), lineHeight: 1.45 }}>
              Pick a creator and send them a hugg.
            </p>
          </div>

          <AvatarRow />

          {/* gift card */}
          <div
            className="grid justify-items-center bg-white"
            style={{
              gap: u(1.1),
              padding: u(1.6),
              borderRadius: u(2),
              border: `1px solid var(--color-hairline)`,
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            <GiftIllustration />

            <div className="grid justify-items-center" style={{ gap: u(0.3) }}>
              <b className="font-display font-semibold text-navy" style={{ fontSize: u(1.4) }}>
                Huggs sent with $5
              </b>
              <span className="text-faint" style={{ fontSize: u(1), lineHeight: 1.4 }}>
                100% goes to the creator
              </span>
            </div>
          </div>

          <SendHuggsButton />
        </div>
      </div>
    </div>
  )
}
