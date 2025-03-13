import React from 'react';
import StudentGallery from './studentGallery';
const StudentGalleryList: React.FC = () => {


    return (
        <>
        <div className='flex w-full flex-wrap justify-center items-start gap-[24px]'>
            <button>
                <div className='flex flex-col gap-[24px]'>
                    <StudentGallery name='Ahmed Sayed' imageSrc='testimage6.png' />
                    <StudentGallery name='Mohamed Alaa' imageSrc='testimage8.png' />
                </div>
            </button>
            <button>
                <div className='flex flex-col gap-[24px]'>
                    <StudentGallery name='Mohamed Alaa' imageSrc='testimage9.jpg' />
                    <StudentGallery name='Ahmed Sayed' imageSrc='testimage7.jpg' />
                </div >
            </button>
            <button>
                <div className='flex flex-col gap-[24px]'>
                    <StudentGallery name='Ahmed Sayed' imageSrc='testimage5.jpg' />
                    <StudentGallery name='Mohamed Alaa' imageSrc='testimage3.png' />
                </div>
            </button>
            <button>
                <div className='flex flex-col gap-[24px]'>
                    <StudentGallery name='Mohamed Alaa' imageSrc='testimage2.png' />
                    <StudentGallery name='Ahmed Sayed' imageSrc='testimage5.jpg' />
                </div>
            </button>
            <div className="flex justify-center items-center w-full">
                <button className="bg-[#332052] text-foundryyellow font-semibold px-5 py-3 rounded-md">
                    Load More 50+
                </button>
            </div>
        </div>
        </>
    );
};

export default StudentGalleryList;