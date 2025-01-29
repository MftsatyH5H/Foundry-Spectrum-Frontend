import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import TestimonialCard from './components/testimonials/testimonialCard';
import TestimonialsList from './components/testimonials/testimonialList';
import StudentGallery from './components/studentsGallery/studentGallery';
import StudentGalleryList from './components/studentsGallery/studentGalleryList';
import RelatedCourses from './components/relatedCourses/relatedCourses';
import RelatedCoursesList from './components/relatedCourses/relatedCoursesList';
import CourseNavbar from './components/courseNavbar/courseNavbar';
import CourseContainer from './components/courseNavbar/courseContainer';

function App() {
  return (
    <>
      <TestimonialsList />
      <RelatedCoursesList />
      <StudentGalleryList />
    </>


  );
}

export default App;
