import { motion } from "framer-motion"

export default function MapSection() {

  return (
    <section className="py-24 text-center text-white relative overflow-hidden">

      {/* Water theme background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold mb-12 text-orange-600"
      >
        Find Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto px-4 text-orange-600"
      >
        Visit us at our authentic restaurant in Dhaka for an unforgettable dining experience
      </motion.p>

      <div className="flex justify-center px-4">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.257409843747!2d89.52585457444148!3d26.500684677677697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e257bd4a2fc2d9%3A0xb5b54f902baf07ba!2sBouthaner%20Pakghar!5e1!3m2!1sen!2sin!4v1772810647332!5m2!1sen!2sin"
            width="100%"
            height="500"
            className="rounded-xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </motion.div>

      </div>

    </section>
  )
}


