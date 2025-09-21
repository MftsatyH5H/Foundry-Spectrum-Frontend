import React from 'react';
import Coursecardbig from './coursecardbig';
import { Course } from '../../types/course.type';

interface CoursecardbiglistProps {
  courses: Course[];
}

const Coursecardbiglist: React.FC<CoursecardbiglistProps> = ({ courses }) => {
  return (
    <div className='flex flex-wrap justify-center items-center flex-col gap-[70px] mt-10'>
      {courses.map(course => (
        <React.Fragment key={course.id}>
          <Coursecardbig course={course} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Coursecardbiglist;