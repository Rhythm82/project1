import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export default function FooterMarquee() {
  return (
    <footer className="bg-white text-black py-16  bg-gradient-to-br 
      from-[#fff7ed] 
      via-[#fde68a] 
      to-[#fb923c]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-orange-900 mb-4">Bouthaner Pakghar</h3>
            <p className="text-orange-900 leading-relaxed">
              Authentic Bengali and Indian cuisine with fresh ingredients and traditional recipes.
            </p>
            <p className="text-orange-800 text-sm">Taste the tradition since 2015</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-orange-700 mb-4">Contact Us</h4>
            <div className="flex items-center gap-3 text-orange-700">
              <FaPhone className="text-orange-700" />
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-center gap-3 text-orange-700">
              <FaEnvelope className="text-orange-700" />
              <span>info@bouthaner.com</span>
            </div>
            <div className="flex items-start gap-3 text-orange-700">
              <FaMapMarkerAlt className="text-orange-700 mt-1" />
              <span>123 Main Street, Dhaka, Bangladesh</span>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-orange-700 mb-4">Hours</h4>
            <div className="flex items-start gap-3 text-orange-700">
              <FaClock className="text-orange-500 mt-1" />
              <div>
                <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
              </div>
            </div>
            <p className="text-sm text-orange-500 mt-4">Special catering available on request</p>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-orange-500 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaTwitter size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-orange-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-orange-600 text-sm">
              © 2024 Bouthaner Pakghar. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
              <a href="#" className="hover:text-orange-600 transition">Terms of Service</a>
              <a href="#" className="hover:text-orange-600 transition">Menu</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}