import React from 'react'
import InstructorPreview from '../components/Instructoroverview/instructorpreview'
import Artportfolio from '../components/ArtPortfolio/Artportfolio'
import StudentGalleryList from '../components/studentsGallery/studentGalleryList'
import TestimonialsList from '../components/testimonials/testimonialList'
import Coursecardbiglist from '../components/courcecardbig/coursecardbiglist'
import ExploreCoursescard from '../components/Cards/exploreCourses/explorecourses'


function ProfileInstructor() {
  return (
    <div className='flex flex-col gap-[120px]'>
      <InstructorPreview />
      <div className='px-[24px]'>
        <Artportfolio />
      </div>
      <div className='container flex flex-col px-[24px] gap-[24px]'>
        <div className='flex flex-col'>
          <span className='text-foundryyellow font-bold text-2xl font-[agrandir]'>32+ Testimonials </span>
          <span className='text-lightGrey font-light text-sm font-[agrandir]'>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</span>
        </div>
        <TestimonialsList className="justify-center"/>
      </div>
      <div className='container flex flex-col px-[24px] gap-[24px]'>
        <div className='flex flex-col'>
          <span className='text-foundryyellow font-bold text-2xl font-[agrandir]'>Students Gallery (Success Stories)</span>
          <span className='text-lightGrey font-light text-sm font-[agrandir]'>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</span>
        </div>
        <StudentGalleryList />
      </div>
      <div className='container flex flex-col px-[24px] gap-[24px]'>
        <div className='flex flex-col'>
          <span className='text-foundryyellow font-bold text-2xl font-[agrandir]'>Courses</span>
          <span className='text-lightGrey font-light text-sm font-[agrandir]'>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</span>
          <Coursecardbiglist />
        </div>
      </div>
      <div className='container mb-[120px]'>
        <ExploreCoursescard />
      </div>
    </div>
  )
}

export default ProfileInstructor