import { Menu, Bell } from '../Icons'
import { u } from './scale'

/** The app's top bar: hamburger, wordmark, notification bell with unread dot. */
export default function ScreenHeader() {
  return (
    <div className="flex items-center justify-between">
      <Menu className="text-faint" style={{ width: u(1.6), height: u(1.6) }} />

      <span className="font-display font-bold tracking-tight" style={{ fontSize: u(1.5) }}>
        <span className="text-coral">Give me </span>
        <span className="text-brandblue">Huggs</span>
      </span>

      <span className="relative grid">
        <Bell className="text-faint" style={{ width: u(1.6), height: u(1.6) }} />
        <i
          className="absolute rounded-full bg-coral"
          style={{ width: u(0.62), height: u(0.62), top: u(-0.1), right: u(-0.1) }}
        />
      </span>
    </div>
  )
}
