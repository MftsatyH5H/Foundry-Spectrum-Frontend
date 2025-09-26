import React, { useState } from 'react';
import { Course } from '../../types/course.type';

interface CourseNavbarProps {
    course: Course;
}

const CourseNavbar: React.FC<CourseNavbarProps> = ({ course }) => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        
        if (tab === 'Overview') {
            const element = document.getElementById('overview-section');
            if (element) {
                const elementRect = element.getBoundingClientRect();
                const elementTop = elementRect.top + window.pageYOffset;
                const offsetPosition = elementTop - 200;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else if (tab === 'Table of content') {
            const element = document.getElementById('table-of-content-section');
            if (element) {
                const elementRect = element.getBoundingClientRect();
                const elementTop = elementRect.top + window.pageYOffset;
                const offsetPosition = elementTop - 150;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else if (tab === 'Testimonials') {
            const element = document.getElementById('testimonials-section');
            if (element) {
                const elementRect = element.getBoundingClientRect();
                const elementTop = elementRect.top + window.pageYOffset;
                const offsetPosition = elementTop - 150;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else if (tab === 'FAQ') {
            const element = document.getElementById('faq-section');
            if (element) {
                const elementRect = element.getBoundingClientRect();
                const elementTop = elementRect.top + window.pageYOffset;
                const offsetPosition = elementTop - 150;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
        // Instructor tab does nothing as requested
    };
    return (
        <nav className="container-navbar shadow-md pb-0 mb-0">
            <div className="container mx-auto">
                <ul className='flex items-center justify-start gap-[48px] font-[Poppins] text-[16px] leading-[24px] font-light text-white w-[740px] relative'>
                {['Overview', 'Table of content', 'Instructor', 'Testimonials', 'FAQ'].map((item,index) => (
                    <li 
                        key={item} 
                        className={`py-[24px] relative group cursor-pointer ${activeTab === item ? 'active' : ''}`}
                        onClick={() => handleTabClick(item)}
                    >
                        <span className='relative inline-block'>
                            {item}
                            <span className={`absolute bottom-[-24px] left-0 w-full h-[3px] bg-[#E1FF00] transition-transform duration-300 ${
                                activeTab === item 
                                    ? 'scale-x-100' 
                                    : 'scale-x-0 origin-bottom group-hover:scale-x-100'
                            }`}></span>
                        </span>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    );
};

export default CourseNavbar;