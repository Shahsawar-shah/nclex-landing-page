/**
 * ContactSection Component
 * Contact form and information for educators
 */

function ContactSection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ask us about bulk institutional pricing
          </h2>
          
          <p className="text-xl mb-8 text-blue-100">
            We're fully committed to helping your students succeed on the NCLEX®. Let's discuss how NCLEX Bootcamp can support your program.
          </p>

          {/* Dr. Emily Info */}
          <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              
              {/* Profile Photo */}
              <img 
                src="https://cdn.prod.website-files.com/606392a644232d174453ec02/63ee3e7ccabe517e41ec1db5_emily_profile_small.jpeg"
                alt="Dr. Emily Wilson"
                className="w-24 h-24 rounded-full object-cover"
              />

              {/* Info */}
              <div className="text-center md:text-left flex-1">
                <p className="text-2xl font-bold mb-2">Dr. Emily Wilson, DNP, RN</p>
                <p className="text-gray-600 mb-4">Creator of NCLEX Bootcamp</p>
                <a 
                  href="mailto:nclex.partnerships@bootcamp.com"
                  className="text-blue-600 hover:underline font-semibold text-lg"
                >
                  nclex.partnerships@bootcamp.com
                </a>
              </div>

            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg">
              Schedule a Demo
            </button>
            <button className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-all border-2 border-white">
              Email Us
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactSection