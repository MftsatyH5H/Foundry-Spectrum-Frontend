import React from 'react'
import ContentDropdown from './contentDropdown'
import { Course } from '../../types/course.type'

interface ContentDropdownListProps {
    course: Course;
}

function ContentDropdownList({ course }: ContentDropdownListProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-[16px]'>
        {course.chapters
            .sort((a, b) => a.order_index - b.order_index)
            .map((chapter, index) => (
                <ContentDropdown 
                    key={chapter.id} 
                    chapter={chapter} 
                    isOpen={index === 0} // First chapter open by default
                />
            ))}
    </div>
  )
}

export default ContentDropdownList