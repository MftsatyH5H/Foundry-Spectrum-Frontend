import React, { useState } from 'react'
import CourseSidebar from '../components/courseNavigation/chaptersSidebar/courseSidebar'
import CourseVideoPlayer from '../components/courseNavigation/videoPlayer/courseVideoPlayer'
import SidebarToggleButton from '../components/courseNavigation/SidebarToggleButton'
import { Course } from '../types/course.type'
import CoursesAPIs from '../api/courses.api'

interface CourseNavigationProps {
  course?: Course;
}

interface VideoData {
  otp: string;
  playbackInfo: string;
}

function courseNavigation({ course }: CourseNavigationProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const coursesAPI = new CoursesAPIs();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLessonSelect = async (lessonId: string) => {
    if (!course || currentLessonId === lessonId) return;
    
    setIsLoading(true);
    setCurrentLessonId(lessonId);
    
    try {
      const response = await coursesAPI.getLessonVideo(course.id, lessonId);
      setVideoData(response.data);
    } catch (error) {
      console.error('Error fetching lesson video:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex md:flex-row flex-col items-center justify-between mt-[72px] relative h-[600px]'>
        <div className={`transition-all duration-300 relative ${sidebarOpen ? 'md:w-[calc(100%-24rem)]' : 'w-full'}`}>
            <CourseVideoPlayer videoData={videoData} isLoading={isLoading} />
            <SidebarToggleButton isOpen={sidebarOpen} onToggle={toggleSidebar} />
        </div>
        
        {sidebarOpen && (
            <div className="transition-all duration-300 h-[600px]">
                <CourseSidebar 
                  course={course} 
                  onLessonSelect={handleLessonSelect}
                  currentLessonId={currentLessonId || undefined}
                />
            </div>
        )}
    </div>
  )
}

export default courseNavigation