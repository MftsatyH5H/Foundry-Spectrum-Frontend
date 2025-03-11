import React from 'react'
import AboutUsContent from '../components/Aboutuscontent/aboutuscontent'
import ExploreCoursescard from '../components/Cards/exploreCourses/explorecourses'

function AboutUs() {
  return (
    <>
    <div className='container px-[64px] pt-[136px]'>
      <AboutUsContent/>
    </div>
    <div className='my-10 flex items-center justify-center px-[64px]'>
      <ExploreCoursescard />
    </div>
    
    </>
  )
}

export default AboutUs