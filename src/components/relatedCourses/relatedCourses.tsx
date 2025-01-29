import React from 'react';
interface IProps {
    imageSrc?: string;
    name: string;
}
const RelatedCourses: React.FC = () => {
    return (
        <div className="bg-black w-80 bg-[url('/testimage1.jpeg')] bg-cover bg-no-repeat bg-center text-white relative rounded-sm font-roboto filter grayscale">
            <p className='font-bold w-60 pt-40 pb-0 mb-0 ml-2'>The Ultimate Unreal Engine 2D Game Development Course</p>
            <p className='font-semibold text-xs pt-0 pb-0 flex text-lightGrey items-center gap-2 ml-2 mb-1'>
                <span>Unreal Engine</span>
                <span>Beginner</span>
                <span>Arabic/Spanish/English</span>
            </p>
            <div className="items-center justify-center pb-2 pl-2 pr-2">
                <button className='bg-black text-white font-bold text-sm flex items-center justify-center w-full h-8 rounded-sm'>Learn More</button>
            </div>
        </div>
    );
};

export default RelatedCourses;