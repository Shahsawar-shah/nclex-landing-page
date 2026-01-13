/**
 * AppStoreRatings Component
 * Display app store ratings
 */

function AppStoreRatings() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
          {/* App Store Rating */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center flex-1">
            <img 
              src="https://cdn.prod.website-files.com/606392a644232d174453ec02/6776dc39d9c37701eb6c1d4c_appstore_rating.webp"
              alt="App Store Rating"
              className="h-20 mx-auto mb-4"
            />
            <p className="text-4xl font-bold text-gray-900">4.9 ★</p>
            <p className="text-gray-600">11K Reviews</p>
          </div>

          {/* Play Store Rating */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center flex-1">
            <img 
              src="https://cdn.prod.website-files.com/606392a644232d174453ec02/6776dc390a3be95b6c402365_playstore_rating.webp"
              alt="Play Store Rating"
              className="h-20 mx-auto mb-4"
            />
            <p className="text-4xl font-bold text-gray-900">4.9 ★</p>
            <p className="text-gray-600">3K Reviews</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AppStoreRatings