import { FaCheck, FaStar } from 'react-icons/fa'

function CheatSheets() {
  
  const cheatSheetsFeature = {
    badge: "STUDY SMARTER, NOT HARDER",
    title: "Beautiful cheat sheets to master must-know NCLEX® topics",
    features: [
      "140+ cheat sheets that make difficult concepts easy to understand.",
      "Related cheat sheets shown for every topic tested.",
      "Organized by subject so you can find exactly what you need."
    ],
    testimonial: {
      quote: "The cheat sheets explained everything in a way that made even the toughest topics feel manageable. I passed the NCLEX in just 85 questions, and I couldn't have done it without the NCLEX Bootcamp.",
      name: "Jhon Romel Bagaporo",
      status: "Passed - Next Gen NCLEX®"
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <span className="inline-block text-sm text-blue-600 font-semibold mb-3">
              {cheatSheetsFeature.badge}
            </span>
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {cheatSheetsFeature.title}
            </h2>
            
            {/* Features List */}
            <div className="space-y-4 mb-8">
              {cheatSheetsFeature.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            {/* Button - Hero section jaisa */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition mb-8">
              Start Studying for Free
            </button>

            {/* Testimonial Card */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-md">
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-4 italic">
                "{cheatSheetsFeature.testimonial.quote}"
              </p>
              
              {/* Student Info */}
              <div>
                <p className="font-semibold text-gray-900">
                  {cheatSheetsFeature.testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {cheatSheetsFeature.testimonial.status}
                </p>
                <a href="#" className="text-blue-600 text-sm font-medium mt-1 inline-block">
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="bg-gray-200 h-[500px] rounded-xl flex items-center justify-center">
            <span className=""><img className='w-full h-full' src="https://cdn.prod.website-files.com/606392a644232d174453ec02/6841f95af58378a3c5e6dc1a_nclex_cheat_sheet.webp" alt="" /></span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default CheatSheets