import React from 'react';
import {
  ClockCircleOutlined
} from '@ant-design/icons'
interface IProps {
  name: string,
  comment: string,
  course: string,
  date: string,
  // profilePicture: string
}
function TestimonialCard({
  name, comment, course, date,
}: IProps) {
  return (
    <div className="group bg-purpleGradient hover:bg-[#291a42] transition-colors duration-200 w-80 text-white p-3 rounded-xl font-roboto border-2 border-solid border-mediumPurple">
      <p className="text-sm leading-normal font-extralight mb-2">
        &quot;
        {comment}
        &quot;
      </p>
      <p className="font-light text-sm text-lightPurple group-hover:text-[#c0c67f] transition-colors duration-200 mb-2">
        {course}
      </p>
      <p className="font-thin text-lightGrey text-sm mb-2 flex items-center gap-2"><ClockCircleOutlined /> {date}</p>
      <div className="flex items-center content-between">
        <img className="w-6 h-auto rounded-full border-2 border-transparent group-hover:border-[#e8f1a5] transition-colors duration-200" src="/public/avatar.jpg" alt="profile" />
        <span className="font-thin text-sm ml-2">{name}</span>
      </div>
    </div>

  );
}

export default TestimonialCard;
