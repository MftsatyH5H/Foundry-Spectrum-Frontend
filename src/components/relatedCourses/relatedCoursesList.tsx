import React from 'react';
import RelatedCourses from './relatedCourses';
interface IProps {
    imageSrc?: string;
    name: string;
}

const RelatedCoursesList: React.FC = () => {
    return (
        <div className='text-white bg-darkGrey p-4'>
            <p className='font-bold text-lg mb-2 ml-12'>Related Courses</p>
            <p className='text-lightGrey text-xs ml-12'>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every.</p>
            <div className='flex flex-wrap justify-center items-start gap-4'>
                <RelatedCourses />
                <RelatedCourses />
                <RelatedCourses />
                <RelatedCourses />
            </div>
        </div>

    );
};

export default RelatedCoursesList;