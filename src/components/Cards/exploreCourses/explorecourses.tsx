import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import '../cardgrediant.css'






const ExploreCoursescard = () =>  {
 
        return (

            <div className='w-full  h-[128px] flex flex-row grediant items-center bg-[#322052]
            ] rounded-2xl'>
            <div className='h-[64px] w-[65px] shadow-sm rounded-8xl ml-10  flex justify-start '>
                <img src="/9f8c4f8d5b0151daaabd032483af1a9f.png " alt="" className=' h-full w-[64px] object-cover  hue-rotate-[-90deg]' />
            </div>
            <div className='flex flex-col justify-between items-start w-[70%] ml-8 gap-2'>
                <p className='text-[#ffffff] leading-[24px] max-text-[16px] font-[Poppins] font-light '>Need to Learn More</p>
                <h1 className='text-[#ffffff] leading-[36px] h-[36px] text-[24px] font-[700] font-[agrandir] '>You can find more suitable courses meets your requirments... </h1>
            </div>
            <button className='bg-[#ffffff] border rounded-lg w-[245px] mr-12 h-[52px] text-[16px] font-medium flex justify-center items-center'>
                <span className="inline-flex items-center">
                    Explore More Courses
                    <FaArrowRight size={16} className='ml-3 align-middle' />
                </span>
            </button>
    
        </div>
        );
    }

 
export default ExploreCoursescard;