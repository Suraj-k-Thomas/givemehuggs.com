import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import AppCTA from './components/AppCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <AppCTA />
      </main>
      <Footer />
    </div>
  )
}
