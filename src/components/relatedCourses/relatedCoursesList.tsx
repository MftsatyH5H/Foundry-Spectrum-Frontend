import React from 'react';
import RelatedCourses from './relatedCourses';
import Courserelated from '../courserelated/courserelated';
import Courserelatedlist from '../courserelated/courserelatedlist';
interface IProps {
    imageSrc?: string;
    name: string;
}
const courses = [
    {
        id: 1,
        title: "The Ultimate Unreal Engine 2D Game Development Course",
        category: "Unreal Engine",
        level: "Beginner",
        imagesrc: "karim-yasser-1.jpg"
    },
    {
        id: 2,
        title: "The Ultimate Unreal Engine 2D Game Development Course",
        category: "Unreal Engine",
        level: "Beginner",
        imagesrc: "/karim-yasser-2.jpg"
    },
    {
        id: 3,
        title: "The Ultimate Unreal Engine 2D Game Development Course",
        category: "Unreal Engine",
        level: "Beginner",
        imagesrc: "/karim-yasser-3.jpg"
    },
    {
        id: 4,
        title: "The Ultimate Unreal Engine 2D Game Development Course",
        category: "Unreal Engine",
        level: "Beginner",
        imagesrc: "/karim-yasser-3.jpg"
    }
]
const RelatedCoursesList: React.FC = () => {
    return (
        <div className='text-white p-4 w-full related-courses-container'>
            <div className='flex container mx-auto justify-start items-center gap-4 mb-3 ml-4'>
                <img src="new-logo.png" alt="new-logo" className='w-11 mb-2' />
                <div className="flex flex-col justify-start items-start ">
                    <p className='font-bold text-lg mb-2'>Related Courses</p>
                    <p className='text-[#5f358a] text-xs'>Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every.</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-start gap-14'>
                <Courserelatedlist />
            </div>
        </div>

    );
};

export default RelatedCoursesList;