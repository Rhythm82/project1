import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import StoryPlates from "../components/StoryPlates"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"
import MapSection from "../components/MapSection"
import FooterMarquee from "../components/FooterMarquee"
import { motion } from "framer-motion"

export default function Home() {

  return (

    <div className="min-h-screen relative overflow-hidden 
    bg-gradient-to-br from-[#fff7ed] via-[#fde68a] to-[#fb923c]">

      {/* dreamy floating background */}
      <div className="fixed inset-0 -z-20 overflow-hidden">

        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-400/30 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-yellow-300/30 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-white/30 rounded-full blur-[100px]"
        />

      </div>

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <Gallery />

        <StoryPlates />

        <Testimonials />

        <MapSection />

        <FooterMarquee />

      </div>

    </div>
  )
}