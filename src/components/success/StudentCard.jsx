/**
 * StudentCard Component
 * Individual student success story card
 */

import { FaChevronRight } from 'react-icons/fa'

function StudentCard({ student }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden group cursor-pointer">
      
      {/* Student Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={student.image}
          alt={student.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        
        {/* Student Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {student.name}
        </h3>

        {/* Status and Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            {student.status}
          </span>
          <span className="text-gray-600 text-sm">
            {student.date}
          </span>
        </div>

        {/* Arrow Icon */}
        <div className="flex items-center justify-end text-blue-600 group-hover:text-blue-700 transition-colors">
          <FaChevronRight className="text-lg" />
        </div>

      </div>

    </div>
  )
}

export default StudentCard