/**
 * PassGuarantee Component
 * Pass guarantee section with Dr. Emily's message
 */

import { FaCheckCircle } from 'react-icons/fa'

function PassGuarantee() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Badge Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <FaCheckCircle className="text-white text-4xl" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Pass the NCLEX®. Guaranteed.
          </h2>

          {/* Main Text */}
          <p className="text-lg text-gray-700 text-center mb-8">
            If you fail the NCLEX® after giving our program an honest try, just email me at{' '}
            <a href="mailto:team@bootcamp.com" className="text-blue-600 hover:underline">
              team@bootcamp.com
            </a>{' '}
            and I'll quickly refund your entire payment.
          </p>

          {/* Eligibility Criteria */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">You must meet the following eligibility criteria:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">•</span>
                <span className="text-gray-700">
                  You graduated from an accredited nursing program in the United States or Canada.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">•</span>
                <span className="text-gray-700">
                  You purchased NCLEX Bootcamp 2 Months or 3 Months of Access at least 30 days before your exam date.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">•</span>
                <span className="text-gray-700">
                  You completed all of the content on NCLEX Bootcamp.
                </span>
              </li>
            </ul>
          </div>

          {/* Closing Message */}
          <p className="text-gray-700 text-center mb-8">
            I want to make this an easy decision for you.
            <br />
            If you have any questions let me know, I'm always ready to help!
          </p>

          {/* Dr. Emily Signature */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
              {/* Profile image placeholder */}
            </div>
            <div>
              <p className="font-semibold text-gray-900">Dr. Emily Wilson</p>
              <p className="text-sm text-gray-600">Creator of NCLEX Bootcamp</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default PassGuarantee