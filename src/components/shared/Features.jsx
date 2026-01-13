import { FaCheck, FaStar } from 'react-icons/fa'

function Features() {

  // First feature - Questions
  const questionsFeature = {
    badge: "QUESTIONS BASED ON THE REAL 2026 NCLEX®",
    title: "Practice with questions exactly like the real NCLEX",
    features: [
      "1,900+ high-yield NCLEX® questions, vague like the real exam.",
      "Exam-like testing interface and content.",
      "Weekly updates based on student feedback."
    ],
    testimonial: {
      quote: "Bootcamp's questions are exactly like real NCLEX. I was surprised to see the similarity in the topics and the wording of the questions between Bootcamp and the real thing.",
      name: "Octavio Ordaz",
      status: "Passed - Next Gen NCLEX®"
    }
  }

  // Second feature - Cases  
  const casesFeature = {
    badge: "CASES BASED ON THE REAL 2026 NCLEX®",
    title: "Expert video walkthroughs of NCLEX® cases",
    features: [
      "Video walkthroughs that teach you how to think like an RN.",
      "High-yield cases likely to show up on your NCLEX®.",
      "50 cases covering the most common scenarios the NCLEX® asks."
    ],
    testimonial: {
      quote: "I passed my NCLEX Next Gen on my first attempt using only NCLEX Bootcamp. The case studies with video explanations were amazing and the study schedule helped keep me on track.",
      name: "Dayanna Valverde",
      status: "Passed - Next Gen NCLEX®"
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Feature 1 - Questions */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">

          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <span className="inline-block text-sm text-blue-600 font-semibold mb-3">
              {questionsFeature.badge}
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {questionsFeature.title}
            </h2>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {questionsFeature.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition mb-8">
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
                "{questionsFeature.testimonial.quote}"
              </p>

              {/* Student Info */}
              <div>
                <p className="font-semibold text-gray-900">
                  {questionsFeature.testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {questionsFeature.testimonial.status}
                </p>
                <a href="#" className="text-blue-600 text-sm font-medium mt-1 inline-block">
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className=" h-[500px] rounded-xl flex items-center justify-center">
            <span className=""><img className='w-full h-full ' src="https://cdn.prod.website-files.com/606392a644232d174453ec02/63fcf95a73cd74c62f0963f4_nclex_devices.jpeg" alt="" /></span>
          </div>

        </div>

        {/* Feature 2 - Cases (Reversed Layout) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">




          {/* Right Column - Content (Desktop order: right side) */}
          <div className="md:order-2">
            {/* Badge */}
            <span className="inline-block text-sm text-blue-600 font-semibold mb-3">
              {casesFeature.badge}
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {casesFeature.title}
            </h2>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {casesFeature.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition mb-8">
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
                "{casesFeature.testimonial.quote}"
              </p>

              {/* Student Info */}
              <div>
                <p className="font-semibold text-gray-900">
                  {casesFeature.testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {casesFeature.testimonial.status}
                </p>
                <a href="#" className="text-blue-600 text-sm font-medium mt-1 inline-block">
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Left Column - Image (Visible on mobile, hidden on desktop) */}
          <div className="md:hidden  rounded-xl flex items-center justify-center">
            <span className=""><img className='w-full h-full ' src="https://cdn.prod.website-files.com/606392a644232d174453ec02/6841f95af58378a3c5e6dc1a_nclex_cheat_sheet.webp" alt="" /></span>
          </div>

          {/* Right Column - Image (Hidden on mobile, visible on desktop) */}
          <div className="hidden md:block md:order-1  h-[500px] rounded-xl flex items-center justify-center">
            <span className=""><img className='w-full h-full' src="https://cdn.prod.website-files.com/606392a644232d174453ec02/65df71cab32ead57dab50285_case_study_with_video.png" alt="" /></span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Features