import { FaCheck, FaStar } from 'react-icons/fa'

function StudySchedule() {
  
  const scheduleFeature = {
    badge: "NCLEX® STUDY SCHEDULE THAT ADAPTS TO YOU",
    title: "Stay on track with a personalized NCLEX® study schedule",
    features: [
      "Create your own study schedule in seconds.",
      "Track your progress and always know what to study next.",
      "Adjust your schedule easily when life gets in the way."
    ],
    testimonial: {
      quote: "Their customizable study schedule made learning easy for someone like me who has a hectic schedule. Overall, I gained a lot of confidence when I took the NCLEX because of Bootcamp!",
      name: "Rhea Almero",
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
              {scheduleFeature.badge}
            </span>
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {scheduleFeature.title}
            </h2>
            
            {/* Features List */}
            <div className="space-y-4 mb-8">
              {scheduleFeature.features.map((feature, index) => (
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
                "{scheduleFeature.testimonial.quote}"
              </p>
              
              {/* Student Info */}
              <div>
                <p className="font-semibold text-gray-900">
                  {scheduleFeature.testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {scheduleFeature.testimonial.status}
                </p>
                <a href="#" className="text-blue-600 text-sm font-medium mt-1 inline-block">
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="bg-gray-200 h-[500px] rounded-xl flex items-center justify-center">
            <span className=""><img className='w-full h-full' src="https://cdn.prod.website-files.com/606392a644232d174453ec02/68113c6790aeb544b4ba9448_nclex_assignments_completed.webp" alt="" /></span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default StudySchedule