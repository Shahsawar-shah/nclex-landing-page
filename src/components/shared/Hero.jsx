import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://cdn.prod.website-files.com/606392a644232d174453ec02/641458bd50fd80ebc8daa389_nclex_comp_1-transcode.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 via-black/70 to-black/30"></div>
      {/* Content - LEFT ALIGNED */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl text-white">

          {/* Badge */}
          <div className="inline-block text-yellow-500 text-black my-5 px-4 py-2 rounded-md text-sm font-bold mb-6 uppercase tracking-wide">
            2026 Edition
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
            Pass the NCLEX-RN®. Guaranteed.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
            Get the most representative NCLEX® questions with video walkthroughs, cheat sheets, readiness exams, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            {/* Button */}
            <button
              onClick={() => navigate('/login')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition"
            >
              Start Studying for Free
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/50 backdrop-blur-sm transition flex items-center justify-center gap-2">
              <span className="text-2xl">▶</span>
              See How it Works
            </button>
          </div>

          {/* Testimonial Card - LEFT ALIGNED */}
          <div className="bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-2xl flex gap-6">

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="https://img.freepik.com/free-photo/portrait-smiling-young-man-doctor-with-stethoscope-standing-with-arms-folded_171337-15538.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Raylen Courson"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-200 mb-4 text-lg leading-relaxed">
                "After using other question banks and failing the NCLEX twice, I finally found Bootcamp and PASSED! Bootcamp has the same vagueness as the NCLEX and fully prepared me for my NCLEX!"
              </p>

              {/* Author */}
              <p className="text-gray-300">
                <span className="font-bold text-white">Raylen Courson</span>, Passed - Next Gen NCLEX®
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero