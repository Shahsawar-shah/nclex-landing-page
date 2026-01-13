/**
 * DashboardFeature Component
 * Showcase educator dashboard features
 */

import { FaCheck } from 'react-icons/fa'

function DashboardFeature() {
  
  const features = [
    "Track individual student progress in real-time",
    "Identify at-risk students early with performance analytics",
    "Compare cohort performance against benchmarks",
    "View detailed readiness exam results and predictions",
    "Export data and generate custom reports",
    "Simple, intuitive interface that requires no training"
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
           <div>
            <div className="bg-gradient-to-br   rounded-2xl shadow-2xl p-8 aspect-square flex items-center justify-center">
              {/* Readiness Exam Preview */}
              
                <img src="https://cdn.prod.website-files.com/606392a644232d174453ec02/654bf741bcc7c69b496378b5_bowtie_question.png" alt="" />
              
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2">
            <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
              Educator Dashboard
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Monitor your students' NCLEX® preparation with data-driven insights
            </h2>
            
            <p className="text-gray-700 mb-8 text-lg">
              Our educator dashboard gives you complete visibility into your students' study progress, performance metrics, and readiness to take the NCLEX®.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <p className="text-gray-700 text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default DashboardFeature