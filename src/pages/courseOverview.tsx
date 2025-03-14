import React from 'react'
import CourseVideo from '../components/courseNavbar/CourseVideo'
import CourseContainer from '../components/courseNavbar/courseContainer'
import RelatedCoursesList from '../components/relatedCourses/relatedCoursesList'

function CourseOverview() {
  return (
    <div className='flex flex-col'>
        {/* Course Intro Video */}
        <div>
          <CourseVideo />
        </div>
        {/* Course Overview */}
        <div className='mb-10'>
            <CourseContainer />
        </div>
          <RelatedCoursesList />
        
    </div>
  )
}

export default CourseOverview