import React from 'react';
import CourseNavbar from './courseNavbar';
import CourseSider from './courseSider';
import CourseDescription from './courseDescription';
import CourseVideo from './CourseVideo';
import CourseDetailsCard from '../Cards/CourseDetails/CourseDetailsCard';
import RelatedCoursesList from '../relatedCourses/relatedCoursesList';
import Courserelatedlist from '../courserelated/courserelatedlist';

const CourseContainer: React.FC = () => {
    return (
        <div className=''>
            <CourseNavbar />
            <div className="grid grid-cols-4 container mx-auto">
                <div className="col-span-3">
                    <CourseDescription />
                </div>
                <div className="col-span-1 mt-[10px]">
                    <CourseDetailsCard />
                </div>
            </div>
        </div>
    );
};

export default CourseContainer;