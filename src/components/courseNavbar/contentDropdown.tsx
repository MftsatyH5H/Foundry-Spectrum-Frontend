import { LockFilled, LockOutlined, PlayCircleFilled, QuestionCircleFilled, RightOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { LuClapperboard, LuFileQuestion } from 'react-icons/lu';
import { Chapter } from '../../types/course.type';

interface ContentDropdownProps {
    chapter: Chapter;
    isOpen?: boolean;
}

function ContentDropdown({ chapter, isOpen = false }: ContentDropdownProps) {
    const [open, setOpen] = useState(isOpen);
    return (
        <div className="w-full mx-auto border-x border-y border-borderPurple font-poppins">
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-between w-full text-white px-6 py-4 gap-5 text-left bg-darkPurple rounded-lg"
            >
                <div className='flex items-center gap-4 text-wrap'>
                    <RightOutlined rotate={open ? 90 : 0} className='text-[#e1ff00] px-3 transition-transform duration-200' />
                    <span className='font-bold'>Chapter {chapter.order_index}: {chapter.title}</span>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center gap-4 text-left text-sm text-lightGrey'>
                        <p className='flex items-center justify-center gap-1 font-bold'>{chapter.lessons.length} <span className='font-light'>Lessons</span></p>
                        <p className='flex items-center justify-center gap-1 font-bold'>{chapter.lessons.filter(lesson => lesson.type === 'QUIZ').length} <span className='font-light'>Quizes</span></p>
                        <p className='flex items-center justify-center gap-1 font-bold'>35 <span className='font-light'>Minute</span></p>
                    </div>
                </div>
            </button>
            {open && chapter.lessons.map((lesson, index) => (
                <div key={lesson.id} className="p-[24px] pl-[48px] bg-darkPurple text-[#8686a1] border-t-2 border-borderPurple flex items-center justify-between">
                    <div className='flex justify-center items-center'>
                        {lesson.type === 'LECTURE' ? (
                            <VideoCameraOutlined className='text-[#471f70] w-[24px] h-[24px]' />
                        ) : (
                            <QuestionCircleFilled className='text-[#471f70] w-[24px] h-[24px]' />
                        )}
                        <span className='text-lightGrey ml-2 font-[400]'>
                            Lesson {lesson.order_index}: {lesson.title}
                        </span>
                    </div>
                    <div className='flex justify-center items-center gap-[6px]'>
                        {lesson.is_free_preview ? (
                            <>
                                <span className='text-white font-light text-[16px]'>
                                    Free Preview
                                </span>
                                <PlayCircleFilled className='text-[#e1ff00] w-[16px] h-[16px]' />
                            </>
                        ) : (
                            <>
                                <span className='text-[#5f358a]'>Pro</span>
                                <LockFilled className='text-[#5f358a]' />
                            </>
                        )}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ContentDropdown