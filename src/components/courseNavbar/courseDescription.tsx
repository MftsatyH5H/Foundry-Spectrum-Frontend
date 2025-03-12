import { CalendarOutlined, CheckOutlined } from '@ant-design/icons';
import React from 'react';
import ContentDropdown from './contentDropdown';
import ContentDropdownList from './contentDropdownList';
import TestimonialsList from '../testimonials/testimonialList';
import StudentGalleryList from '../studentsGallery/studentGalleryList';
import FaqList from '../faq/FaqList';

const CourseDescription: React.FC = () => {
    return (
        <div className="px-8 pb-0 mb-0 mt-10 flex flex-col ">
            <p className='text-[#e3fd18] font-semibold font-poppins text-xl'>Learning Outcome</p>
            <div className='flex flex-row gap-7 mt-4'>
                <div className='flex content-between items-start text-white gap-3'>
                    <CheckOutlined className='mt-1' />
                    <p className='text-sm text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam ab laudantium.</p>
                </div>
                <div className='flex content-between items-start text-white gap-3'>
                    <CheckOutlined className='mt-1' />
                    <p className='text-sm text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam ab laudantium.</p>
                </div>
                <div className='flex content-between items-start text-white gap-3'>
                    <CheckOutlined className='mt-1' />
                    <p className='text-sm text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam ab laudantium.</p>
                </div>
            </div>
            <div className='flex flex-row gap-7 mt-4'>
                <div className='flex content-between items-start text-white gap-3'>
                    <CheckOutlined className='mt-1' />
                    <p className='text-sm text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam ab laudantium.</p>
                </div>
                <div className='flex content-between items-start text-white gap-3'>
                    <CheckOutlined className='mt-1' />
                    <p className='text-sm text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam ab laudantium.</p>
                </div>
                <div className='flex content-between items-start text-white gap-3'>
                    <CheckOutlined className='mt-1' />
                    <p className='text-sm text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam ab laudantium.</p>
                </div>
            </div>
            {/* Course Icons Div */}
            <div className='flex bg-[#291A423D] course-icons justify-evenly items-center p-4 py-5 gap-6 rounded-lg mt-14'>
                <div className='flex flex-col text-white font-poppins gap-1'>
                    <CalendarOutlined className='text-[#e3fd18]' />
                    #20 Lessons
                </div>
                <div className='h-6 w-0 border-r border-r-[#322f4d]'></div>
                <div className='flex flex-col text-white font-poppins gap-1'>
                    <CalendarOutlined className='text-[#e3fd18]' />
                    #12 Quiz
                </div>
                <div className='h-6 w-0 border-r border-r-[#322f4d]'></div>
                <div className='flex flex-col text-white font-poppins gap-1'>
                    <CalendarOutlined className='text-[#e3fd18]' />
                    #4 Chapters
                </div>
                <div className='h-6 w-0 border-r border-r-[#322f4d]'></div>
                <div className='flex flex-col text-white font-poppins gap-1'>
                    <CalendarOutlined className='text-[#e3fd18]' />
                    #20 Hours
                </div>
            </div>
            <p className='text-[#e3fd18] font-semibold font-poppins text-xl mt-16'>Table of content</p>
            <p className='text-lightGrey font-light font-poppins text-sm mt-2'>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
            <div className='mt-10'>
                <ContentDropdownList />
            </div>
            <p className='text-[#e3fd18] font-semibold font-poppins text-xl mt-16'>32+ Testimonials </p>
            <p className='text-lightGrey font-light font-poppins text-sm mt-2'>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
            <div className='mt-10'>
                <TestimonialsList />
            </div>
            <p className='text-[#e3fd18] font-semibold font-poppins text-xl mt-16'>Students Gallery (Success Stories) </p>
            <p className='text-lightGrey font-light font-poppins text-sm mt-2'>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
            <div className='mt-10'>
                <StudentGalleryList />
            </div>
            <p className='text-[#e3fd18] font-semibold font-poppins text-xl mt-16'>Course Description </p>
            <p className='font-poppins text-white font-thin mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro eaque magni! Accusamus voluptas doloribus placeat ducimus blanditiis. Natus quidem incidunt laudantium obcaecati perferendis, illo eligendi dolore alias molestias a.</p>
            <p className='font-poppins text-white font-thin mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro eaque magni! Accusamus voluptas doloribus placeat ducimus blanditiis. Natus quidem incidunt laudantium obcaecati perferendis, illo eligendi dolore alias molestias a.</p>
            <p className='font-poppins text-white font-thin mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro eaque magni! Accusamus voluptas doloribus placeat ducimus blanditiis. Natus quidem incidunt laudantium obcaecati perferendis, illo eligendi dolore alias molestias a.</p>
            <p className='font-poppins text-white font-thin mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro eaque magni! Accusamus voluptas doloribus placeat ducimus blanditiis. Natus quidem incidunt laudantium obcaecati perferendis, illo eligendi dolore alias molestias a.</p>
            <p className='font-poppins text-white font-thin mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro eaque magni! Accusamus voluptas doloribus placeat ducimus blanditiis. Natus quidem incidunt laudantium obcaecati perferendis, illo eligendi dolore alias molestias a.</p>
            <p className='text-[#e3fd18] font-semibold font-poppins text-xl mt-16'>FAQ’s </p>
            <p className='text-lightGrey font-light font-poppins text-sm mt-2'>Description Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
            <div className='mt-6'>
                <FaqList />
            </div>
        </div>
    );
};

export default CourseDescription;