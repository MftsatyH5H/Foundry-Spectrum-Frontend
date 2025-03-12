import React from 'react';
import RelatedCourses from './relatedCourses';
interface IProps {
    imageSrc?: string;
    name: string;
}

const RelatedCoursesList: React.FC = () => {
    return (
        <div className='text-white p-4 w-full related-courses-container'>
            <div className='flex justify-start items-center gap-4 mb-3 ml-2'>
                <img src="new-logo.png" alt="new-logo" className='w-11 mb-2' />
                <div className="flex flex-col justify-start items-start ">
                    <p className='font-bold text-lg mb-2'>Related Courses</p>
                    <p className='text-[#5f358a] text-xs'>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every.</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-start gap-14'>
                <RelatedCourses />
                <RelatedCourses />
                <RelatedCourses />
                <RelatedCourses />
            </div>
        </div>

    );
};

export default RelatedCoursesList;