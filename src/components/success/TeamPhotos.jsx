/**
 * TeamPhotos Component
 * Team member photos grid
 */

import { teamPhotos } from '../../data/successStoriesData'

function TeamPhotos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Want to be featured as our next success story?
          </h2>
        </div>

        {/* Team Photos Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {teamPhotos.map((photo, index) => (
            <img 
              key={index}
              src={photo}
              alt={`Team member ${index + 1}`}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-lg hover:scale-110 transition-transform"
            />
          ))}
        </div>

        {/* Message */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Did you recently pass the NCLEX? Share your success story with our team to become our next featured student!
          </p>
          <p className="text-2xl">❤️ Bootcamp.com</p>
        </div>

      </div>
    </section>
  )
}

export default TeamPhotos