import React from 'react';
import StudentGallery from './studentGallery';
const StudentGalleryList: React.FC = () => {


    return (
            <div className='flex w-full flex-wrap justify-center items-start gap-2'>
                <StudentGallery name='Mohamed Alaa' imageSrc='testimage3.png' />
                <StudentGallery name='Karim Yasser' imageSrc='testimage2.png' />
                <StudentGallery name='Ahmed Sayed' imageSrc='testimage3.png' />
                <StudentGallery name='Ahmed Sayed' imageSrc='testimage2.png' />
                <StudentGallery name='Mohamed Alaa' imageSrc='testimage1.jpeg' />
                <StudentGallery name='Karim Yasser' imageSrc='testimage2.png' />
                <StudentGallery name='Ahmed Sayed' imageSrc='testimage3.png' />
                <StudentGallery name='Ahmed Sayed' imageSrc='testimage4.png' />
            </div>
    );
};

export default StudentGalleryList;