import React, { useState } from 'react';
import { PlayCircleFilled } from '@ant-design/icons';

function CourseVideo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const buttonSize = 200; // Approximate button size to avoid crossing edges
    const halfButton = buttonSize / 2;

    // Calculate new x, y positions relative to center
    let x = e.clientX - left - width / 2;
    let y = e.clientY - top - height / 2;

    // Clamp the values to prevent overflow
    x = Math.max(-width / 2 + (halfButton - 10), Math.min(width / 2 - (halfButton - 10), x));
    y = Math.max(-height / 2 + (halfButton - 70), Math.min(height / 2 - (halfButton - 70), y));

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="flex items-center content-center">
      <div className="w-8/12 h-[600px] p-3">
        <span className='flex items-center justify-start text-lightGrey font-poppins gap-3 text-xs'>
          <span>Courses</span>
          <span>{'>'}</span>
          <span>Category Name</span>
          <span>{'>'}</span>
          <span>The Ultimate Unreal Engine Course</span>
        </span>
        <p className='text-white text-4xl font-bold mt-5'>The Ultimate Unreal Engine 2D Game Development Course</p>
        <div className='flex items-center justify-start gap-5 text-[#afafc7] mt-5'>
          <div className='w-5 border border-[#afafc7] mt-1'></div>
          <span>Unreal Engine</span>
          <span>For Beginner</span>
          <span>English / Arabic / Spanish</span>
        </div>
        <p className='text-lightGrey mt-6'>This is the most comprehensive Unreal Engine course available. If you want to learn how to architect a fully-functional RPG game, this course will give you the ability to do so with an expandable code base, architected with AAA quality code. </p>
        <div className='flex justify-start items-center mb-2 pb-4 mt-6'>
            <button className='bg-[#332052] text-[#cbe30a] font-semibold px-24 py-4 rounded-md'>Buy Now $200</button>
        </div>

      </div>
      <div
        className="relative w-4/5 h-[600px] flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="absolute py-4 px-6 font-semibold flex items-center content-center bg-[#471F707A] border text-white shadow-lg transition-all duration-300 ease-out font-poppins gap-3 rounded-full watch-intro-button"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
          <PlayCircleFilled className="" />
          Watch Intro
        </button>
      </div>
    </div>
  );
}

export default CourseVideo;
