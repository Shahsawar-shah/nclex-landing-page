/**
 * ReviewsHero Component
 * Hero section for reviews page with background image
 */

function ReviewsHero() {
  return (
    <section className="relative h-[500px] md:h-[300px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://cdn.prod.website-files.com/606392a644232d174453ec02/6509cc99a6220a46e24c6965_lala_haze_wide.jpg" 
          alt="NCLEX Bootcamp Student"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Student Reviews
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90">
          Read real student reviews of NCLEX Bootcamp. See why students trust us to pass the Next Gen NCLEX®.
        </p>
      </div>

      {/* Student Caption */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white text-sm z-20">
        <p className="font-semibold">Lala Haze, RN</p>
        <p className="text-white/80 text-xs">NCLEX Bootcamp Student</p>
      </div>

    </section>
  )
}

export default ReviewsHero