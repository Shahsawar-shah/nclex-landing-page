/**
 * FeaturedStudents Component
 * Grid of featured student success stories
 */

import StudentCard from './StudentCard'
import { successStoriesData } from '../../data/successStoriesData'

function FeaturedStudents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every month, we feature one student who passed their NCLEX with Bootcamp. See how Bootcamp helped them achieve their nursing dreams:
          </p>
        </div>

        {/* Students Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {successStoriesData.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedStudents