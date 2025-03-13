import React from 'react'
import CoursesFilter from '../components/coursesFilter/CoursesFilter'
import Coursecardbiglist from '../components/courcecardbig/coursecardbiglist'

function CoursesList() {
  return (
    <div className='flex flex-col gap-[36px]'>
        <div className='container'>
          <CoursesFilter />
        </div>
        <div>
          <Coursecardbiglist />
        </div>
    </div>
  )
}

export default CoursesList