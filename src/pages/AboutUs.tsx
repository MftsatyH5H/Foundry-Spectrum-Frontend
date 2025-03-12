import React from 'react'
import AboutUsContent from '../components/Aboutuscontent/aboutuscontent'
import ExploreCoursescard from '../components/Cards/exploreCourses/explorecourses'

function AboutUs() {
  return (
    <>
    <div className='container mx-auto pt-[136px]'>
      <AboutUsContent/>
    </div>
    <div className='my-10 container mx-auto'>
      <ExploreCoursescard />
    </div>
    
    </>
  )
}

export default AboutUs