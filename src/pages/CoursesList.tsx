import React, { useState, useEffect } from 'react'
import CoursesFilter from '../components/coursesFilter/CoursesFilter'
import Coursecardbiglist from '../components/courcecardbig/coursecardbiglist'
import ExploreCoursescard from '../components/Cards/exploreCourses/explorecourses'
import { CoursesAPIs } from '../api'
import { Course } from '../types/course.type'

function CoursesList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const coursesAPI = new CoursesAPIs();
        const response = await coursesAPI.getCourses(14, 0, 'CREATED_AT');
        setCourses(response.data.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to load courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className='flex flex-col gap-[24px] justify-center mt-[136px]'>
        <div className='container mx-auto'>
          <CoursesFilter />
        </div>
        <div className='container mx-auto flex justify-center items-center h-64'>
          <div className='text-white text-lg'>Loading courses...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex flex-col gap-[24px] justify-center mt-[136px]'>
        <div className='container mx-auto'>
          <CoursesFilter />
        </div>
        <div className='container mx-auto flex justify-center items-center h-64'>
          <div className='text-red-500 text-lg'>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-[24px] justify-center mt-[136px]'>
        <div className='container mx-auto'>
          <CoursesFilter />
        </div>
        <div className='container mx-auto'>
          <Coursecardbiglist courses={courses} />
        </div>
        <div className='container mx-auto my-20'>
          <ExploreCoursescard />
        </div>
    </div>
  )
}

export default CoursesList