import React from 'react';
import { Image } from 'antd';
import { ZoomInOutlined } from '@ant-design/icons';
interface IProps {
    imageSrc: string;
    name: string;
    profilePicture?: string;
}

const StudentGallery: React.FC<IProps> = ({ imageSrc, name }) => {
    return (
        <div className="border-2 border-[#291a42] w-80 text-white relative rounded-xl font-roboto">
            <div className='image-container rounded-xl'>
                <img className='rounded-xl' src={imageSrc} alt="profile" />
            </div>
            <div className="flex flex-col absolute top-36 mb-3 ml-3 items-center border-2 gap-4">
                {/* Author Name */}
                <div className="flex justify-center items-center">
                    <img className="w-6 h-auto rounded-full" src="/public/avatar.jpg" alt="profile" />
                    <span className="font-bold ml-2">{name}</span>
                </div>
                {/* View Larger */}
                <div className='flex justify-center items-center view-larger-text gap-2 text-center'>
                    <ZoomInOutlined />
                    <span className='font-bold'>View Larger</span>
                </div>
            </div>
        </div>
    );
};

export default StudentGallery;