import React from 'react';

interface IProps{
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
    <div className="bg-black w-80 text-white p-3 rounded-xl font-roboto">
      <p className="text-sm leading-normal font-extralight mb-2">
        &quot;
        {comment}
        &quot;
      </p>
      <p className="font-semibold text-sm mb-2">{course}</p>
      <p className="font-thin text-sm mb-2">{date}</p>
      <div className="flex items-center content-between">
        <img className="w-6 h-auto rounded-full" src="/public/avatar.jpg" alt="profile" />
        <span className="font-bold ml-2">{name}</span>
      </div>
    </div>
  );
}

export default TestimonialCard;
