import React from 'react';
import { Image } from 'antd';
interface IProps {
    imageSrc: string;
    name: string;
    profilePicture?: string;
}

const StudentGallery: React.FC<IProps> = ({ imageSrc, name }) => {
    return (
        <div className="bg-black w-80 text-white relative rounded-xl font-roboto">
            <img className="rounded-xl filter grayscale" src={imageSrc} alt="profile" />
            <div className="flex absolute bottom-0 mb-3 ml-3 items-center content-between">
                <img className="w-6 h-auto rounded-full" src="/public/avatar.jpg" alt="profile" />
                <span className="font-bold ml-2">{name}</span>
            </div>
        </div>
    );
};

export default StudentGallery;