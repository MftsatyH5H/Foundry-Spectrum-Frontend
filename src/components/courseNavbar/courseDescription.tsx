import { CalendarOutlined, CheckOutlined, QuestionCircleFilled } from '@ant-design/icons';
import React from 'react';
import ContentDropdown from './contentDropdown';
import ContentDropdownList from './contentDropdownList';
import TestimonialsList from '../testimonials/testimonialList';
import StudentGalleryList from '../studentsGallery/studentGalleryList';
import FaqList from '../faq/FaqList';
import { LuClock, LuShieldQuestion, LuClipboard, LuCalendar, LuMoveRight } from "react-icons/lu";
import StudentGalleryListSmall from '../studentsGallery/StudentGalleryListSmall';
import MentorshipRequests from '../Cards/MentorShipRequestsCard/MentorShipRequestsCard';
import PrivateClassroomcard from '../Cards/privateClassroom/privateClassroom';
import { Course } from '../../types/course.type';

interface CourseDescriptionProps {
    course: Course;
}

const CourseDescription: React.FC<CourseDescriptionProps> = ({ course }) => {
    return (
        <div className="mb-3 gap-[120px] flex flex-col mt-10">
            <div id="overview-section" className='flex flex-col gap-[16px]'>
                <p className='text-[#e3fd18] font-semibold font-poppins text-[18px]'>Learning Outcome</p>
                <div className='flex flex-row gap-[36px] mt-4'>
                    {course.outcome && course.outcome.split('\n').filter(outcome => outcome.trim()).slice(0, 3).map((outcome, index) => (
                        <div key={index} className='flex items-start text-white font-light gap-[12px] flex-1'>
                            <CheckOutlined className='mt-1 flex-shrink-0' />
                            <p className='text-sm text-wrap'>{outcome.trim()}</p>
                        </div>
                    ))}
                </div>
                {course.outcome && course.outcome.split('\n').filter(outcome => outcome.trim()).length > 3 && (
                    <div className='flex flex-row gap-[36px] mt-[36px]'>
                        {course.outcome.split('\n').filter(outcome => outcome.trim()).slice(3, 6).map((outcome, index) => (
                            <div key={index + 3} className='flex items-start text-white font-light gap-[12px] flex-1'>
                                <CheckOutlined className='mt-1 flex-shrink-0' />
                                <p className='text-sm text-wrap'>{outcome.trim()}</p>
                            </div>
                        ))}
                    </div>
                )}
                {/* Course Icons Div */}
                <div className='flex bg-[#291A423D] course-icons justify-evenly items-center py-[24px] px-[48] gap-6 rounded-lg mt-14'>
                    <div className='flex flex-col text-white font-poppins items-center gap-2'>
                        <CalendarOutlined className='w-[24px] h-[24px] text-center text-[#e3fd18]' />
                        #{course.chapters.reduce((total, chapter) => total + chapter.lessons.length, 0)} Lessons
                    </div>
                    <div className='h-[36px] w-0 border-r border-r-[#322f4d]'></div>
                    <div className='flex flex-col text-white font-poppins items-center gap-2'>
                        <QuestionCircleFilled className='w-[24px] h-[24px] text-center text-[#e3fd18]' />
                        #{course.chapters.reduce((total, chapter) => total + chapter.lessons.filter(lesson => lesson.type === 'QUIZ').length, 0)} Quiz
                    </div>
                    <div className='h-[36px] w-0 border-r border-r-[#322f4d]'></div>
                    <div className='flex flex-col text-white font-poppins items-center gap-2'>
                        <CheckOutlined className='w-[24px] h-[24px] text-center text-[#e3fd18]' />
                        #{course.chapters.length} Chapters
                    </div>
                    <div className='h-[36px] w-0 border-r border-r-[#322f4d]'></div>
                    <div className='flex flex-col text-white font-poppins items-center gap-2'>
                        <CalendarOutlined className='w-[24px] h-[24px] text-center text-[#e3fd18]' />
                        #{Math.round(course.duration_mins / 60)} Hours
                    </div>
                </div>
            </div>
            <div id="table-of-content-section" className='flex flex-col gap-[24px]'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <p className='text-[#e3fd18] font-bold font-poppins text-2xl '>Table of content</p>
                    <p className='text-lightGrey font-light font-poppins text-sm '>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
                </div>

                <div>
                    <ContentDropdownList course={course} />
                </div>
            </div>

            <div>
                <MentorshipRequests />
            </div>
            <div id="testimonials-section" className='flex flex-col items-start gap-[24px]'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <p className='text-[#e3fd18] font-bold font-poppins text-2xl '>32+ Testimonials</p>
                    <p className='text-lightGrey font-light font-poppins text-sm '>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
                </div>
                <TestimonialsList className="justify-start" />
            </div>
            {/* <div className='flex flex-col items-start gap-[24px]'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <p className='text-[#e3fd18] font-bold font-poppins text-2xl '>Students Gallery (Success Stories)</p>
                    <p className='text-lightGrey font-light font-poppins text-sm '>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
                </div>
                <StudentGalleryListSmall />
            </div> */}

            {/* <div>
                <PrivateClassroomcard />
            </div> */}

            <div className='flex flex-col gap-16'>
                <div className='flex flex-col gap-4'>
                    <span className='text-[agrandir] text-foundryyellow font-bold text-2xl'>Course Description</span>
                    <span className='font-poppins text-[16px] font-light text-white'>{course.description}</span>
                    {course.overview && (
                        <span className='font-poppins text-[16px] font-light text-white'>{course.overview}</span>
                    )}
                </div>
                <div className="flex flex-col gap-[12px]">
                    <span className="text-poppins text-foundryyellow font-bold text-lg">This course's for</span>
                    <div className="flex flex-wrap gap-[36px]">
                        {Array(6).fill("").map((_, index) => (
                            <span key={index} className="flex gap-3 w-[calc(33.33%-24px)] min-w-[150px]">
                                <CheckOutlined className="text-white w-[20px] h-[20px]" />
                                <span className="font-poppins text-[14px] text-white font-light">Who want to make XYZ</span>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                    <span className="text-poppins text-foundryyellow font-bold text-lg">Requirements</span>
                    <div className="flex flex-row gap-[36px]">
                        {course.requirements && course.requirements.split('\n').filter(req => req.trim()).slice(0, 3).map((requirement, index) => (
                            <div key={index} className='flex items-start text-white font-light gap-[12px] flex-1'>
                                <CheckOutlined className='mt-1 flex-shrink-0' />
                                <p className='text-sm text-wrap'>{requirement.trim()}</p>
                            </div>
                        ))}
                    </div>
                    {course.requirements && course.requirements.split('\n').filter(req => req.trim()).length > 3 && (
                        <div className="flex flex-row gap-[36px] mt-[36px]">
                            {course.requirements.split('\n').filter(req => req.trim()).slice(3, 6).map((requirement, index) => (
                                <div key={index + 3} className='flex items-start text-white font-light gap-[12px] flex-1'>
                                    <CheckOutlined className='mt-1 flex-shrink-0' />
                                    <p className='text-sm text-wrap'>{requirement.trim()}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div id="faq-section" className='flex flex-col gap-[24px]'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <p className='text-[#e3fd18] font-bold font-poppins text-2xl '>FAQ's</p>
                    <p className='text-lightGrey font-light font-poppins text-sm '>Description Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
                </div>
                <FaqList />
            </div>
        </div>
    );
};

export default CourseDescription;