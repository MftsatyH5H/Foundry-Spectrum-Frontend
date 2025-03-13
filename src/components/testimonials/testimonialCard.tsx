import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';

interface IProps {
  name: string;
  comment: string;
  course: string;
  date: string;
}

function TestimonialCard({ name, comment, course, date }: IProps) {
  return (
    <div className="bg-[#140D21] group testimonial-card h-fit duration-200 w-80 text-white p-4 rounded-xl font-roboto transition-colors hover:bg-[#291a42]">
      <div className="flex flex-col gap-1">
        <p className="text-sm leading-normal font-poppins font-extralight mb-2">
          &quot;{comment}&quot;
        </p>
        <p className="font-light text-sm text-lightPurple duration-200 mb-2 hover:text-[#E1ff00]">
          {course}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-thin text-lightGrey text-sm mb-2 flex items-center justify-start gap-[4px]">
          <ClockCircleOutlined className="w-[16px] h-[16px] mt-[2px]" /> {date}
        </p>
        <div className="flex items-center content-between gap-[12px]">
          <img
            className="w-[24px] h-[24px] rounded-full duration-200 border-2 border-transparent transition-all hover:border-[#E1ff00]"
            src="/public/avatar.jpg"
            alt="profile"
          />
          <span className="font-thin text-sm">{name}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
