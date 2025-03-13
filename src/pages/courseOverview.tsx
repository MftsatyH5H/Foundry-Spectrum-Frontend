import React from 'react'
import CourseVideo from '../components/courseNavbar/CourseVideo'
import CourseContainer from '../components/courseNavbar/courseContainer'
import RelatedCoursesList from '../components/relatedCourses/relatedCoursesList'

function CourseOverview() {
  return (
    <div className='flex flex-col mt-[72px]'>
        {/* Course Intro Video */}
        <div>
          <CourseVideo />
        </div>
        {/* Course Overview */}
        <div>
            <CourseContainer />
        </div>
        <RelatedCoursesList />
    </div>
  )
}

export default CourseOverview