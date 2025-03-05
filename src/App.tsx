import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
import MainNavbar from './components/navbar/MainNavbar';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { userType } from './static/userType.enum';
import Home from './pages/home';
import TestimonialsList from './components/testimonials/testimonialList';
function App() {
  const user = userType.student;
  
  function RenderUserRoutes () {
    if (user === userType.student){
      return (
        <>
          <MainNavbar />
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
