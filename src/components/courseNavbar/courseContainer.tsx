import React from 'react';
import CourseNavbar from './courseNavbar';
import CourseSider from './courseSider';
import CourseDescription from './courseDescription';
import CourseVideo from './CourseVideo';
import CourseDetailsCard from '../Cards/CourseDetails/CourseDetailsCard';
import RelatedCoursesList from '../relatedCourses/relatedCoursesList';
import Courserelatedlist from '../courserelated/courserelatedlist';
import { Course } from '../../types/course.type';

interface CourseContainerProps {
    course: Course;
}

const CourseContainer: React.FC<CourseContainerProps> = ({ course }) => {
    return (
        <div className=''>
            <CourseNavbar course={course} />
            <div className="grid grid-cols-4 container mx-auto">
                <div className="col-span-3">
                    <CourseDescription course={course} />
                </div>
                <div className="col-span-1 mt-[10px]">
                    <div className="sticky top-20">
                        <CourseDetailsCard course={course} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseContainer;