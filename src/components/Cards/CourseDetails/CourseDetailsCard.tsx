import React from 'react';
import { LuCalendarCheck2, LuCalendarFold, LuClock4 ,LuBookText  } from "react-icons/lu";

import { RiReceiptLine } from "react-icons/ri";
import { TbChartCandle } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";
import { TiStarOutline } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { TbMessage2Question } from "react-icons/tb";
import { useAuth } from '../../../hooks/useAuth';
import LoginFirstStep from '../../auth/Loginfirststep';











import { Course } from '../../../types/course.type';

interface CourseDetailsCardProps {
    course: Course;
    onStartLearning?: () => void;
}

const CourseDetailsCard: React.FC<CourseDetailsCardProps> = ({ course, onStartLearning }) => {
    const { handleBuyNow, showLoginPopup, closeLoginPopup } = useAuth();
    const isEnrolled = course.accessLevel === 'ENROLLED';
    
    return ( 
        <>
        <div className='w-full p-[24px] rounded-[12px] bg-[#140D21] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.10)]'>
            <div className='border-b-[1px] border-[#5F358A] flex flex-col gap-6'>
                <h1 className='font-[agrandir] font-bold text-[20px] leading-[150%] text-white'>{course.title}</h1>
                <div className='flex flex-row justify-between items-center pb-4'>
                    {!isEnrolled && (
                        <h1 className='text-[24px] text-foundryyellow leading-[140%] font-bold font-[Poppins]'>
                            {course.is_free ? 'Free' : `$${course.price.toFixed(2)}`}
                        </h1>
                    )}
                    {isEnrolled ? (
                        <div className='flex items-center gap-2'>
                            <span className='text-[24px] text-foundryyellow leading-[140%] font-bold font-[Poppins]'>
                                Enrolled
                            </span>
                        </div>
                    ) : (
                        <button 
                            onClick={() => handleBuyNow(course.id)}
                            className='rounded-lg border border-[#C3C3D9] bg-white py-[10px] px-[20px] font-[Poppins] font-medium text-[14px] leading-[150%] text-[#050517] hover:bg-gray-100 transition-colors'
                        >
                            Start Now
                        </button>
                    )}
                </div>
            </div>
                <div className='flex flex-col gap-[16px] mt-6'>
                    <div className='flex flex-row gap-[8px]'>
                        <LuCalendarCheck2 size={16} className='text-[#9898B5]'/>
                        <p className='font-[Poppins] font-semibold text-[14px] leading-[150%] text-white'>Start Date:</p>
                        <p className='font-[Poppins] font-light text-[14px] leading-[150%] text-white'>Instant access</p>
                    </div>
                    <div className='flex flex-row gap-[8px]'>
                        <LuCalendarFold size={16} className='text-[#9898B5]'/>
                        <p className='font-[Poppins] font-semibold text-[14px] leading-[150%] text-white'>Lessons:</p>
                        <p className='font-[Poppins] font-light text-[14px] leading-[150%] text-white'>{course.chapters.reduce((total, chapter) => total + chapter.lessons.length, 0)}+</p>
                    </div>
                    <div className='flex flex-row gap-[8px]'>
                        <RiReceiptLine  size={16} className='text-[#9898B5]'/>
                        <p className='font-[Poppins] font-semibold text-[14px] leading-[150%] text-white'>Category:</p>
                        <p className='font-[Poppins] font-light text-[14px] leading-[150%] text-white'>{course.categories.length > 0 ? course.categories[0].name : 'General'}</p>
                    </div>
                    <div className='flex flex-row gap-[8px]'>
                        <LuClock4  size={16} className='text-[#9898B5]'/>
                        <p className='font-[Poppins] font-semibold text-[14px] leading-[150%] text-white'>Duration:</p>
                        <p className='font-[Poppins] font-light text-[14px] leading-[150%] text-white'>{Math.round(course.duration_mins / 60)}+ Hours</p>
                    </div>
                    <div className='flex flex-row gap-[8px]'>
                        <TbChartCandle  size={16} className='text-[#9898B5]'/>
                        <p className='font-[Poppins] font-semibold text-[14px] leading-[150%] text-white'>Level:</p>
                        <p className='font-[Poppins] font-light text-[14px] leading-[150%] text-white'>{course.difficulty}</p>
                    </div>
                    <div className='flex flex-row gap-[8px]'>
                        <IoLanguage  size={16} className='text-[#9898B5]'/>
                        <p className='font-[Poppins] font-semibold text-[14px] leading-[150%] text-white'>Languages:</p>
                        <p className='font-[Poppins] font-light text-[14px] leading-[150%] text-white'>{course.languages.map(lang => lang.content).join(', ')}</p>
                    </div>
                    <div className='flex flex-row gap-[8px]'>
                        <TiStarOutline  size={16} className='text-[#9898B5]'/>
                        <p className='font-[Poppins] font-semibold text-[14px] leading-[150%] text-white'>Rating:</p>
                        <p className='font-[Poppins] font-light text-[14px] leading-[150%] text-white'>4.5</p>
                    </div>
                    <div className='flex flex-row gap-[8px]'>
                        <FiUser  size={16} className='text-[#9898B5]'/>
                        <p className='font-[Poppins] font-semibold text-[14px] leading-[150%] text-white'>Student Enrolled:</p>
                        <p className='font-[Poppins] font-light text-[14px] leading-[150%] text-white'>2300+</p>
                    </div>
                    <div className='flex flex-row gap-[8px]'>
                        <TbMessage2Question  size={16} className='text-[#9898B5]'/>
                        <p className='font-[Poppins] font-semibold text-[14px] leading-[150%] text-white'>Q&A:</p>
                        <p className='font-[Poppins] font-light text-[14px] leading-[150%] text-white'>24/7 at Discord</p>
                    </div>
                    <div className='flex flex-row gap-[8px]'>
                        <LuBookText  size={16} className='text-[#9898B5]'/>
                        <p className='font-[Poppins] font-semibold text-[14px] leading-[150%] text-white'>Lecture type:</p>
                        <p className='font-[Poppins] font-light text-[14px] leading-[150%] text-white'>Pre-Recorded</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[24px] pt-[16px] items-center mt-6'>
                    {isEnrolled ? (
                        <>
                            <h1 className='font-[Poppins] text-[16px] leading-[150%] text-white'>You're enrolled in this course!</h1>
                            <button 
                                onClick={onStartLearning}
                                className='bg-[#332052] rounded-lg text-foundryyellow font-[Poppins] font-bold text-[16px] leading-[150%] w-full py-3.5 hover:bg-[#3d2560] transition-colors'
                            >
                                Start Learning Journey
                            </button>
                        </>
                    ) : (
                        <>
                            <h1 className='font-[Poppins] text-[16px] leading-[150%] text-[#6D6D94]'>Let's Start your Journey Now</h1>
                            <button 
                                onClick={() => handleBuyNow(course.id)}
                                className='bg-[#332052] rounded-lg text-foundryyellow font-[Poppins] font-bold text-[16px] leading-[150%] w-full py-3.5 hover:bg-[#3d2560] transition-colors'
                            >
                                {course.is_free ? 'Free Enroll Now' : `$${course.price.toFixed(2)} Enroll Now`}
                            </button>
                        </>
                    )}
                </div>
        </div>

        {/* Login Popup */}
        {showLoginPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="relative">
                    <LoginFirstStep onClose={closeLoginPopup} />
                </div>
            </div>
        )}
        </>
     );
}
 
export default CourseDetailsCard;