/**
 * ReviewsGrid Component
 * Grid layout for review cards with filtering
 */

import { useState, useEffect } from 'react'
import ReviewCard from './ReviewCard'
import { reviewsData } from '../../data/reviewsData'

function ReviewsGrid({ searchQuery, activeFilters }) {
  const [filteredReviews, setFilteredReviews] = useState(reviewsData)

  useEffect(() => {
    let results = reviewsData

    // Filter by search query
    if (searchQuery) {
      results = results.filter(review =>
        review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.fullReview.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by active tags
    if (activeFilters.length > 0) {
      results = results.filter(review =>
        activeFilters.some(filter => review.tags.includes(filter))
      )
    }

    setFilteredReviews(results)
  }, [searchQuery, activeFilters])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reviews Count */}
        <p className="text-gray-600 mb-8">
          Showing {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''}
        </p>

        {/* Reviews Grid */}
        {filteredReviews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No reviews found. Try adjusting your search or filters.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}

export default ReviewsGrid