import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const CoursecreateStep1: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const categories: string[] = [
        'Games',
        'Lighting',
        'Modeling',
        'Texturing',
        'Envirmoent Art',
    ];

    const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(prev => !prev);
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='w-[640px]'>
            <form className='flex flex-col gap-[32px]'>
                {/* Course Name Section */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='font-[Poppins] font-medium text-[14px] leading-[21px] text-white'>
                        Course Name
                    </label>
                    <input
                        type="text"
                        placeholder='Course Name'
                        className='w-full rounded-[8px] border border-[#505075] py-3 px-4 bg-[#2F2F4F] text-white'
                    />
                    <p className='font-[Poppins] font-normal text-[14px] leading-[17.5px] text-[#9898B5]'>
                        We just need some information in 2 min to help you get the most of your learning time
                    </p>
                </div>

                {/* Dropdown Section */}
                <div className="relative" ref={dropdownRef}>
                    <label className='font-[Poppins] font-medium text-[14px] leading-[21px] text-white mb-[8px]'>
                        Category
                    </label>
                    <button
                        type="button"
                        onMouseDown={toggleDropdown}
                        className="w-full bg-[#2F2F4F] text-gray-400 border border-[#505075] rounded-[8px] p-3 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <span className='font-[Poppins] font-normal leading-[17.5px] text-[#9898B5] text-[14px] '>{selectedCategory || 'Select Category'}</span>
                        {isOpen ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                    </button>
                    
                    {isOpen && (
                        <ul
                            className="absolute z-10 w-full mt-1 bg-[#2F2F4F] border border-gray-700 rounded max-h-60 overflow-auto"
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    onClick={() => handleCategorySelect(category)}
                                    className="px-4 py-2 text-gray-400 hover:bg-[#291A42] cursor-pointer"
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Course Level Section */}
                <div className='flex flex-col gap-3'>
                    <h1 className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>Course Level</h1>
                    <div className='flex flex-row gap-[32px]'>
                        <div className='flex flex-row gap-2 items-center'>
                            <input type="radio" value="Levels" id='Levels' name='level' className='peer w-[16px] h-[16px] cursor-pointer  rounded-full border  border-[#505075]  text-white transition-all relative'/>
                            <label htmlFor="Levels" className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>All Levels</label>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <input type="radio" value="Beginner" id='Beginner' name='level' className='peer w-[16px] h-[16px] cursor-pointer  rounded-full border  border-[#505075]  text-white transition-all relative'/>
                            <label htmlFor="Beginner" className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>Beginner</label>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <input type="radio" value="Intermediate" id='Intermediate' name='level' className='peer w-[16px] h-[16px] cursor-pointer  rounded-full border  border-[#505075]  text-white transition-all relative'/>
                            <label htmlFor="Intermediate" className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>Intermediate</label>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <input type="radio" value="Advanced" id='Advanced' name='level' className='peer w-[16px] h-[16px] cursor-pointer  rounded-full border bg-white border-[#505075]  text-white transition-all relative'/>
                            <label htmlFor="Advanced" className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>Advanced</label>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="Description" className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
                        Description
                    </label>
                    <textarea name="" id="Description" placeholder='Write text here ...' className='rounded-[8px] px-4 py-3 bg-[#2F2F4F] border border-[#505075] w-[640px] h-[163px] text-white'></textarea>
                    <p className='font-[Poppins] font-normal text-[12px] leading-[18px] text-[#9898B5]'>We just need some information in 2 min to help you got the most of your learning time</p>
                </div>

                {/* Expected Price Section */}
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <label htmlFor="Description" className='font-[Poppins] font-medium text-[14px] leading-[14px] text-white'>
                            Expected Price “USD”
                        </label>
                        <p className='font-[Poppins] font-light text-[12px] leading-[150%] text-foundryyellow'>This will be reviewed and may affect approval.</p>
                    </div>
                    <input
                        type="text"
                        placeholder='In USD'
                        className='w-full rounded-[8px] border border-[#505075] py-3 px-4 bg-[#2F2F4F] text-white'
                    />
                    <p className='font-[Poppins] font-normal text-[12px] leading-[18px] text-[#9898B5]'>We just need some information in 2 min to help you got the most of your learning time</p>
                </div>
            </form>
        </div>
    );
}

export default CoursecreateStep1;