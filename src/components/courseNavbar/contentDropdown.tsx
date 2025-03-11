import { LockOutlined, PlayCircleFilled, QuestionCircleFilled, RightOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React, { useState } from 'react'

function ContentDropdown() {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full mx-auto border-x border-y border-borderPurple font-poppins">
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-between w-full text-white px-4 py-3 gap-5 text-left bg-darkPurple rounded-lg"
            >
                <div className='flex items-center gap-2 text-wrap'>
                    <RightOutlined rotate={90} className='text-[#e1ff00] px-3' />
                    <span className='font-bold'>Chapter 1: Title The basic structure of the Blueprint visual scripting system, as well as cover the fun</span>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center gap-2 text-left text-sm text-lightGrey'>
                        <p className='flex items-center justify-center gap-1 font-bold'>4 <span className='font-light'>Lessons</span></p>
                        <p className='flex items-center justify-center gap-1 font-bold'>2 <span className='font-light'>Quizes</span></p>
                        <p className='flex items-center justify-center gap-1 font-bold'>35 <span className='font-light'>Minute</span></p>
                    </div>
                </div>
            </button>
            {open && [...Array(2)].map((_, index) => (
                <>
                    <div key={index} className="px-5 py-4 bg-darkPurple text-[#8686a1] border-t-2 border-borderPurple flex items-center justify-between">
                        <div className='flex justify-center items-center'>
                            <VideoCameraOutlined className='text-[#471f70] ml-5' />
                            <span className='text-lightGrey ml-2'>Lesson 1: Title The basic structure of the Blueprint visual scripting system, as well fun</span>
                        </div>
                        <div className='flex justify-center items-center gap-2 text-[#5f358a]'>
                            Pro
                            <LockOutlined />
                        </div>
                    </div>
                    <div key={index} className="px-5 py-4 bg-darkPurple text-[#8686a1] border-t-2 border-borderPurple flex items-center justify-between">
                        <div className='flex justify-center items-center'>
                            <VideoCameraOutlined className='text-[#471f70] ml-5' />
                            <span className='text-lightGrey ml-2'>Lesson 1: Title The basic structure of the Blueprint visual scripting system, as well fun</span>
                        </div>
                        <div className='flex justify-center items-center gap-2 text-white'>
                            Free Preview
                            <PlayCircleFilled className='text-[#e1ff00]' />
                        </div>
                    </div>
                </>
            ))}

        </div>
    )
}

export default ContentDropdown