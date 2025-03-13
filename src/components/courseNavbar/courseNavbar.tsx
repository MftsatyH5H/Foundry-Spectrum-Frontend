import React from 'react';

const CourseNavbar: React.FC = () => {
    return (
        <nav className="px-8 container-navbar shadow-md pb-0 mb-0">
            <ul className='flex container items-center justify-start gap-[48px] font-[Poppins] text-[16px] leading-[24px] font-light text-white w-[740px] relative'>
                {['Overview', 'Table of content', 'Instructor', 'Testimonials', 'FAQ'].map((item,index) => (
                   <>
                   {index === 0 && (<>
                    <li key={item} className='py-[24px] active relative group cursor-pointer'>
                        <span className='relative inline-block'>
                            {item}
                            <span className='absolute bottom-[-24px] left-0 w-full h-[3px] bg-[#E1FF00] scale-x-0 origin-bottom transition-transform duration-300 scale-x-100'></span>
                        </span>
                    </li>
                   </>)}
                   {index !== 0 && (<>
                    <li key={item} className='py-[24px] relative group cursor-pointer'>
                        <span className='relative inline-block'>
                            {item}
                            <span className='absolute bottom-[-24px] left-0 w-full h-[3px] bg-[#E1FF00] scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100'></span>
                        </span>
                    </li>
                    </>)}
                    
                   </>
                ))}
            </ul>
        </nav>
    );
};

export default CourseNavbar;