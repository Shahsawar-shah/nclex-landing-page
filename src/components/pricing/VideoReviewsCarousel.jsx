/**
 * VideoReviewsCarousel Component
 * Student video reviews carousel
 */

import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function VideoReviewsCarousel() {
  
  const [currentSlide, setCurrentSlide] = useState(0)

  // Sample video reviews data
  const reviews = [
    {
      username: "@amandaacevess",
      caption: "clearly v passionate ab this subject",
      thumbnail: "bg-gradient-to-br from-pink-400 to-purple-500"
    },
    {
      username: "@jasminwitnoe",
      caption: "#nclex #bsn #nurse #nursesoftiktok",
      thumbnail: "bg-gradient-to-br from-blue-400 to-cyan-500"
    },
    {
      username: "@ynneviaa",
      caption: "I'll make another part only because there's a few more...",
      thumbnail: "bg-gradient-to-br from-green-400 to-emerald-500"
    },
    {
      username: "@olivia.v17",
      caption: "how I passed in 85 questions!!! #nursing #nclex",
      thumbnail: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      username: "@nursemontez",
      caption: "l asked for help and yall delivered....",
      thumbnail: "bg-gradient-to-br from-red-400 to-pink-500"
    },
    {
      username: "@crazyfornoexo",
      caption: "Just days away before I take my NCLEX",
      thumbnail: "bg-gradient-to-br from-indigo-400 to-purple-500"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Student Reviews
        </h2>

        {/* Carousel */}
        <div className="relative">
          
          {/* Videos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className={`w-full h-full ${review.thumbnail}`}>
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-900 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-semibold text-sm">{review.username}</p>
                  <p className="text-xs line-clamp-2">{review.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all"
          >
            <FaChevronLeft className="text-gray-800" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all"
          >
            <FaChevronRight className="text-gray-800" />
          </button>

        </div>

      </div>
    </section>
  )
}

export default VideoReviewsCarousel