import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  { name: "Rahul", text: "Amazing food!", rating: 5 },
  { name: "Sneha", text: "Best momos ever!", rating: 4 },
  { name: "Amit", text: "Loved the ambience.", rating: 5 },
  { name: "Priya", text: "Great service.", rating: 4 },
  { name: "Rahul", text: "Amazing food!", rating: 5 },
  { name: "Sneha", text: "Best momos ever!", rating: 4 },
  { name: "Amit", text: "Loved the ambience.", rating: 5 },
  { name: "Priya", text: "Great service.", rating: 4 },
  { name: "Rahul", text: "Amazing food!", rating: 5 },
  { name: "Sneha", text: "Best momos ever!", rating: 4 },
  { name: "Amit", text: "Loved the ambience.", rating: 5 },
  { name: "Priya", text: "Great service.", rating: 4 },
];

export default function Testimonials() {
  return (
    <section className="py-20 overflow-hidden relative">
      <h2 className="text-3xl font-bold text-center mb-16">Testimonials</h2>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 px-6 h-[500px] overflow-hidden">
        {[0, 1, 2, 3].map((col) => (
          <div
            key={col}
            className={`flex flex-col gap-6 ${
              col % 2 === 0 ? "animate-scrollUp" : "animate-scrollDown"
            }`}
          >
            {[...reviews, ...reviews].map((t, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center text-yellow-400 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-gray-600 text-sm">{t.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
