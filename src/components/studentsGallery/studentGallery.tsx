import React from 'react';
import { LuZoomIn } from 'react-icons/lu';

interface IProps {
    imageSrc: string;
    name: string;
    profilePicture?: string;
    className?: string; // Allow custom className
}

const StudentGallery: React.FC<IProps> = ({ imageSrc, name, className }) => {
    return (
<div className={`group student-gallery cursor-pointer overflow-hidden border-2 border-[#291a42] hover:border-[#5a3283] transition-all duration-300 ease-in-out w-80 text-white relative rounded-xl font-roboto ${className}`}>
    <div className="image-container rounded-xl w-full h-full">
        <img className="rounded-xl w-full h-full object-cover" src={imageSrc} alt="profile" />
    </div>
    <div className="flex flex-col absolute view-larger-text ml-3 items-center gap-4">
        {/* Author Name */}
        <div className="flex justify-center items-center">
            
            <div className='view-larger-box'>
                <div className='flex flex-row author-name items-center justify-between'>
                    <img className="w-6 h-auto rounded-full" src="/public/avatar.jpg" alt="profile" />
                    <span className="font-bold ml-2 ">{name}</span>
                </div>
                <div className='view-larger-text flex flex-row items-center justify-center ml-[85px] gap-2'>
                    <LuZoomIn className='text-foundryyellow w-[16px] h-[16px]'/>
                    <span className=' font-poppins text-foundryyellow'>View Larger</span>
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default StudentGallery;
