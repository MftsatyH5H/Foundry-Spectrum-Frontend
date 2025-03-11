import React from 'react';
import CourseNavbar from './courseNavbar';
import CourseSider from './courseSider';
import CourseDescription from './courseDescription';
import CourseVideo from './CourseVideo';
import CourseDetailsCard from '../Cards/CourseDetails/CourseDetailsCard';

const CourseContainer: React.FC = () => {
    return (
        <div>
            <CourseVideo />
            <CourseNavbar />
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <CourseDescription />
                </div>
                <div className="col-span-1">
                    <CourseDetailsCard />
                </div>
            </div>
        </div>
    );
};

export default CourseContainer;