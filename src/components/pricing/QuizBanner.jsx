/**
 * QuizBanner Component
 * Help users choose the right plan
 */

import { FaQuestionCircle, FaChevronRight } from 'react-icons/fa'

function QuizBanner() {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <a 
          href="#" 
          className="flex items-center justify-between bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
        >
          {/* Left: Icon + Text */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <FaQuestionCircle className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">
                Not sure which plan to choose?
              </h3>
              <p className="text-gray-600">
                Take our 30-second quiz to find the best plan for your timeline and study style.
              </p>
            </div>
          </div>

          {/* Right: Arrow */}
          <div className="flex-shrink-0">
            <FaChevronRight className="text-blue-600 text-2xl group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

      </div>
    </section>
  )
}

export default QuizBanner