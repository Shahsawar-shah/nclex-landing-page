/**
 * ReviewCard Component
 * Individual review card with student testimonial
 */

import { FaStar } from 'react-icons/fa'

function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all h-full flex flex-col">
      
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-lg" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-900 font-semibold mb-4 text-lg leading-relaxed">
        "{review.quote}"
      </p>

      {/* Full Review */}
      <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
        {review.fullReview}
      </p>

      {/* Student Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        <img 
          src={review.image} 
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900">{review.name}</p>
          <p className="text-sm text-gray-600">{review.status}</p>
        </div>
      </div>

    </div>
  )
}

export default ReviewCard