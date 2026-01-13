/**
 * Reviews Page
 * Complete student reviews page
 */

import { useState } from 'react'
import ReviewsHero from '../components/reviews/ReviewsHero'
import SearchFilter from '../components/reviews/SearchFilter'
import ReviewsGrid from '../components/reviews/ReviewsGrid'
import StudentPhotosGrid from '../components/reviews/StudentPhotosGrid'
import AppStoreRatings from '../components/reviews/AppStoreRatings'

function Reviews() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState([])

  return (
    <>
      {/* Hero Section */}
      <ReviewsHero />

      {/* Search & Filter */}
      <SearchFilter 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />

      {/* Reviews Grid */}
      <ReviewsGrid 
        searchQuery={searchQuery}
        activeFilters={activeFilters}
      />

      {/* Student Photos */}
      <StudentPhotosGrid />

      {/* App Store Ratings */}
      <AppStoreRatings />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pass the NCLEX® with Bootcamp
          </h2>
          <p className="text-xl mb-8">
            The NCLEX® doesn't have to be scary. We'll help you pass it - the first time. <strong>Start studying for free.</strong>
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg">
            Start Studying for Free
          </button>
        </div>
      </section>
    </>
  )
}

export default Reviews