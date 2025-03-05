import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { userType } from './static/userType.enum';
import Home from './pages/home';
import TestimonialsList from './components/testimonials/testimonialList';
import StudentGallery from './components/studentsGallery/studentGallery';
import StudentGalleryList from './components/studentsGallery/studentGalleryList';
import RelatedCourses from './components/relatedCourses/relatedCourses';
import RelatedCoursesList from './components/relatedCourses/relatedCoursesList';
import CourseNavbar from './components/courseNavbar/courseNavbar';
import CourseContainer from './components/courseNavbar/courseContainer';
import Faq from './components/faq/Faq';
import FaqList from './components/faq/FaqList';
import LightboxGallery from './components/lightbox/lightBox';
import Coursecardbig from './components/courcecardbig/coursecardbig';
import Coursecardbiglist from './components/courcecardbig/coursecardbiglist';
import MainNavbar from './components/navbar/MainNavbar';
import Footer from './components/footer/footer';

import Instructoroverview from './components/Instructoroverview/Instructoroverview';

function App() {
  const user = userType.student;
  
  function RenderUserRoutes () {
    if (user === userType.student){
      return (
        <>
          <MainNavbar />
          <Footer />
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Router>
        </>
      )
    } else if (user === userType.instructor){
      return(
        <>
        </>
      )
    } else {
      return(
        <>
        </>
      )
    }
  }

  return (
    <>
    {RenderUserRoutes()}
    </>
  );
}

export default App;
