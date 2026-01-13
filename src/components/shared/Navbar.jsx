import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">⭕</span>
              </div>
              <span className="text-white font-bold text-xl">Bootcamp.com</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/educators" className="text-white">Educators</Link>
              <Link to="/reviews" className="text-white">Reviews</Link>
              <Link to="/pricing" className="text-white">Pricing</Link>
              <Link to="/success-stories" className="text-white">Success</Link>
              <Link to="/login" className="text-gray-300">Log In</Link>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                Start Studying
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-white font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <FaTimes size={22} />
          </button>
        </div>

        <div className="flex flex-col gap-5 p-6 text-white">
          <Link onClick={() => setIsOpen(false)} to="/educators">Educators</Link>
          <Link onClick={() => setIsOpen(false)} to="/reviews">Reviews</Link>
          <Link onClick={() => setIsOpen(false)} to="/pricing">Pricing</Link>
          <Link onClick={() => setIsOpen(false)} to="/success-stories">Success</Link>
          <Link onClick={() => setIsOpen(false)} to="/login">Log In</Link>

          <button className="mt-4 bg-blue-600 py-2 rounded-lg">
            Start Studying
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
