import { CalendarOutlined, CheckOutlined } from '@ant-design/icons';
import React from 'react';
import ContentDropdown from './contentDropdown';
import ContentDropdownList from './contentDropdownList';
import TestimonialsList from '../testimonials/testimonialList';
import StudentGalleryList from '../studentsGallery/studentGalleryList';
import FaqList from '../faq/FaqList';
import { LuClock, LuShieldQuestion, LuClipboard, LuCalendar, LuMoveRight } from "react-icons/lu";
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
            <div className='flex flex-col items-start gap-[24px]'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <p className='text-[#e3fd18] font-bold font-poppins text-2xl '>32+ Testimonials</p>
                    <p className='text-lightGrey font-light font-poppins text-sm '>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
                </div>
                <TestimonialsList className="justify-start" />
            </div>
            <div className='flex flex-col items-start gap-[24px]'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <p className='text-[#e3fd18] font-bold font-poppins text-2xl '>Students Gallery (Success Stories)</p>
                    <p className='text-lightGrey font-light font-poppins text-sm '>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
                </div>
                <StudentGalleryListSmall />
            </div>
            <div className='flex flex-col gap-16'>
                <div className='flex flex-col gap-4'>
                    <span className='text-[agrandir] text-foundryyellow font-bold text-2xl'>Course Description</span>
                    <span className='font-poppins text-[16px] font-light text-white'>In this course, you will start with absolutely no experience in game development whatsoever. All of the important terms and concepts in game development will be introduced to you and explained carefully and in detail. By the end, you will have four small game projects of different genres, ranging from 2D to 3D, and you'll understand the underlying principles needed to make any creation you can imagine.</span>
                    <span className='font-poppins text-[16px] font-light text-white'>The course starts you off as a complete beginner, but experienced developers will also benefit from this course, as many best practices and advanced features are covered throughout.</span>
                    <span className='font-poppins text-[16px] font-light text-white'>The course begins at the beginning - downloading the Epic Games Launcher, where we will install Unreal Engine 5, as well as gain access to the Epic Games Marketplace where we can get tons of free, high-quality assets for our games. After familiarizing ourselves with the Unreal Engine editor, learning about asset types and how to import asset files, we get some practice manipulating objects in the level and building simple game environments with free asset packs.</span>
                    <span className='font-poppins text-[16px] font-light text-white'>We then get started learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every game developer needs to understand. We get practice visualizing vectors in the engine with the various debug drawing Blueprint nodes.</span>
                </div>
                <div className="flex flex-col gap-[12px]">
                    <span className="text-poppins text-foundryyellow font-bold text-lg">This course's for</span>
                    <div className="flex flex-wrap gap-[36px]">
                        {Array(6).fill("").map((_, index) => (
                            <span key={index} className="flex gap-3 w-[calc(33.33%-24px)] min-w-[150px]">
                                <LuMoveRight className="text-white w-[20px] h-[20px]" />
                                <span className="font-poppins text-[14px] text-white font-light">Who want to make XYZ</span>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                    <span className="text-poppins text-foundryyellow font-bold text-lg">Requirements</span>
                    <div className="flex flex-col gap-[12px] text-white font-poppins font-light">
                        <span>• No experience necessary. Start as an absolute beginner.</span>
                        <span>• A desire to learn how to make video games!</span>
                        <span>• A computer with internet access.</span>
                        <span>• Must meet the minimum system requirements to run Unreal Engine 5.</span>
                        
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <p className='text-[#e3fd18] font-bold font-poppins text-2xl '>FAQ’s</p>
                    <p className='text-lightGrey font-light font-poppins text-sm '>Description Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
                </div>
                <FaqList />
            </div>
        </div>
    );
};

export default CourseDescription;