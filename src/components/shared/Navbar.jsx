import { FaBars, FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  // ==================== STATE MANAGEMENT ====================
  // Track sidebar open/close state
  const [isOpen, setIsOpen] = useState(false)
  
  // Track scroll position for navbar background change
  const [scrolled, setScrolled] = useState(false)

  // ==================== SCROLL EFFECT ====================
  // Change navbar background when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 50px, change background
      setScrolled(window.scrollY > 50)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup: Remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ==================== PREVENT BODY SCROLL ====================
  // Prevent background page scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll when sidebar is open
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable body scroll when sidebar is closed
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup: Always restore scroll on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // ==================== NAVIGATION LINKS DATA ====================
  // Centralized navigation links for easy maintenance
  const navLinks = [
    { path: '/educators', label: 'Educators' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/success-stories', label: 'Success' }
  ]

  // ==================== HELPER FUNCTIONS ====================
  // Close sidebar (cleaner than inline function)
  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      {/* ==================== MAIN NAVBAR ==================== */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* ========== LOGO SECTION ========== */}
            <Link 
              to="/" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              {/* Logo Icon */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">⭕</span>
              </div>
              {/* Logo Text */}
              <span className="text-white font-bold text-xl">Bootcamp.com</span>
            </Link>

            {/* ========== DESKTOP NAVIGATION MENU ========== */}
            {/* Hidden on mobile (md:flex = show on medium+ screens) */}
            <div className="hidden md:flex items-center gap-8">
              
              {/* Map through navigation links */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Login Link (separate styling) */}
              <Link 
                to="/login" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Log In
              </Link>

              {/* Call-to-Action Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Start Studying
              </button>
            </div>

            {/* ========== MOBILE MENU BUTTON ========== */}
            {/* Visible only on mobile (md:hidden = hide on medium+ screens) */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white hover:text-blue-400 transition-colors"
              aria-label="Open menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* ==================== OVERLAY (BACKDROP) ==================== */}
      {/* Dark overlay behind sidebar - closes sidebar when clicked */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/60 z-40 animate-fadeIn"
          aria-hidden="true"
        />
      )}

      {/* ==================== MOBILE SIDEBAR ==================== */}
      {/* Slides in from right side on mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* ========== SIDEBAR HEADER ========== */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          {/* Sidebar Title */}
          <span className="text-white font-bold text-lg">Menu</span>
          
          {/* Close Button */}
          <button
            onClick={closeSidebar}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Close menu"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* ========== SIDEBAR NAVIGATION LINKS ========== */}
        <div className="flex flex-col gap-5 p-6">
          
          {/* Map through navigation links */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeSidebar} // Close sidebar after clicking
              className="text-white hover:text-blue-400 transition-colors text-lg"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Login Link */}
          <Link
            to="/login"
            onClick={closeSidebar}
            className="text-gray-300 hover:text-white transition-colors text-lg"
          >
            Log In
          </Link>

          {/* Call-to-Action Button */}
          <button
            onClick={closeSidebar}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
          >
            Start Studying
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar