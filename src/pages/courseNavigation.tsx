import React, { useState } from 'react'
import CourseSidebar from '../components/courseNavigation/chaptersSidebar/courseSidebar'
import CourseVideoPlayer from '../components/courseNavigation/videoPlayer/courseVideoPlayer'
import SidebarToggleButton from '../components/courseNavigation/SidebarToggleButton'

function courseNavigation() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='flex md:flex-row flex-col items-center justify-between mt-[72px] relative'>
        {/* Video Player - Takes full width when sidebar is closed */}
        <div className={`transition-all duration-300 relative ${sidebarOpen ? 'md:w-[calc(100%-24rem)]' : 'w-full'}`}>
            <CourseVideoPlayer />
            {/* Toggle Button - Positioned relative to video container */}
            <SidebarToggleButton isOpen={sidebarOpen} onToggle={toggleSidebar} />
        </div>
        
        {/* Sidebar - Hidden when closed */}
        {sidebarOpen && (
            <div className="transition-all duration-300">
                <CourseSidebar />
            </div>
        )}
    </div>
  )
}

export default courseNavigation