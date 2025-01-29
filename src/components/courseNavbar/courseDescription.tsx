import React from 'react';

const CourseDescription: React.FC = () => {
    return (
        <>
            <div className="bg-neutral-900 shadow-md pt-0 mt-0 text-white font-roboto p-4">
                <p className='font-bold text-xl pt-4 pl-3'>Description</p>
                <p className='flex flex-col gap-2 pl-3'>
                    <span>In this course, you will start with absolutely no experience in game development whatsoever.</span>
                    <span>All of the important terms and concepts in game development will be introduced to you and explained carefully and in detail.</span>
                    <span>By the end, you will have four small game projects of different genres, ranging from 2D to 3D, and you'll understand the underlying principles needed to make any creation you can imagine.</span>
                    <span>The course starts you off as a complete beginner, but experienced developers will also benefit from this course, as many best practices and advanced features are covered throughout.</span>
                    <span>The course begins at the beginning - downloading the Epic Games Launcher, where we will install Unreal Engine 5, as well as gain access to the Epic Games Marketplace where we can get tons of free, high-quality assets for our games.</span>
                    <span>After familiarizing ourselves with the Unreal Engine editor, learning about asset types and how to import asset files, we get some practice manipulating objects in the level and building simple game environments with free asset packs.</span>
                    <span>We then get started learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every game developer needs to understand.</span>
                    <span>We get practice visualizing vectors in the engine with the various debug drawing Blueprint nodes.</span>
                </p>
            </div>
            <div className='bg-neutral-900 flex items-center justify-between px-16 py-2 text-white'>
                <span className='font-semibold text-xl'>#20 Lessons</span>
                <span className='font-semibold text-xl'>#12 Quiz</span>
                <span className='font-semibold text-xl'>#4 Chapter</span>
                <span className='font-semibold text-xl'>#20 Hours</span>
            </div>
            <div className='bg-neutral-900 shadow-md pt-0 mt-0 text-white font-roboto p-4'>
                <p className='font-bold text-xl pt-4 pl-3'>Learning Outcome</p>
                
            </div>
        </>
    );
};

export default CourseDescription;