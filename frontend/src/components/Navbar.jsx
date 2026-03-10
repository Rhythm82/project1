import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../media/logo.png"
import { Link } from "react-router-dom"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (

    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 border-b border-white/40 shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        <img src={logo} alt="Logo" className="h-12 hover:scale-105 transition"/>

        {/* desktop menu */}

        <div className="hidden md:flex items-center gap-8 font-semibold text-gray-800">

          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/menu" className="hover:text-orange-500">Menu</Link>
          <a href="#help" className="hover:text-orange-500">Help</a>

          <select className="bg-white/40 backdrop-blur-lg border border-white/50 rounded-lg px-3 py-1 text-sm">
            <option>English</option>
            <option>Hindi</option>
            <option>বাংলা</option>
          </select>

        </div>

        {/* mobile hamburger */}

        <div className="md:hidden">

          <FaBars
            className="text-xl text-gray-800 cursor-pointer"
            onClick={() => setOpen(true)}
          />

        </div>

      </div>

      {/* overlay */}

      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* slide menu */}

      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-[320px] 
        backdrop-blur-2xl bg-white/40 border-l border-white/40
        shadow-2xl p-8 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* close button */}

        <FaTimes
          className="text-2xl mb-10 cursor-pointer text-gray-800"
          onClick={() => setOpen(false)}
        />

        {/* menu links */}

        <div className="flex flex-col gap-6 text-lg font-semibold text-gray-800">

          <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link to="/menu" onClick={()=>setOpen(false)}>Menu</Link>
          <a href="#help" onClick={()=>setOpen(false)}>Help</a>

        </div>

      </div>

    </nav>

  )
}