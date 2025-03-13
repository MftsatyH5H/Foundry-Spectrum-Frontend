import { LockFilled, LockOutlined, PlayCircleFilled, QuestionCircleFilled, RightOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { LuClapperboard, LuFileQuestion } from 'react-icons/lu';

function ContentDropdown({state} : any) {
    const [open, setOpen] = useState(state || false);
    return (
        <div className="w-full mx-auto border-x border-y border-borderPurple font-poppins">
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-between w-full text-white px-6 py-4 gap-5 text-left bg-darkPurple rounded-lg"
            >
                <div className='flex items-center gap-4 text-wrap'>
                    <RightOutlined rotate={90} className='text-[#e1ff00] px-3' />
                    <span className='font-bold'>Chapter 1: Title The basic structure of the Blueprint visual scripting system, as well as cover the fun</span>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center gap-4 text-left text-sm text-lightGrey'>
                        <p className='flex items-center justify-center gap-1 font-bold'>4 <span className='font-light'>Lessons</span></p>
                        <p className='flex items-center justify-center gap-1 font-bold'>2 <span className='font-light'>Quizes</span></p>
                        <p className='flex items-center justify-center gap-1 font-bold'>35 <span className='font-light'>Minute</span></p>
                    </div>
                </div>
            </button>
            {open && [...Array(2)].map((_, index) => (
                <>
                    <div key={index} className="p-[24px] pl-[48px] bg-darkPurple text-[#8686a1] border-t-2 border-borderPurple flex items-center justify-between">
                        <div className='flex justify-center items-center'>
                            <LuClapperboard className='text-[#471f70] w-[24px] h-[24px]' />
                            <span className='text-lightGrey ml-2 font-[400]'>Lesson 1: Title The basic structure of the Blueprint visual scripting system, as well fun</span>
                        </div>
                        <div className='flex justify-center items-center gap-[6px] text-[#5f358a]'>
                            Pro
                            <LockFilled />
                        </div>
                    </div>
                    <div key={index} className="p-[24px] pl-[48px] bg-darkPurple text-[#8686a1] border-t-2 border-borderPurple flex items-center justify-between">
                        <div className='flex justify-center items-center'>
                            <LuFileQuestion className='text-[#471f70] w-[24px] h-[24px]' />
                            <span className='text-lightGrey ml-2 font-[400]'>Lesson 1: Title The basic structure of the Blueprint visual scripting system, as well fun</span>
                        </div>
                        <div className='flex justify-center items-center gap-[6px] text-white'>
                            <span className='font-light text-[16px]'>
                                Free Preview
                            </span>
                            <PlayCircleFilled className='text-[#e1ff00] w-[16px] h-[16px]' />
                        </div>
                    </div>
                </>
            ))}

        </div>
    )
}

export default ContentDropdown