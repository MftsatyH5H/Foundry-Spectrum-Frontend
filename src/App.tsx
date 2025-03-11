import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { userType } from './static/userType.enum';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import CoursesList from './pages/CoursesList';
import ProfileStudent from './pages/ProfileStudent';
import EditProfile from './pages/EditProfile';
import MainNavbar from './components/navbar/MainNavbar';
import Footer from './components/footer/footer';

function App() {
  const user = userType.student; // Replace this with dynamic user detection

  function RenderUserRoutes() {
    if (user === userType.student) {
      return (
        <>
          <MainNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/courses' element={<CoursesList />} />
            <Route path='/profile' element={<ProfileStudent />} />
            <Route path='/profile-edit' element={<EditProfile />} />
          </Routes>
          <Footer />
        </>
      );
    } else if (user === userType.instructor) {
      return (
        <>
          {/* <MainNavbar /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/courses' element={<CoursesList />} />
            {/* <Route path='/profile' element={<ProfileInstructor />} /> */}
            <Route path='/profile-edit' element={<EditProfile />} />
          </Routes>
        </>
      );
    } else {
      return <></>;
    }
  }

  return (
    <BrowserRouter>
      {RenderUserRoutes()}
    </BrowserRouter>
  );
}

export default App;
