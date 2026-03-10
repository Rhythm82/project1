import { motion } from "framer-motion"

import img1 from "../media/img1.png"
import img2 from "../media/img2.png"
import img3 from "../media/img3.png"
import img4 from "../media/img4.png"
import img5 from "../media/img5.png"
import img6 from "../media/img6.png"
import img7 from "../media/img7.png"
import img8 from "../media/img8.png"
import img9 from "../media/img9.png"
import img10 from "../media/img10.png"

export default function Gallery() {

  const row1 = [img1, img2, img3, img4, img5]
  const row2 = [img6, img7, img8, img9, img10]

  return (

    <section className="py-24 overflow-hidden  ">

      <h2 className="text-4xl font-bold text-center mb-16 text-orange-700">
        Our Delicious Moments
      </h2>

      {/* ROW 1 */}

      <motion.div
        className="flex gap-10 mb-14"
        animate={{ x: ["-10%", "10%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 12,
          ease: "linear"
        }}
      >

        {[...row1, ...row1].map((img, i) => (

          <div
            key={i}
            className="min-w-[180px] h-[180px] rounded-full 
            overflow-hidden shadow-xl 
            border-4 border-white
            bg-white/40 backdrop-blur-md"
          >

            <img
              src={img}
              alt="food"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />

          </div>

        ))}

      </motion.div>


      {/* ROW 2 */}

      <motion.div
        className="flex gap-10"
        animate={{ x: ["10%", "-10%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 12,
          ease: "linear"
        }}
      >

        {[...row2, ...row2].map((img, i) => (

          <div
            key={i}
            className="min-w-[180px] h-[180px] rounded-full 
            overflow-hidden shadow-xl 
            border-4 border-white
            bg-white/40 backdrop-blur-md"
          >

            <img
              src={img}
              alt="food"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />

          </div>

        ))}

      </motion.div>

    </section>

  )
}