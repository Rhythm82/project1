import { menuData } from "../menuData.js";

import { useState } from "react";
import { Utensils, Plus } from "lucide-react";
import Navbar from "../components/Navbar.jsx";

const categories = [
  { name: "all", icon: "🍽" },
  { name: "rice", icon: "🍚" },
  { name: "chicken", icon: "🍗" },
  { name: "roti", icon: "🫓" },
  { name: "noodles", icon: "🍜" },
  { name: "paneer", icon: "🧀" },
];

export default function Menu() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [plate, setPlate] = useState([]);
  const [showPlate, setShowPlate] = useState(false);

  const filtered = menuData
    .filter((item) => category === "all" || item.category === category)
    .sort((a, b) =>
      sort === "low"
        ? a.price - b.price
        : sort === "high"
          ? b.price - a.price
          : 0,
    );

  const addToPlate = (item) => {
    setPlate([...plate, item]);
  };

  const total = plate.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen p-8 bg-gradient-to-br from-orange-50 via-orange-200 to-orange-500 mt-20">
        {/* HEADER */}

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Restaurant Menu</h1>

          <button
            onClick={() => setShowPlate(true)}
            className="relative bg-orange-500 text-white p-3 rounded-full shadow-lg"
          >
            <Utensils size={22} />

            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
              {plate.length}
            </span>
          </button>
        </div>

        {/* CATEGORY FILTER */}

        <div className="flex gap-4 mb-6 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setCategory(cat.name)}
              className={`flex flex-col items-center px-4 py-2 rounded-full backdrop-blur-lg
              ${category === cat.name ? "bg-orange-500 text-white" : "bg-white/70 text-gray-700"}`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="text-xs capitalize">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* SORT */}

        <div className="mb-6">
          <select
            onChange={(e) => setSort(e.target.value)}
            className="bg-white px-4 py-2 rounded-lg shadow"
          >
            <option value="">Sort</option>
            <option value="low">Price Low → High</option>
            <option value="high">Price High → Low</option>
          </select>
        </div>

        {/* MENU LIST */}

        <div className="flex flex-col gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex bg-white/80 backdrop-blur-lg rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* IMAGE */}

              <img src={item.img} className="w-36 h-28 object-cover" />

              {/* INFO */}

              <div className="flex flex-col justify-between p-4 flex-1">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-orange-600 font-bold">₹{item.price}</p>
                </div>

                <button
                  onClick={() => addToPlate(item)}
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-1 rounded-lg w-fit hover:bg-orange-600"
                >
                  <Plus size={16} />
                  Add to Plate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PLATE MODAL */}

        {showPlate && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl w-80">
              <h2 className="text-xl font-bold mb-4">Your Plate</h2>

              {plate.length === 0 && <p>No items added</p>}

              {plate.map((item, i) => (
                <div key={i} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}

              <hr className="my-3" />

              <h3 className="font-bold">Total: ₹{total}</h3>

              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg">
                Place Order
              </button>

              <button
                onClick={() => setShowPlate(false)}
                className="mt-2 w-full text-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
