import React, { Component, useState } from 'react';
import './coursecardbig.css';
import { Link } from 'react-router-dom';
import { Course } from '../../types/course.type';
import { useAuth } from '../../hooks/useAuth';
import LoginFirstStep from '../auth/Loginfirststep';

interface CoursecardbigProps {
    course: Course;
}

function Coursecardbig({ course }: CoursecardbigProps) {
    const cardStyle = {
        backgroundImage: `url(${course.thumbnail_url.replace('localstack-dev', 'localhost')})`,
    };
    const { handleBuyNow, showLoginPopup, closeLoginPopup } = useAuth();

    // Helper function to get primary category name
    const getPrimaryCategory = () => {
        return course.categories.length > 0 ? course.categories[0].name : 'General';
    };

    // Helper function to format languages
    const getLanguages = () => {
        return course.languages.map(lang => lang.name).join(' / ');
    };

    // Helper function to format price
    const formatPrice = () => {
        if (course.is_free) {
            return 'Free';
        }
        return `$${course.price.toFixed(2)}`;
    };



        return (
            <>
            <div className='rounded-3xl flex flex-row h-[600px] w-full relative overflow-hidden flex-2 card cursor-pointer group '>
                <div 
                    className="absolute inset-0 rounded-3xl z-0 gredientlist w-full" 
                >
                    <div 
                        className="bg-center bg-cover relative w-full h-full rounded-3xl overflow-hidden "
                        style={cardStyle}
                    >
                        <div className='w-full h-full absolute bg-gradient-to-r from-[#050517]  to-transparent z-10 gradient-overlay  duration-900 ease-out '>
                            <div className="flex flex-row justify-center h-full w-full">
                                <div className='flex-auto flex flex-col max-w-[50%] max-h-[600px] ml-[64px] pt-[135px] '>
                                    <h1 className='font-[agrandir] text-[36px] leading-[54px] text-white font-bold'>{course.title}</h1>
                                    <div className='flex flex-row mt-[20px] gap-[24px] font-[Poppins] text-[16px] leading-[24px]  text-[#AFAFC7] ml-[15px]'>
                                    <span className='relative pl-[30px] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[""] before:w-[24px] before:h-[1px] before:bg-[#AFAFC7] before:ml-[-15px]'>
                                    {getPrimaryCategory()}
                                        </span>
                                        <span className=' '>For {course.difficulty}</span>
                                        <span className=' '>{getLanguages()}</span>
                                    </div>
                                    <p className='font-[Poppins] text-[16px] leading-[24px]  text-[#AFAFC7] mt-[20px] font-light'>
                                        {course.description}
                                    </p>
                                    <Link to={`/course-overview/${course.id}`}>
                                        <button className='text-foundryyellow font-[Poppins] font-medium text-[16px] leading-[24px] rounded-lg pt-3.5 pb-3.5 pr-8 pl-8 bg-[#291A42] min-w-[182px] h-[52px] mt-[40px] whitespace-nowrap'>Buy Now {formatPrice()}</button>
                                    </Link>
                                </div>
                                <div className='flex-auto flex justify-center items-center'>
                                <Link to={`/course-overview/${course.id}`}>
                                    <button className='text-[14px] leading-[12px] text-white bg-[#471F701F] backdrop-blur-[8px] pt-[24px] pb-[24px] pl-[48px] pr-[48px] rounded-[200px] align-middle opacity-[0.7] learn font-[Poppins] ease-out duration-500 '>Learn More &rarr;</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Login Popup */}
            {showLoginPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative">
                        <LoginFirstStep onClose={closeLoginPopup} />
                    </div>
                </div>
            )}
        </>
    );
}


export default Coursecardbig;