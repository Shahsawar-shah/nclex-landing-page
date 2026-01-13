/**
 * SearchFilter Component
 * Search bar and filter tags for reviews
 */

import { FaSearch } from 'react-icons/fa'
import { filterTopics } from '../../data/reviewsData'

function SearchFilter({ searchQuery, setSearchQuery, activeFilters, setActiveFilters }) {
  
  // Toggle filter
  const toggleFilter = (topic) => {
    if (activeFilters.includes(topic)) {
      setActiveFilters(activeFilters.filter(t => t !== topic))
    } else {
      setActiveFilters([...activeFilters, topic])
    }
  }

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Box */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            Search Reviews
          </label>
          <div className="relative">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for keywords..."
              className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900"
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        {/* Filter Tags */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            Filter by topic:
          </label>
          <div className="flex flex-wrap gap-2">
            {filterTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => toggleFilter(topic)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilters.includes(topic)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default SearchFilter