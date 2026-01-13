/**
 * StudentPhotosGrid Component
 * Grid of student photos
 */

function StudentPhotosGrid() {
  
  const studentPhotos = [
    "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/66cb57e1bb6548b070ea914a_buzTWjJ9k7SXT7LyMKekrs1pu3xzvhMOA88sARPBaPg%20(1).jpg",
    "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/66072d1a41db5479a4064535_IMG-add260e3505cd80ce66f004f6307d9cf-V%20(1)%20(1).jpg",
    "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/6607302ee4732dcda06c5a2b_IMG_7605%20(1).jpg",
    "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/6553c3d5e109a0741217fa62_louren_arches.jpg",
    "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/6607316d6d1a866fa8d7ecd5_IMG_5964%20(1).jpg",
    "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/66cb60e3515f386c1fd5f413_E-HBARDItpXvPXtNTSOFqogoDyOKZhmXgB4u3sJjKBk%20(1).jpg",
    "https://cdn.prod.website-files.com/60789a45beb6eb469601750e/6542a7f3079131cc1c4045e0_jhun_roel_vega.jpg"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            "10/10, would recommend this program to everyone!"
          </h2>
          <p className="text-xl text-gray-600">
            1,000's of nursing students are trusting NCLEX Bootcamp to help them pass the Next Gen NCLEX®. Read some more reviews below.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {studentPhotos.map((photo, index) => (
            <img 
              key={index}
              src={photo}
              alt={`Student ${index + 1}`}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg hover:scale-110 transition-transform"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default StudentPhotosGrid