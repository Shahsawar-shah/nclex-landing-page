function PricingHero() {
  return (
    <section className="relative  h-[500px] md:h-[400px] flex items-center overflow-hidden">

      {/* Background Layout */}
      <div className="absolute inset-0">
        {/* Desktop Layout - Modified */}
        <div className="hidden md:flex absolute inset-0">

          {/* Left side - 70% Dark Background */}
          <div className="w-1/3 bg-gray-900"></div>

          {/* Right side - 30% Image with overlay */}
          <div className="flex-1 relative">
            <img
              src="https://cdn.prod.website-files.com/606392a644232d174453ec02/64e4b7169e9dbece22bb2021_maithili_patel_wide.jpg"
              alt="Anna Westby, NCLEX Bootcamp Student"
              className="w-full h-full object-cover object-center" // Changed to object-center
            />
            {/* Black Overlay on Image */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Gradient overlay for smooth transition */}
            <div className="absolute inset-0  bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
          </div>

        </div>
      </div>

      {/* Mobile Layout (unchanged) */}
      <div className="md:hidden absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/606392a644232d174453ec02/64e4b7169e9dbece22bb2021_maithili_patel_wide.jpg"
          alt="Anna Westby, NCLEX Bootcamp Student"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
      </div>

      {/* Content - Centered in left 70% dark area */}
      <div className="relative z-10 w-full py-20 px-4 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center">

            {/* Main Heading */}
            <h1 className="text-4xl  my-[100px] sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pass the NCLEX® <br /> Guaranteed.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Choose a membership below and take advantage of our current sales.
            </p>
          </div>
        </div>
      </div>

      {/* Student Caption - On Image (Right 30% section) */}
      <div className="hidden md:block absolute bottom-8 right-[15%] text-white text-right">
        <p className="font-semibold text-lg">Julia Eder, RN</p>
        <p className="text-white/70 text-sm">NCLEX Bootcamp Student</p>
      </div>

    </section>
  )
}

export default PricingHero