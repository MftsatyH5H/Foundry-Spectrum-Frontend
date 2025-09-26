import React, { useEffect, useRef, useState } from 'react';
import { PlayCircleFilled, ArrowLeftOutlined } from '@ant-design/icons';
import { Course } from '../../types/course.type';
import CoursesAPIs from '../../api/courses.api';
import { useAuth } from '../../hooks/useAuth';
import LoginFirstStep from '../auth/Loginfirststep';

interface CourseVideoProps {
  course: Course;
  onStartLearning?: () => void;
}

interface VideoData {
  otp: string;
  playbackInfo: string;
}

function CourseVideo({ course, onStartLearning }: CourseVideoProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const coursesAPI = new CoursesAPIs();
  const { handleBuyNow, showLoginPopup, closeLoginPopup } = useAuth();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const buttonSize = 200; // Approximate button size to avoid crossing edges
    const halfButton = buttonSize / 2;

    // Calculate new x, y positions relative to center
    let x = e.clientX - left - width / 2;
    let y = e.clientY - top - height / 2;

    // Clamp the values to prevent overflow
    x = Math.max(-width / 2 + (halfButton - 10), Math.min(width / 2 - (halfButton - 10), x));
    y = Math.max(-height / 2 + (halfButton - 70), Math.min(height / 2 - (halfButton - 70), y));

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleWatchIntro = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      const response = await coursesAPI.getCourseIntroVideo(course.id);
      setVideoData(response.data);
      setShowVideo(true);
    } catch (error) {
      console.error('Error fetching intro video:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToPreview = () => {
    setShowVideo(false);
    setVideoData(null);
  };
  // Helper functions
  const getPrimaryCategory = () => {
    return course.categories.length > 0 ? course.categories[0].name : 'General';
  };

  const getLanguages = () => {
    return course.languages.map(lang => lang.name).join(' / ');
  };

  const formatPrice = () => {
    if (course.is_free) {
      return 'Free';
    }
    return `$${course.price.toFixed(2)}`;
  };

  const getInstructorName = () => {
    if (course.instructors && course.instructors.length > 0) {
      const instructor = course.instructors[0];
      return `${instructor.firstName} ${instructor.lastName}`;
    }
    return 'Instructor';
  };

  const getInstructorProfession = () => {
    if (course.instructors && course.instructors.length > 0) {
      return course.instructors[0].profession || 'Instructor';
    }
    return 'Instructor';
  };

  const getInstructorStats = () => {
    return {
      courses: 10,
      hours: 200
    };
  };

  const getInstructorImage = () => {
    // For now using a placeholder, you can add instructor image URL to the instructor object
    return 'profile.png';
  };

  const getInstructorDisplayText = () => {
    if (course.instructors && course.instructors.length > 1) {
      return `${getInstructorName()} +${course.instructors.length - 1} more`;
    }
    return getInstructorName();
  };

  const getCourseDuration = () => {
    if (course.duration_mins) {
      const hours = Math.floor(course.duration_mins / 60);
      const minutes = course.duration_mins % 60;
      return `${hours}h ${minutes}m`;
    }
    return 'N/A';
  };

  const getCourseTools = () => {
    if (course.tools && course.tools.length > 0) {
      return course.tools.map(tool => tool.name).join(', ');
    }
    return 'Various tools';
  };

  return (
    <div className="flex relative items-center content-center course-title-div">
      {!showVideo ? (
        <div style={{ zIndex: -200 }} className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg course-title-div shadow-lg">
          <img
            src={course.thumbnail_url.replace('localstack-dev', 'localhost')}
            alt="Course Image"
            className="w-full h-full course-image object-cover transition-transform grayscale hover:grayscale-0 hover:scale-110"
          />
        </div>
      ) : (
        <div style={{ zIndex: 200 }} className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg course-title-div shadow-lg">
          {videoData && (
            <iframe 
              className="w-full h-full"
              src={`https://player.vdocipher.com/v2/?otp=${videoData.otp}&playbackInfo=${videoData.playbackInfo}`}
              allowFullScreen={true} 
              allow="encrypted-media"
              style={{ aspectRatio: '16/9' }}
            />
          )}
          {/* Back button */}
          <button
            onClick={handleBackToPreview}
            className="absolute top-20 left-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
            title="Back to preview"
          >
            <ArrowLeftOutlined className="text-lg" />
          </button>
        </div>
      )}
      <div className="w-8/12 mt-[72px] h-[600px] p-3 flex flex-col gap-9">
        {!showVideo &&(
          <>
          <div className='flex flex-col gap-3 mt-10 ml-6'>
          <span className='flex items-center justify-start text-lightGrey font-poppins gap-3 text-xs'>
            <span>Courses</span>
            <span>{'>'}</span>
            <span>{getPrimaryCategory()}</span>
            <span>{'>'}</span>
            <span>{course.title}</span>
          </span>
          <p className='text-white text-4xl font-bold'>{course.title}</p>
          <div className='flex items-center justify-start gap-5 text-[#afafc7]'>
            <div className='w-5 border border-[#afafc7] mt-1'></div>
            <span>{getPrimaryCategory()}</span>
            <span>For {course.difficulty}</span>
            <span>{getLanguages()}</span>
            <span>{getCourseDuration()}</span>
          </div>
          <p className='text-lightGrey mt-6'>{course.description}</p>
          {course.tools && course.tools.length > 0 && (
            <div className='mt-4'>
              <span className='text-lightGrey text-sm'>Tools: </span>
              <span className='text-[#afafc7] text-sm'>{getCourseTools()}</span>
            </div>
          )}
        </div>

        <div className='flex justify-start items-center mb-2 ml-6'>
          {course.accessLevel === 'ENROLLED' ? (
            <button 
              onClick={onStartLearning}
              className='bg-[#332052] text-[#cbe30a] font-semibold px-24 py-4 rounded-md hover:bg-[#3d2560] transition-colors'
            >
              Start Learning Journey
            </button>
          ) : (
            <button 
              onClick={() => handleBuyNow(course.id)}
              className='bg-[#332052] text-[#cbe30a] font-semibold px-24 py-4 rounded-md hover:bg-[#3d2560] transition-colors'
            >
              Buy Now {formatPrice()}
            </button>
          )}
        </div>
        <div className='flex items-center gap-[16px] ml-6'>
          <img 
            src={'/public/profile.png'} 
            alt={`${getInstructorName()} profile`}
            className='w-9 rounded-full border-2 border-foundryyellow' 
          />
          <div className='flex flex-col items-start justify-center'>
            <span className='font-poppins text-white font-semibold'>{getInstructorDisplayText()}</span>
            <span className='font-roboto text-lightGrey flex justify-center items-center gap-4'>
              <span>{getInstructorStats().courses} Courses</span>
              <span>{getInstructorStats().hours}+ Hours of teaching</span>
            </span>
          </div>
        </div>
          </>
        )}
      </div>
      {!showVideo && (
        <div
          className="relative w-4/5 h-[600px] mt-[72px] flex items-center justify-center overflow-hidden cursor-none"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={handleWatchIntro}
            disabled={isLoading}
            className="absolute py-4 px-6 font-semibold flex items-center content-center hover:border-foundryyellow bg-[#471F707A] border text-white shadow-lg transition-all duration-300 ease-out font-poppins gap-3 rounded-full watch-intro-button disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          >
            <PlayCircleFilled className='watch-now-icon' />
            {isLoading ? 'Loading...' : 'Watch Intro'}
          </button>
        </div>
      )}

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <LoginFirstStep onClose={closeLoginPopup} />
          </div>
        </div>
      )}

    </div>
  );
}

export default CourseVideo;
