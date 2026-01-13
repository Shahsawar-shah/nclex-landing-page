/**
 * SuccessHero Component
 * Hero with 70% dark left, 30% image right
 */

function SuccessHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image - Desktop layout (unchanged) */}
      <div className="absolute inset-0">
        {/* Desktop: Split layout - Hidden on mobile */}
        <div className="hidden md:flex absolute inset-0">
          {/* Left side - Completely dark */}
          <div className="w-1/2 bg-gray-900"></div>

          {/* Right side - Image with gradient overlay */}
          <div className="flex-1 relative">
            <img
              src="https://cdn.prod.website-files.com/606392a644232d174453ec02/6606b8f4b34ea0fbb0debb8c_julia_eder.jpg"
              alt="Anna Westby, NCLEX Bootcamp Student"
              className="w-full h-full object-cover object-right"
            />
            {/* Gradient overlay on image - dark on left side of image */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
          </div>
        </div>
      </div>
      {/* Mobile: Full background with overlay - Shown only on mobile */}
      <div className="md:hidden absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/606392a644232d174453ec02/6606b8f4b34ea0fbb0debb8c_julia_eder.jpg"
          alt="Anna Westby, NCLEX Bootcamp Student"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for mobile */}
        <div className="absolute inset-0 bg-gray-900/75"></div>
      </div>


      {/* Content - Centered in dark area */}
      <div className="relative z-10 w-full py-20 px-4 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center">

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Become Our Next NCLEX® Success Story
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Busy college student? Retaking? Non-traditional? We've helped a student like you. Check out the success stories of our featured students.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl transition-all transform hover:scale-105">
                Start Studying
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white px-10 py-5 rounded-full font-semibold text-lg border-2 border-white/40 backdrop-blur-sm transition-all">
                Share Your Success Story
              </button>
            </div>

          </div>
        </div>


        {/* Student Caption - Bottom Right (Desktop only) */}
        <div className="hidden md:block absolute bottom-8 right-8 lg:right-12 text-white text-right">
          <p className="font-semibold text-lg">Julia Eder, RN</p>
          <p className="text-white/70 text-sm">NCLEX Bootcamp Student</p>
        </div>
      </div>

    </section >
  )
}

export default SuccessHero