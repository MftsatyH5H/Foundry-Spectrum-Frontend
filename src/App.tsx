import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import StudentNavbar from './components/navbar/StudentNavbar';
import Register from './pages/register';
import { fetchUserData } from './state/slices/user.slice';
import { useAppDispatch } from './state/store/hooks';
import CourseNavigation from './pages/courseNavigation';

function App() {

  const user = useSelector((state: any) => state.user.type);
  const [isNavbarAllowed, setIsNavbarAllowed] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      //@ts-ignore
      dispatch(fetchUserData());
    }
  }, [dispatch]);

  useEffect(() => {
    if(
      [
        '/create-course',
        '/register',

      ].includes(location.pathname)
    ){
      setIsNavbarAllowed(false);
    } else{
      setIsNavbarAllowed(true);
    }
    
  },[location])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
                <Route path='/course-overview/:id' element={<CourseOverview />} />
                <Route path='/profile-instructor' element={<ProfileInstructor />} />
                <Route path='/create-course' element={<CreateCourse />} />
                <Route path='/register' element={<Navigate to="/profile" replace />} />
                <Route path='/course-navigation' element={<CourseNavigation />} />
                <Route path='*' element={<Navigate to="/profile" replace />} />
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
                <Route path='/course-overview/:id' element={<CourseOverview />} />
                <Route path='/profile-instructor' element={<ProfileInstructor />} />
                <Route path='/create-course' element={<CreateCourse />} />
                <Route path='/register' element={<Register />} />

              </Routes>
              {isNavbarAllowed && (<Footer />)}
              </>
          ):(<>

          </>)}
          </>
    );
}

export default App;
