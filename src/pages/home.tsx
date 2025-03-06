import React from 'react'
import TestimonialsList from '../components/testimonials/testimonialList'
import StudentGalleryList from '../components/studentsGallery/studentGalleryList'
import SectionTitle from '../components/sectionTitle/SectionTitle'
function Home() {
  return (
    <div className='flex flex-col gap-2'>
      {/* Hero Section */}
      <div>
        
      </div>
      {/* Courses Section Title */}
      <div className='container'>
        <SectionTitle heading='Explore Our Top Courses' subHeading='Courses' description='Discover the best courses for 3D builders and animators.' />
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

      {/* How It Works Section*/}
      <div className='container'>

      </div>

      {/* RoadMap Section */}
      <div className='container'>

      </div>
      {/* Join our Instructor Section */}
      <div className='container'>

      </div>

      {/* Events Title */}
      <div className='container'>

      </div>

      {/* Events Section */}
      <div className='container'>

      </div>

      {/* Blogs Title */}
      <div className='container'>

      </div>

      {/* Blogs Section */}
      <div className='container'>
        
      </div>

      {/* Explore More Courses */}
      <div className='container'>

      </div>
    </div>
  )
}

export default Home