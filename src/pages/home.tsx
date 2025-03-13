import React from 'react'
import TestimonialsList from '../components/testimonials/testimonialList'
import StudentGalleryList from '../components/studentsGallery/studentGalleryList'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import HeroSection from '../components/herosection/hero'
import Coursecardbiglist from '../components/courcecardbig/coursecardbiglist'
import Blogsliderlist from '../components/blogsslider/blogsliderlist'
import PrivateMentorHome from '../components/PrivateMentorHome/PrivateMentorHome'
import Footer from '../components/footer/footer'
import InstructorSliderHome from '../components/InstructorSliderHome/InstructorSliderHome'
import ExploreCoursescard from '../components/Cards/exploreCourses/explorecourses'
function Home() {
  return (
    <div className='flex flex-col gap-[120px]'>
      {/* Hero Section */}
      <div>
        <HeroSection/>
      </div>
      {/* Courses Section Title */}

      {/* Courses Section */}
      <div className='container mx-auto'>
      <SectionTitle heading='Explore Our Top Courses' subHeading='Courses' description='Discover the best courses for 3D builders and animators.' />
        <Coursecardbiglist />
      </div>
      {/* Private Mentor Services */}
      <div className='container mx-auto'>
        <PrivateMentorHome />
      </div>
      {/* Instructor Section */}
      <div className='container py-[112px] mx-auto'>
        <SectionTitle heading='Our Instractors' subHeading='Tagline' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
        <InstructorSliderHome />

      </div>

      {/* Testimonials Section */}
      <div className='container mx-auto flex flex-col gap-[120px]'>
        <div className='flex font-[agrandir] sticky top-[200px] -z-10 mb-44 flex-col content-center items-center p-[24px] font-bold text-[96px] leading-[96px] gap-0 text-foundryyellow'>
          <span>Real Feedback,</span>
          <span>Real Impact...</span>
        </div>
        <TestimonialsList className="justify-center"/>
      </div>

      {/* Student Gallery Title */}
      <div className='container flex flex-col gap-[32px] mx-auto'>
        <SectionTitle heading='Students Gallery' subHeading='Success Stories' description='Learning the basic structure of the Blueprint visual' />
        <StudentGalleryList />
      </div>
      <div className='container mx-auto'>
        <Blogsliderlist width='!w-[420px]'/>
      </div>
      {/* Blogs Section */}

      {/* Explore More Courses */}
      <div className='container mb-[120px]'>
          <ExploreCoursescard />
      </div>
    </div>
  )
}

export default Home