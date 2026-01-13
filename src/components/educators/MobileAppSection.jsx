/**
 * MobileAppSection Component
 * Highlight mobile app features
 */

import { FaStar, FaApple, FaGooglePlay } from 'react-icons/fa'

function MobileAppSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-2xl p-8 aspect-video flex items-center justify-center">
              {/* Mobile App Preview */}
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-gray-700 font-semibold">Mobile App Preview</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
              4.9★ Rated NCLEX® Mobile App
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Study anywhere, anytime with our top-rated mobile app
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg">
              Students can access the complete NCLEX Bootcamp platform on iOS and Android devices, making it easy to study on the go.
            </p>

            {/* App Stats */}
            <div className="flex gap-6 mb-8">
              <div>
                <p className="text-4xl font-bold text-blue-600">4.9★</p>
                <p className="text-gray-600">App Store Rating</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">11K+</p>
                <p className="text-gray-600">Reviews</p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all">
                <FaApple className="text-2xl" />
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all">
                <FaGooglePlay className="text-xl" />
                <div className="text-left">
                  <p className="text-xs">GET IT ON</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </button>
            </div>

            {/* Student Testimonial */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Study anywhere, anytime. Rated 4.9 stars with 11K reviews. The mobile app made it so easy to fit studying into my busy schedule!"
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default MobileAppSection