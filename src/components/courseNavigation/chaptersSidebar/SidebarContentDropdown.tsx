import React, { useState } from 'react'
import { Chapter } from '../../../types/course.type'

interface SidebarContentDropdownProps {
    chapter: Chapter;
    isOpen?: boolean;
    onLessonSelect?: (lessonId: string) => void;
    currentLessonId?: string;
}

function SidebarContentDropdown({ chapter, isOpen = false, onLessonSelect, currentLessonId }: SidebarContentDropdownProps) {
    const [open, setOpen] = useState(isOpen);

    const getLessonIcon = (lessonType: string) => {
        switch (lessonType.toLowerCase()) {
            case 'video':
                return (
                    <div className="w-6 h-6 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 5v10l7-5-7-5z"/>
                        </svg>
                    </div>
                );
            case 'quiz':
                return (
                    <div className="w-6 h-6 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                        </svg>
                    </div>
                );
            default:
                return (
                    <div className="w-6 h-6 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                        </svg>
                    </div>
                );
        }
    };

    const getLessonTypeText = (lessonType: string) => {
        switch (lessonType.toLowerCase()) {
            case 'video':
                return 'Lesson';
            case 'quiz':
                return 'Quiz';
            default:
                return 'Lesson';
        }
    };

    return (
        <div className="w-full bg-darkPurple border border-borderPurple rounded-lg overflow-hidden">
            {/* Chapter Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full px-4 py-3 flex flex-col items-center justify-between bg-darkPurple hover:bg-mediumPurple transition-colors duration-200"
            >
                <div className="flex items-center">
                    {/* Arrow Icon */}
                    <div className="w-5 h-5 flex items-center justify-center">
                        <svg 
                            className={`w-4 h-4 text-foundryyellow transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                        </svg>
                    </div>
                    <h3 className="text-white font-medium text-sm">
                        {chapter.title}
                    </h3>
                </div>
                
                {/* Chapter Summary */}
                <div className="flex items-center space-x-4 text-xs text-lightGrey">
                    <span className="flex items-center space-x-1">
                        <span className="font-medium">{chapter.lessons.length}</span>
                        <span>Lessons</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <span className="font-medium">{chapter.lessons.filter(lesson => lesson.type.toLowerCase() === 'quiz').length}</span>
                        <span>Quizzes</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <span className="font-medium">35</span>
                        <span>Minute</span>
                    </span>
                </div>
            </button>

            {/* Chapter Content */}
            {open && (
                <div className="bg-darkPurple border-t border-borderPurple">
                    {chapter.lessons.map((lesson, index) => (
                        <div 
                            key={lesson.id} 
                            className={`px-4 py-3 border-b border-borderPurple last:border-b-0 cursor-pointer ${
                                currentLessonId === lesson.id.toString() ? 'bg-foundryyellow bg-opacity-20' : 
                                'hover:bg-mediumPurple'
                            } transition-colors duration-200`}
                            onClick={() => onLessonSelect?.(lesson.id.toString())}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3 flex-1">
                                    {/* Lesson Icon */}
                                    {getLessonIcon(lesson.type)}
                                    
                                    {/* Lesson Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-white text-sm font-medium">
                                                {getLessonTypeText(lesson.type)} {lesson.order_index}: {lesson.title}
                                            </span>
                                        </div>
                                        
                                        {/* Lesson Duration */}
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className="text-lightGrey text-xs">10 Min</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SidebarContentDropdown
