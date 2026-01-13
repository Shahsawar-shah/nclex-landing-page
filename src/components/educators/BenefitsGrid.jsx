/**
 * BenefitsGrid Component
 * Key benefits for educators
 */

import { FaChartLine, FaUsers, FaDesktop, FaDollarSign } from 'react-icons/fa'

function BenefitsGrid() {
  
  const benefits = [
    {
      icon: <FaChartLine className="text-5xl text-blue-600" />,
      title: "Track Student Progress",
      description: "Monitor individual student performance and identify at-risk students with our comprehensive educator dashboard."
    },
    {
      icon: <FaUsers className="text-5xl text-blue-600" />,
      title: "Improve Pass Rates",
      description: "Join dozens of nursing programs that have improved their NCLEX® pass rates with our proven study platform."
    },
    {
      icon: <FaDesktop className="text-5xl text-blue-600" />,
      title: "Easy-to-Use Dashboard",
      description: "Access detailed analytics, performance reports, and student progress tracking through our intuitive educator portal."
    },
    {
      icon: <FaDollarSign className="text-5xl text-blue-600" />,
      title: "Bulk Pricing Available",
      description: "Get affordable institutional pricing for your entire program. Contact us for a custom quote that fits your budget."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Nursing Programs Choose NCLEX Bootcamp
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to support your students' NCLEX® success
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-xl transition-all"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BenefitsGrid