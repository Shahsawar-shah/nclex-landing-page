/**
 * EducatorsHero Component
 * Desktop stays same - Mobile responsive added
 */

import { FaStar } from 'react-icons/fa'

function EducatorsHero() {

  const testimonials = [
    {
      image: "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/6841ecbb68412123be245ad2_jhon_romel_bagaporo.webp",
      text: "I used NCLEX Bootcamp to study for the NCLEX and I passed the exam with 85 questions on my first try! The NGN NCLEX case studies are very similar to the actual"
    },
    {
      image: "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/6841e3b14516fac4746f98e7_rhea_almero.webp",
      text: "10/10 recommend. They provide thorough rationales, have a mix of NGN questions, and offer video explanations for certain questions. Oh and did I mention I"
    }
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gray-900">

      {/* Background Image - Desktop layout (unchanged) */}
      <div className="absolute inset-0">
        {/* Desktop: Split layout - Hidden on mobile */}
        <div className="hidden md:flex absolute inset-0">
          {/* Left side - Completely dark */}
          <div className="w-1/3 bg-gray-900"></div>

          {/* Right side - Image with gradient overlay */}
          <div className="flex-1 relative">
            <img
              src="https://cdn.prod.website-files.com/606392a644232d174453ec02/67f8072c367516feefc9bf1f_anna_westby.webp"
              alt="Anna Westby, NCLEX Bootcamp Student"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay on image - dark on left side of image */}
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0  bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
          </div>
        </div>

        {/* Mobile: Full background with overlay - Shown only on mobile */}
        <div className="md:hidden absolute inset-0">
          <img
            src="https://cdn.prod.website-files.com/606392a644232d174453ec02/67f8072c367516feefc9bf1f_anna_westby.webp"
            alt="Anna Westby, NCLEX Bootcamp Student"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for mobile */}
          <div className="absolute inset-0 bg-gray-900/75"></div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-5xl mx-auto mt-6 text-center">

          {/* Main Heading - Smaller on mobile */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight px-4">
            Increase Your NCLEX® Pass Rates with NCLEX Bootcamp
          </h1>

          {/* Subheading - Smaller on mobile */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-10 font-normal px-4">
            Help your students pass the NCLEX® the first time. Guaranteed.
          </p>

          {/* CTA Buttons - Full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-base shadow-xl transition-all transform hover:scale-105">
              Request a Free Demo
            </button>
            <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-base border-2 border-white/40 backdrop-blur-sm transition-all">
              Learn More
            </button>
          </div>

        </div>

        {/* Student Caption - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-6 right-6 md:bottom-8 md:right-12 text-white text-right">
          <p className="font-semibold text-base md:text-lg">Anna Westby, RN</p>
          <p className="text-white/60 text-xs md:text-sm">NCLEX Bootcamp Student</p>
        </div>
      </div>

      {/* Testimonials Section - Hidden on mobile */}
      <div className="hidden md:block relative z-10 pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/60 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-start gap-3">

                  {/* Profile Image */}
                  <img
                    src={testimonial.image}
                    alt="Student"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
                  />

                  {/* Content */}
                  <div className="flex-1">
                    {/* Stars */}
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xs" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white/85 text-xs md:text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  )
}

export default EducatorsHero