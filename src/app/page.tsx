import Navbar from "@/lib/components/navbar"
import Hero from "@/lib/components/Hero"
import Marquee from "@/lib/components/Marquee"
import About from "@/lib/components/About"
import Services from "@/lib/components/Services"
import Hours from "@/lib/components/Hours"
import Menu from "@/lib/components/Menu"
import Testimonials from "@/lib/components/Testimonials"
import ReservationBanner from "@/lib/components/ReservationBanner"
import Footer from "@/lib/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Marquee inverted />
        <Hours />
        <Menu />
        <Testimonials />
        <ReservationBanner />
      </main>
      <Footer />
    </>
  )
}
