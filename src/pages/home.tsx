import React from 'react'
import TestimonialsList from '../components/testimonials/testimonialList'
import StudentGalleryList from '../components/studentsGallery/studentGalleryList'
function Home() {
  return (
    <div className='flex flex-col gap-2'>
      {/* Hero Section */}
      <div>
        
      </div>
      {/* Courses Section Title */}
      <div className='container'>

      </div>

      {/* Courses Section */}
      <div className='container'>

      </div>
      {/* Private Mentor Services */}
      <div className='container'>

      </div>
      {/* Instructor Title */}
      <div className='container'>

      </div>
      {/* Instructors Section */}
      <div className='container'>

      </div>    
      {/* Testimonials Title */}
      <div className='container'>
        Testimonials
      </div>

      {/* Testimonials Section */}
      <div className='container'>
        <TestimonialsList />
      </div>

      {/* Student Gallery Title */}
      <div className='container'>

      </div>
      
      {/* Student Gallery Section */}
      <div className='container'>
        <StudentGalleryList />
      </div>
    </div>
  )
}

export default Home