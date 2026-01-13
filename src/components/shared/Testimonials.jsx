import { FaStar } from 'react-icons/fa'

function Testimonials() {
  
  // Sample testimonials data
  const testimonials = [
    {
      image: "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/6841ecbb68412123be245ad2_jhon_romel_bagaporo.webp",
      name: "Jhon Romel Bagaporo",
      quote: "I passed the NCLEX in just 85 questions, and I couldn't have done it without the NCLEX Bootcamp.",
    },
    {
      image: "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/6841e3b14516fac4746f98e7_rhea_almero.webp",
      name: "Rhea Almero",
      quote: "Their customizable study schedule made learning easy for someone like me who has a hectic schedule.",
    },
    {
      image: "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/6841d65165718ffcec204aa0_raylen_courson.webp",
      name: "Raylen Courson",
      quote: "After using other question banks and failing the NCLEX twice, I finally found Bootcamp and PASSED!",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Students agree our questions are nearly identical to the NCLEX®
          </h2>
          <p className="text-xl text-gray-600">
            Over 50,000 nursing students have trusted NCLEX Bootcamp
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </p>

              {/* Student info */}
              <div className="flex items-center gap-3">
                {/* Profile Image */}
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                
                {/* Name and Role */}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">Passed - Next Gen NCLEX®</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials