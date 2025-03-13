import React from 'react'
import CoursesFilter from '../components/coursesFilter/CoursesFilter'
import Coursecardbiglist from '../components/courcecardbig/coursecardbiglist'
import ExploreCoursescard from '../components/Cards/exploreCourses/explorecourses'

function CoursesList() {
  return (
    <div className='flex flex-col gap-[24px] justify-center mt-[136px]'>
        <div className='container mx-auto'>
          <CoursesFilter />
        </div>
        <div>
          <Coursecardbiglist />
        </div>
        <div>
          <ExploreCoursescard />
        </div>
    </div>
  )
}

export default CoursesList