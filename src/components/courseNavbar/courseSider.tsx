import { CalendarOutlined } from '@ant-design/icons';
import React from 'react';
const CourseSider: React.FC = () => {
    return (
        <div className="bg-[#140e21] shadow-md p-5 m-4 pb-0 rounded-lg font-roboto">
            <p className='text-white font-semibold text-lg font-[poppins]'>The ultimate Unreal Engine 2D Game Development Course</p>
            <div className='flex items-center justify-between mt-7'>
                <div className='flex flex-col content-center items-start'>
                    <p className='text-[#e3fb25] font-bold font-roboto text-2xl'>$ 300</p>
                    <p className='text-[#616085] text-lg '>$ 200</p>
                </div>
                <button className='bg-white font-[poppins] py-2 px-4 rounded-lg'>Start Now</button>
            </div>
            <div className='h-1 border-b-2 mt-4 border-b-[#3e2c55]'></div>
            <div className='flex flex-col items-start content-center text-white mt-4 gap-3'>
                <p className='flex items-center gap-2'>
                    <CalendarOutlined />
                    <span className='font-bold font-poppins'>Start Date: </span>
                    <span>Instant Access</span>
                </p>
                <p className='flex items-center gap-2'>
                    <CalendarOutlined />
                    <span className='font-bold font-poppins'>Lessons: </span>
                    <span>72+</span>
                </p>
                <p className='flex items-center gap-2'>
                    <CalendarOutlined />
                    <span className='font-bold font-poppins'>Category: </span>
                    <span>Name Title</span>
                </p>
                <p className='flex items-center gap-2'>
                    <CalendarOutlined />
                    <span className='font-bold font-poppins'>Duration: </span>
                    <span>2+ Hours</span>
                </p>
                <p className='flex items-center gap-2'>
                    <CalendarOutlined />
                    <span className='font-bold font-poppins'>Level: </span>
                    <span>Intermediate</span>
                </p>
                <p className='flex items-center gap-2'>
                    <CalendarOutlined />
                    <span className='font-bold font-poppins'>Languages: </span>
                    <span>English, Arabic</span>
                </p>
                <p className='flex items-center gap-2'>
                    <CalendarOutlined />
                    <span className='font-bold font-poppins'>Rating: </span>
                    <span>4.5</span>
                </p>
                <p className='flex items-center gap-2'>
                    <CalendarOutlined />
                    <span className='font-bold font-poppins'>Students Enrolled: </span>
                    <span>2300</span>
                </p>
                <p className='flex items-center gap-2'>
                    <CalendarOutlined />
                    <span className='font-bold font-poppins'>Q&A: </span>
                    <span>24/7 at Discord</span>
                </p>
                <p className='flex items-center gap-2'>
                    <CalendarOutlined />
                    <span className='font-bold font-poppins'>Lecture type: </span>
                    <span>Pre-recorded</span>
                </p>
            </div>
            <div className='flex items-center content-center p-4 mt-4'>
                <p className='text-center text-[#6b6a8c] ml-10'>Let's Start your Journey Now</p>
            </div>
            <div className='flex justify-center w-full items-center mb-2 pb-4'>
                <button className='bg-[#332052] w-full text-[#cbe30a] font-semibold px-3 py-2 rounded-md'>$ 200 Enroll Now</button>
            </div>
        </div>
    );
};

export default CourseSider;