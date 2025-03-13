import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { userType } from './static/userType.enum';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import CoursesList from './pages/CoursesList';
import ProfileStudent from './pages/ProfileStudent';
import EditProfile from './pages/EditProfile';
import MainNavbar from './components/navbar/MainNavbar';
import Footer from './components/footer/footer';
import ProfileInstructor from './pages/ProfileInstructor';
import CourseOverview from './pages/courseOverview';
import CreateCourse from './pages/CreateCourse';
import { useSelector } from 'react-redux';
import StudentNavbar from './components/navbar/StudentNavbar';
function App() {

  const user = useSelector((state: any) => state.user.type);
  const [isNavbarAllowed, setIsNavbarAllowed] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if(
      [
        '/create-course',

      ].includes(location.pathname)
    ){
      setIsNavbarAllowed(false);
    }
    
  },[location])
  return (
          <>
          {user === userType.student ? (
            <>
            {isNavbarAllowed && (<StudentNavbar />)}  
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/courses' element={<CoursesList />} />
                <Route path='/profile' element={<ProfileStudent />} />
                <Route path='/profile-edit' element={<EditProfile />} />
                <Route path='/course-overview' element={<CourseOverview />} />
                <Route path='/profile-instructor' element={<ProfileInstructor />} />
                <Route path='/create-course' element={<CreateCourse />} />
              </Routes>
              
              {isNavbarAllowed && (<Footer />)}
              {/* <ChartOverview /> */}
            </>
          ) : user === userType.instructor ? (
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
          ) : user === userType.visitor ? (
            <>
            {isNavbarAllowed && (<MainNavbar />)}  
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/courses' element={<CoursesList />} />
                <Route path='/profile' element={<ProfileStudent />} />
                <Route path='/profile-edit' element={<EditProfile />} />
                <Route path='/course-overview' element={<CourseOverview />} />
                <Route path='/profile-instructor' element={<ProfileInstructor />} />
                <Route path='/create-course' element={<CreateCourse />} />
              </Routes>
              {isNavbarAllowed && (<Footer />)}
              </>
          ):(<>

          </>)}
          </>
    );
}

export default App;
