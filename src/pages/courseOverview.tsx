import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CourseVideo from '../components/courseNavbar/CourseVideo'
import CourseContainer from '../components/courseNavbar/courseContainer'
import RelatedCoursesList from '../components/relatedCourses/relatedCoursesList'
import { selectedCourseAPIs } from '../api'
import { Course } from '../types/course.type'
import CourseNavigation from './courseNavigation'

function CourseOverview() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [startedLearning, setStartedLearning] = useState(false);

  const handleStartLearning = () => {
    setStartedLearning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        {/* Course Intro Video or Course Navigation */}
        <div>
          {startedLearning ? (
            <CourseNavigation course={course} />
          ) : (
            <CourseVideo course={course} onStartLearning={handleStartLearning} />
          )}
        </div>
        {/* Course Overview */}
        <div className='mb-10'>
            <CourseContainer course={course} onStartLearning={handleStartLearning} />
        </div>
          {/* <RelatedCoursesList /> */}
          
    </div>
  )
}

export default CourseOverview