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
        <div>
            <CourseNavbar />
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <CourseDescription />
                </div>
                <div className="col-span-1 mt-[10px]">
                    <CourseDetailsCard />
                </div>
            </div>
            <div className='mt-5 px-3'>
                <Courserelatedlist />
            </div>
        </div>
    );
};

export default CourseContainer;