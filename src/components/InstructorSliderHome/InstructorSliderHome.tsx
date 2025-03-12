import  React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import './InstructorSliderHome.css';




const InstructorSliderHome = () => {
    return ( 
        <div className='flex flex-row gap-[48px] items-center mt-16'>
            <div className='bg-opacity-[6%] p-[48px] flex flex-col items-center gap-[16px] border border-[#2F2F4F] backdrop-blur-[12px] rounded-[8px] group transition-all duration-3000 ease-in-out'>
                <img src="/profile.png" alt="" className='rounded-full w-[96px] border-[2px] border-solid border-[#2F2F4F] group-hover:border-foundryyellow transition-colors duration-3000' />
                <div className='flex flex-col gap-[4px] items-center'>
                    <h1 className='font-[agrandir] font-bold text-[20px] leading-[150%] text-white'>Name Name</h1>
                    <p className='text-center text-[#505075] font-[Poppins] font-light text-[14px] leading-[150%]'>This is the most comprehensive Unreal Engine course available. If you want to learn how to.</p>
                </div>
                    <div className="flex flex-row justify-center gap-[24px] text-white">
                        <FaLinkedin size={20} />
                        <FaInstagram size={20} />
                        <BsTwitterX size={20} />
                        <FaYoutube size={20} />
                    </div>
            </div>
            <div className='bg-opacity-[6%] p-[48px] flex flex-col items-center gap-[16px] border border-[#2F2F4F] backdrop-blur-[12px] rounded-[8px] group transition-all duration-3000 ease-in-out'>
                <img src="/profile.png" alt="" className='rounded-full w-[96px] border-[2px] border-solid border-[#2F2F4F] group-hover:border-foundryyellow transition-colors duration-3000' />
                <div className='flex flex-col gap-[4px] items-center'>
                    <h1 className='font-[agrandir] font-bold text-[20px] leading-[150%] text-white'>Name Name</h1>
                    <p className='text-center text-[#505075] font-[Poppins] font-light text-[14px] leading-[150%]'>This is the most comprehensive Unreal Engine course available. If you want to learn how to.</p>
                </div>
                    <div className="flex flex-row justify-center gap-[24px] text-white">
                        <FaLinkedin size={20} />
                        <FaInstagram size={20} />
                        <BsTwitterX size={20} />
                        <FaYoutube size={20} />
                    </div>
            </div>
            <div className='bg-opacity-[6%] p-[48px] flex flex-col items-center gap-[16px] border border-[#2F2F4F] backdrop-blur-[12px] rounded-[8px] group transition-all duration-3000 ease-in-out'>
                <img src="/profile.png" alt="" className='rounded-full w-[96px] border-[2px] border-solid border-[#2F2F4F] group-hover:border-foundryyellow transition-colors duration-3000' />
                <div className='flex flex-col gap-[4px] items-center'>
                    <h1 className='font-[agrandir] font-bold text-[20px] leading-[150%] text-white'>Name Name</h1>
                    <p className='text-center text-[#505075] font-[Poppins] font-light text-[14px] leading-[150%]'>This is the most comprehensive Unreal Engine course available. If you want to learn how to.</p>
                </div>
                    <div className="flex flex-row justify-center gap-[24px] text-white">
                        <FaLinkedin size={20} />
                        <FaInstagram size={20} />
                        <BsTwitterX size={20} />
                        <FaYoutube size={20} />
                    </div>
            </div>
        </div>
     );
}
 
export default InstructorSliderHome;