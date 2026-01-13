/**
 * ReadinessExamsSection Component
 * Highlight readiness exam features
 */

import { FaStar } from 'react-icons/fa'

function ReadinessExamsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div>
            <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
              NCLEX® Readiness Exams
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Predict your students' chances of passing with 4 NCLEX® Readiness Exams
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg">
              Students can take comprehensive readiness exams that accurately predict their likelihood of passing the NCLEX® on their first attempt.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Get an accurate pass prediction based on extensive historical data</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Compare student performance to past successful test-takers</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Identify weak subject areas that need additional focus</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Track improvement over time with multiple exam attempts</span>
              </li>
            </ul>

            {/* Student Testimonial */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "The readiness exams came out 3 days before my actual NCLEX and I got 3 very high chance of passing. You guys were correct!"
              </p>
              <p className="font-semibold text-gray-900">- Kathryn D., Passed NCLEX®</p>
            </div>
          </div>

          {/* Image Side */}
          <div>
            <div className="bg-gradient-to-br   rounded-2xl shadow-2xl p-8 aspect-square flex items-center justify-center">
              {/* Readiness Exam Preview */}
              
                <img src="https://cdn.prod.website-files.com/606392a644232d174453ec02/6776ccf1d418210a64d7f33d_nclex_readiness_exam_2025.webp" alt="" />
              
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ReadinessExamsSection