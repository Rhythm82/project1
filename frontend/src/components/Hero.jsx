import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import logo from "../media/logo.png"
import heroImg from "../media/img1.png"

export default function Hero() {

  const texts = [
    "Authentic Bengali Taste",
    "Fresh Ingredients Everyday",
    "Cooked With Love",
    "Taste The Tradition"
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* dreamy gradient background */}

      <div className="absolute inset-0 bg-gradient-to-br 
      from-[#fff7ed] 
      via-[#fde68a] 
      to-[#fb923c] -z-20" />

      {/* soft floating light blobs */}

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-20 w-96 h-96 bg-orange-400/30 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-300/30 rounded-full blur-[120px]"
      />

      {/* full width glass container */}

      <div className="w-full backdrop-blur-xl bg-white/20 border-y border-white/30 shadow-xl py-24 px-6">

        <div className="max-w-6xl mx-auto flex flex-col items-center">

          {/* logo */}

          <motion.img
            src={logo}
            alt="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-24 mb-6"
          />

          {/* restaurant name */}

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6
            bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-700
            bg-clip-text text-transparent"
          >
            Bouthaner Pakghar
          </motion.h1>

          {/* animated text */}

          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-800 font-semibold mb-10"
          >
            {texts[index]}
          </motion.p>

          {/* hero image */}



          {/* button */}

          <Link to="/menu">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full
              bg-gradient-to-r from-yellow-500 to-orange-500
              text-white font-semibold text-lg
              shadow-lg hover:shadow-xl transition"
            >
              View Menu
            </motion.button>

          </Link>

        </div>

      </div>

    </section>

  )
}