import React from 'react';
interface IProps {
    imageSrc?: string;
    name: string;
}
const RelatedCourses: React.FC = () => {
    return (
        <div className="bg-black w-80 bg-[url('/testimage1.jpeg')] bg-cover bg-no-repeat bg-center text-white relative rounded-sm font-roboto">
            <p className='font-bold w-60 pt-40 pb-0 mb-1 ml-2 '>The Ultimate Unreal Engine 2D Game Development Course</p>
            <p className='font-light text-xs pt-0 pb-0 flex text-white items-center gap-2 ml-2 mb-1'>
                <span>Unreal Engine</span>
                <span>Beginner</span>
                <span>Arabic/Spanish/English</span>
            </p>
            <div className="items-center justify-center pb-2 pl-2 pr-2">
                <button style={{zIndex: 0}} className='bg-[#0a0a2b] text-white font-poppins text-sm flex items-center justify-center w-full h-8 rounded-md z-20'>Learn More</button>
            </div>
        </div>
    );
};

export default RelatedCourses;