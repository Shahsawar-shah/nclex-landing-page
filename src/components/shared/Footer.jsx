import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Create an Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Log In</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Student Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Study Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Study Schedule</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cheat Sheets</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NCLEX Bootcamp. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer