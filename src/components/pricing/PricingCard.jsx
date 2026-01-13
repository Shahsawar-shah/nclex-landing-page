/**
 * PricingCard Component
 * Reusable pricing card with features and CTA
 * 
 * @param {string} title - Plan title (e.g., "1 Month")
 * @param {string} originalPrice - Original price with strikethrough
 * @param {string} salePrice - Current sale price
 * @param {number} savings - Amount saved
 * @param {string} description - Plan description
 * @param {array} features - List of features
 * @param {boolean} isPopular - Show "Most Popular" badge
 * @param {string} afterpayPrice - Afterpay payment amount
 * @param {boolean} hasGuarantee - Show pass guarantee feature
 */

import { FaCheck } from 'react-icons/fa'

function PricingCard({ 
  title, 
  originalPrice, 
  salePrice, 
  savings, 
  description, 
  features = [], 
  isPopular = false,
  afterpayPrice,
  hasGuarantee = false
}) {
  return (
    <div className={`relative bg-white rounded-2xl shadow-xl p-8 transition-all hover:shadow-2xl ${isPopular ? 'ring-4 ring-blue-600' : ''}`}>
      
      {/* Most Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
          Most Popular
        </div>
      )}

      {/* Plan Title */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title} of Access</h3>
      </div>

      {/* Pricing */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-gray-400 line-through text-2xl">{originalPrice}</span>
          <span className="text-5xl font-bold text-gray-900">{salePrice}</span>
          <span className="text-gray-600">USD</span>
        </div>
        <div className="text-green-600 font-semibold">
          Save ${savings} Instantly
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-center mb-6">
        {description}
      </p>

      {/* CTA Button */}
      <button className={`w-full py-4 rounded-full font-semibold text-lg mb-3 transition-all ${
        isPopular 
          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
          : 'bg-gray-900 hover:bg-gray-800 text-white'
      }`}>
        Get {title} of Access
      </button>

      {/* Afterpay Link */}
      <div className="text-center text-sm text-gray-600 mb-6">
        or <a href="#" className="text-blue-600 hover:underline">4 payments of ${afterpayPrice} with Afterpay</a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* What's Included */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
        
        {/* Features List */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                <FaCheck className="text-white text-xs" />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default PricingCard