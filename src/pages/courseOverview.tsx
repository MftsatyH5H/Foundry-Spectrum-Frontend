import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CourseVideo from '../components/courseNavbar/CourseVideo'
import CourseContainer from '../components/courseNavbar/courseContainer'
import RelatedCoursesList from '../components/relatedCourses/relatedCoursesList'
import { selectedCourseAPIs } from '../api'
import { Course } from '../types/course.type'

function CourseOverview() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) {
        setError('Course ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const courseAPI = new selectedCourseAPIs();
        const response = await courseAPI.getCourseByIdApi(id);
        setCourse(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching course:', err);
        setError('Failed to load course. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='text-white text-lg'>Loading course...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='text-red-500 text-lg'>{error}</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='text-white text-lg'>Course not found</div>
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
        {/* Course Intro Video */}
        <div>
          <CourseVideo course={course} />
        </div>
        {/* Course Overview */}
        <div className='mb-10'>
            <CourseContainer course={course} />
        </div>
          {/* <RelatedCoursesList /> */}
          
    </div>
  )
}

export default CourseOverview