import React from 'react'
import SidebarContentDropdown from './SidebarContentDropdown'
import { Course, Chapter } from '../../../types/course.type'

interface CourseSidebarProps {
  course?: Course;
  onLessonSelect?: (lessonId: string) => void;
  currentLessonId?: string;
}

function CourseSidebar({ course, onLessonSelect, currentLessonId }: CourseSidebarProps) {
  if (!course) {
    return (
      <div className="w-full md:w-96 h-screen overflow-hidden">
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-webkit">
          <div className="p-4 text-white">Loading course content...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-96 h-[600px] overflow-hidden bg-[#140d21]">
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-webkit">
            <div>
                {course.chapters
                    .sort((a: Chapter, b: Chapter) => a.order_index - b.order_index)
                    .map((chapter: Chapter, index: number) => (
                        <SidebarContentDropdown 
                            key={chapter.id} 
                            chapter={chapter} 
                            isOpen={index === 0}
                            onLessonSelect={onLessonSelect}
                            currentLessonId={currentLessonId}
                        />
                    ))}
            </div>
        </div>
    </div>
  )
}

export default CourseSidebar