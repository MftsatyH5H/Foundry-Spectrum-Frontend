import { CalendarOutlined, CheckOutlined } from '@ant-design/icons';
import React from 'react';
import ContentDropdown from './contentDropdown';
import ContentDropdownList from './contentDropdownList';
import TestimonialsList from '../testimonials/testimonialList';
import StudentGalleryList from '../studentsGallery/studentGalleryList';
import FaqList from '../faq/FaqList';
import { LuClock, LuShieldQuestion, LuClipboard, LuCalendar } from "react-icons/lu";
import StudentGalleryListSmall from '../studentsGallery/StudentGalleryListSmall';
const CourseDescription: React.FC = () => {
    return (
        <div className="px-8 pb-0 mb-0 gap-[120px] flex flex-col mt-10">
            <div className='flex flex-col gap-[16px]'>
                <p className='text-[#e3fd18] font-semibold font-poppins text-[18px]'>Learning Outcome</p>
                <div className='flex flex-row gap-[36px] mt-4'>
                    <div className='flex content-between items-start text-white font-light gap-[12px]'>
                        <CheckOutlined className='mt-1' />
                        <p className='text-sm text-wrap'>Get free, high quality assets for levels, characters, props and effects into your game projects.</p>
                    </div>
                    <div className='flex content-between items-start text-white font-light gap-[12px]'>
                        <CheckOutlined className='mt-1' />
                        <p className='text-sm text-wrap'>Get free, high quality assets for levels, characters, props and effects into your game projects.</p>
                    </div>
                    <div className='flex content-between items-start text-white font-light gap-[12px]'>
                        <CheckOutlined className='mt-1' />
                        <p className='text-sm text-wrap'>Get free, high quality assets for levels, characters, props and effects into your game projects.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]'>
                    <div className='flex flex-row gap-[36px] mt-[36px]'>
                        <div className='flex content-between items-start text-white font-light gap-[12px]'>
                            <CheckOutlined className='mt-1' />
                            <p className='text-sm text-wrap'>Get free, high quality assets for levels, characters, props and effects into your game projects.</p>
                        </div>
                        <div className='flex content-between items-start text-white font-light gap-[12px]'>
                            <CheckOutlined className='mt-1' />
                            <p className='text-sm text-wrap'>Get free, high quality assets for levels, characters, props and effects into your game projects.</p>
                        </div>
                        <div className='flex content-between items-start text-white font-light gap-[12px]'>
                            <CheckOutlined className='mt-1' />
                            <p className='text-sm text-wrap'>Get free, high quality assets for levels, characters, props and effects into your game projects.</p>
                        </div>
                    </div>
                    {/* Course Icons Div */}
                    <div className='flex bg-[#291A423D] course-icons justify-evenly items-center py-[24px] px-[48] gap-6 rounded-lg mt-14'>
                        <div className='flex flex-col text-white font-poppins items-center gap-2'>
                            <LuCalendar className='w-[24px] h-[24px] text-center text-[#e3fd18]' />
                            #20 Lessons
                        </div>
                        <div className='h-[36px] w-0 border-r border-r-[#322f4d]'></div>
                        <div className='flex flex-col text-white font-poppins items-center gap-2'>
                            <LuShieldQuestion className='w-[24px] h-[24px] text-center text-[#e3fd18]' />
                            #12 Quiz
                        </div>
                        <div className='h-[36px] w-0 border-r border-r-[#322f4d]'></div>
                        <div className='flex flex-col text-white font-poppins items-center gap-2'>
                            <LuClipboard className='w-[24px] h-[24px] text-center text-[#e3fd18]' />
                            #4 Chapters
                        </div>
                        <div className='h-[36px] w-0 border-r border-r-[#322f4d]'></div>
                        <div className='flex flex-col text-white font-poppins items-center gap-2'>
                            <LuClock className='w-[24px] h-[24px] text-center text-[#e3fd18]' />
                            #20 Hours
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <p className='text-[#e3fd18] font-bold font-poppins text-2xl '>Table of content</p>
                    <p className='text-lightGrey font-light font-poppins text-sm '>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
                </div>

                <div>
                    <ContentDropdownList />
                </div>
            </div>
            
            <p className='text-[#e3fd18] font-semibold font-poppins text-xl '>32+ Testimonials </p>
            <p className='text-lightGrey font-light font-poppins text-sm '>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
            <div className='mt-10'>
                <TestimonialsList />
            </div>
            <p className='text-[#e3fd18] font-semibold font-poppins text-xl '>Students Gallery (Success Stories) </p>
            <p className='text-lightGrey font-light font-poppins text-sm '>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
            <div className='mt-10'>
                <StudentGalleryListSmall />
            </div>
            <p className='text-[#e3fd18] font-semibold font-poppins text-xl '>Course Description </p>
            <p className='font-poppins text-white font-thin mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro eaque magni! Accusamus voluptas doloribus placeat ducimus blanditiis. Natus quidem incidunt laudantium obcaecati perferendis, illo eligendi dolore alias molestias a.</p>
            <p className='font-poppins text-white font-thin mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro eaque magni! Accusamus voluptas doloribus placeat ducimus blanditiis. Natus quidem incidunt laudantium obcaecati perferendis, illo eligendi dolore alias molestias a.</p>
            <p className='font-poppins text-white font-thin mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro eaque magni! Accusamus voluptas doloribus placeat ducimus blanditiis. Natus quidem incidunt laudantium obcaecati perferendis, illo eligendi dolore alias molestias a.</p>
            <p className='font-poppins text-white font-thin mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro eaque magni! Accusamus voluptas doloribus placeat ducimus blanditiis. Natus quidem incidunt laudantium obcaecati perferendis, illo eligendi dolore alias molestias a.</p>
            <p className='font-poppins text-white font-thin mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro eaque magni! Accusamus voluptas doloribus placeat ducimus blanditiis. Natus quidem incidunt laudantium obcaecati perferendis, illo eligendi dolore alias molestias a.</p>
            <p className='text-[#e3fd18] font-semibold font-poppins text-xl '>FAQ’s </p>
            <p className='text-lightGrey font-light font-poppins text-sm '>Description Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
            <div className='mt-6'>
                <FaqList />
            </div>
        </div>
    );
};

export default CourseDescription;