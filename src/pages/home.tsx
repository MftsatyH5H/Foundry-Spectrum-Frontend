import React from 'react'
import TestimonialsList from '../components/testimonials/testimonialList'
import StudentGalleryList from '../components/studentsGallery/studentGalleryList'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import HeroSection from '../components/herosection/hero'
import Coursecardbiglist from '../components/courcecardbig/coursecardbiglist'
import Blogsliderlist from '../components/blogsslider/blogsliderlist'
import Footer from '../components/footer/footer'
function Home() {
  return (
    <div className='flex flex-col gap-[120px]'>
      {/* Hero Section */}
      <div>
        <HeroSection/>
      </div>
      {/* Courses Section Title */}

      {/* Courses Section */}
      <div className='container'>
      <SectionTitle heading='Explore Our Top Courses' subHeading='Courses' description='Discover the best courses for 3D builders and animators.' />
        <Coursecardbiglist />
      </div>
      {/* Private Mentor Services */}
      <div className='container'>
        
      </div>
      {/* Instructor Section */}
      <div className='container py-[112px]'>
        <SectionTitle heading='Explore Our Top Courses' subHeading='Courses' description='Discover the best courses for 3D builders and animators.' />
      </div>

      {/* Testimonials Section */}
      <div className='container'>
        <TestimonialsList />
      </div>

      {/* Student Gallery Title */}
      <div className='container flex flex-col gap-[32px]'>
        <SectionTitle heading='Students Gallery' subHeading='Success Stories' description='Learning the basic structure of the Blueprint visual' />
        <StudentGalleryList />
      </div>

      {/* Blogs Section */}
        <Blogsliderlist />

      {/* Explore More Courses */}
      <div className='container'>

      </div>
    <Footer />
    </div>
  )
}

export default Home