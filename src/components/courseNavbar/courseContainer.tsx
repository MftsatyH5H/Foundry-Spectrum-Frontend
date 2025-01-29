import React from 'react';
import CourseNavbar from './courseNavbar';
import CourseSider from './courseSider';
import CourseDescription from './courseDescription';

const CourseContainer: React.FC = () => {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-4">
                <CourseNavbar />
                <CourseDescription />
            </div>
            <div className="col-span-1">
                <CourseSider />
            </div>
        </div>
    );
};

export default CourseContainer;