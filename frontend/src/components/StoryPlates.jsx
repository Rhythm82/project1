import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const stories = [
  "In our kitchen, every recipe carries the warmth of a Bengali home. From fragrant rice dishes to slow-cooked curries, we prepare food the traditional way — with patience, love, and authentic spices.",
  "Our journey began with a simple dream: to bring the comforting taste of homemade Bengali food to every guest. Every plate reflects culture, heritage, and the joy of sharing meals together.",
  "We believe food tastes best when shared with family. That’s why our menu celebrates traditional Bengali flavors that bring people together around the table.",
  "Fresh ingredients, time-honored recipes, and heartfelt cooking — these are the secrets behind every dish we serve. Each bite is a small celebration of Bengali culinary tradition.",
  "From festive biryanis to everyday comfort meals, our kitchen keeps alive the flavors passed down through generations of Bengali families.",
]

export default function StoryPlates() {

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stories.length)
    }, 3500)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className="py-24 flex flex-col items-center relative overflow-hidden px-6">

      {/* soft terracotta glow background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* title */}

      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-orange-700">
        Our Story
      </h2>

      {/* glass quote card */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl w-full 
        backdrop-blur-xl bg-white/20 
        border border-white/40 
        shadow-2xl rounded-3xl 
        px-10 py-12 text-center"
      >

        {/* top quote */}

        <span className="absolute top-4 left-6 text-5xl text-orange-400/40 font-serif">
          "
        </span>

        {/* bottom quote */}

        <span className="absolute bottom-4 right-6 text-5xl text-orange-400/40 font-serif">
          "
        </span>

        {/* animated text */}

        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed"
        >
          {stories[index]}
        </motion.p>

      </motion.div>

    </section>

  )
}