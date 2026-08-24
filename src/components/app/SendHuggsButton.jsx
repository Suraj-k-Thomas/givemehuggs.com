import { HeartSolid } from '../Icons'
import { u } from './scale'

/** The app's primary action: the full-width coral "Send Huggs" pill. */
export default function SendHuggsButton() {
  return (
    <div
      className="flex w-full items-center justify-center bg-coral font-semibold text-white"
      style={{
        gap: u(0.6),
        borderRadius: u(1.4),
        paddingBlock: u(1.15),
        fontSize: u(1.32),
        boxShadow: `0 ${u(0.5)} ${u(1.4)} rgb(242 84 91 / 0.34)`,
      }}
    >
      <HeartSolid style={{ width: u(1.5), height: u(1.5) }} />
      Send Huggs
    </div>
  )
}
