import React from 'react';

const CourseNavbar: React.FC = () => {
    return (
        <nav className="bg-neutral-900 shadow-md pb-0 mb-0">
        <div className="container mx-auto">
            <ul className="flex justify-start space-x-8 border-b border-gray-700 pb-0 mb-0">
                <li>
                    <a href="#" className="relative no-underline block py-4 text-white font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:scale-x-100 transition-transform">Overview</a>
                </li>
                <li>
                    <a href="#" className="relative no-underline block py-4 text-gray-400 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 transition-transform">Instructor</a>
                </li>
                <li>
                    <a href="#" className="relative no-underline block py-4 text-gray-400 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 transition-transform">Downloads</a>
                </li>
                <li>
                    <a href="#" className="relative no-underline block py-4 text-gray-400 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 transition-transform">Community</a>
                </li>
                <li>
                    <a href="#" className="relative no-underline block py-4 text-gray-400 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 transition-transform">Mentorship</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default CourseNavbar;