import { motion } from "framer-motion"

const plates = [
  "Our chefs cook with passion and authentic spices.",
  "Every dish tells a story of culture and taste.",
  "Fresh ingredients sourced daily.",
  "Experience food like never before."
]

export default function StoryPlates() {

  return (
    <section className="py-24 flex flex-col items-center text-white relative overflow-hidden">
      {/* Terracotta background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <h2 className="text-5xl md:text-6xl font-bold mb-20 text-orange-700">Our Story</h2>

      <div className="flex flex-wrap justify-center gap-12 px-4 max-w-6xl">

        {plates.map((text, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="relative"
          >
            {/* Rotating plate - white with terracotta */}
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 md:w-56 md:h-56 rounded-full border-8 border-white shadow-2xl bg-gradient-to-br from-white via-orange-50 to-orange-100 absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {/* Terracotta inner ring */}
              <div className="absolute inset-4 rounded-full border-4 border-orange-600/40"></div>
              {/* Decorative dots */}
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-orange-400/30"></div>
            </motion.div>

            {/* Text content - fixed, doesn't rotate */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(251,146,60,0.6)" }}
              className="w-64 h-64 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center text-center p-6 relative z-10 shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-800 font-semibold text-sm md:text-base leading-relaxed">{text}</p>
            </motion.div>

            {/* Glowing shine effect moving left to right */}
            <motion.div
              animate={{
                backgroundPosition: ["200% center", "-200% center"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-64 h-64 md:w-56 md:h-56 rounded-full absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                backgroundSize: "200% center"
              }}
            />
          </motion.div>

        ))}

      </div>

    </section>
  )
}