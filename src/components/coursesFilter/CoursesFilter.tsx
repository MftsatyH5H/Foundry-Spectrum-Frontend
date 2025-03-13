import { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import React from 'react';

function CoursesFilter() {
  const [activeButton, setActiveButton] = useState('All');
  
  const categories = ['All', 'Category Name 1', 'Category Name 2', 'Category Name 3'];

  return (
    <div className='flex flex-row justify-between items-center font-poppins'>
      <div className='flex flex-row items-center gap-4'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveButton(category)}
            className={`rounded-full text-[14px] py-2 px-8 font-medium
              ${activeButton === category ? 'bg-[#471F70] text-foundryyellow' : 'bg-transparent text-[#2F2F4F] border border-[#2F2F4F]'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <button className='bg-[#332052] flex flex-row items-center gap-2 py-[10px] px-5 text-foundryyellow rounded-lg'>
        Most Recent
        <LuChevronDown className='text-white w-[14px] h-[14px] mt-1' />
      </button>
    </div>
  );
}

export default CoursesFilter;
