import React from 'react';
const CourseSider: React.FC = () => {
    return (
        <div className="bg-neutral-900 shadow-md font-roboto h-full">
            <div className='pl-3 flex justify-between items-center py-2 pr-4 cursor-pointer'>
                <div>
                    <p className='text-white text-lg font-bold mb-0 pb-1 pt-2'>Chapter 1</p>
                    <div className="flex items-center justify-start gap-3 text-lightGrey text-xs">
                        <p>4 Lessons</p>
                        <p>2 Quizzes</p>
                        <p>35 Mins</p>
                    </div>
                </div>
                <div className='text-white'>⌃</div>
            </div>
            <div className='pl-3 flex justify-between items-center py-2 pr-4 cursor-pointer'>
                <div>
                    <p className='text-white text-lg font-bold mb-0 pb-1 pt-2'>Chapter 2</p>
                    <div className="flex items-center justify-start gap-3 text-lightGrey text-xs">
                        <p>4 Lessons</p>
                        <p>2 Quizzes</p>
                        <p>35 Mins</p>
                    </div>
                </div>
                <div className='text-white'>⌃</div>
            </div>
            <div className='pl-3 flex justify-between items-center py-2 pr-4 cursor-pointer'>
                <div>
                    <p className='text-white text-lg font-bold mb-0 pb-1 pt-2'>Chapter 3</p>
                    <div className="flex items-center justify-start gap-3 text-lightGrey text-xs">
                        <p>4 Lessons</p>
                        <p>2 Quizzes</p>
                        <p>35 Mins</p>
                    </div>
                </div>
                <div className='text-white'>⌃</div>
            </div>
        </div>
    );
};

export default CourseSider;