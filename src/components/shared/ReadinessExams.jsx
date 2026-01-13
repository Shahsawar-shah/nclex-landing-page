import { FaCheck, FaStar } from 'react-icons/fa'

function ReadinessExams() {

  const examsFeature = {
    badge: "PERFORMANCE AND IMPROVEMENT TRACKING",
    title: "Predict your chance to pass with Readiness Exams",
    features: [
      "Get an accurate pass prediction based on our extensive data.",
      "Compare your performance to past students.",
      "Turn weaknesses into strengths with our performance tracking."
    ],
    testimonial: {
      quote: "The readiness exams came out 3 days before my actual NCLEX and I got 'Very High' chance of passing. I really couldn't believe my scores but you guys were correct!",
      name: "Kathryn Dahiroc",
      status: "Passed - Next Gen NCLEX®"
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Column - Image (Mobile only) */}
          <div className="md:hidden bg-gray-200 h-[500px] rounded-xl flex items-center justify-center">
            <span className=""><img className='w-full h-full' src="https://cdn.prod.website-files.com/606392a644232d174453ec02/6930827c8e37db516a891119_nclex_bootcamp_readiness_exam_score_report.webp" alt="" /></span>

          </div>

          {/* Right Column - Content (Desktop: right side, Mobile: second) */}
          <div className="md:order-2">
            {/* Badge */}
            <span className="inline-block text-sm text-blue-600 font-semibold mb-3">
              {examsFeature.badge}
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {examsFeature.title}
            </h2>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {examsFeature.features.map((feature, index) => (
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
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-4 italic">
                "{examsFeature.testimonial.quote}"
              </p>

              {/* Student Info */}
              <div>
                <p className="font-semibold text-gray-900">
                  {examsFeature.testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {examsFeature.testimonial.status}
                </p>
                <a href="#" className="text-blue-600 text-sm font-medium mt-1 inline-block">
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image (Desktop: left side) */}
          <div className="hidden md:block md:order-1 bg-gray-200 h-[500px] rounded-xl flex items-center justify-center">
            <span className=""><img className='w-full h-full' src="https://cdn.prod.website-files.com/606392a644232d174453ec02/6930827c8e37db516a891119_nclex_bootcamp_readiness_exam_score_report.webp" alt="" /></span>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ReadinessExams