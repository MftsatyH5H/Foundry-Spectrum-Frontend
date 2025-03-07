import React, { Component } from 'react';
import Courserelated from './courserelated';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from 'swiper/modules';

// Define the type for a single course
interface Course {
    id: number;
    title: string;
    category: string;
    level: string;
    imagesrc: string;
}

// Define the type for the component's state
interface CourserelatedlistState {
    courses: Course[];
}

class Courserelatedlist extends Component<{}, CourserelatedlistState> {
    // Initialize the state with type safety
    state: CourserelatedlistState = {
        courses: [
            {
                id: 1,
                title: "The Ultimate Unreal Engine 2D Game Development Course",
                category: "Unreal Engine",
                level: "Beginner",
                imagesrc: "karim-yasser-1.jpg"
            },
            {
                id: 2,
                title: "The Ultimate Unreal Engine 2D Game Development Course",
                category: "Unreal Engine",
                level: "Beginner",
                imagesrc: "/karim-yasser-2.jpg"
            },
            {
                id: 3,
                title: "The Ultimate Unreal Engine 2D Game Development Course",
                category: "Unreal Engine",
                level: "Beginner",
                imagesrc: "/karim-yasser-3.jpg"
            },
            {
                id: 4,
                title: "The Ultimate Unreal Engine 2D Game Development Course",
                category: "Unreal Engine",
                level: "Beginner",
                imagesrc: "/karim-yasser-3.jpg"
            }
        ]
    };

    render() {
        return (
            <div className='flex justify-center items-center flex-row'>
                <Swiper
                    slidesPerView="auto" // Allow Swiper to calculate the number of slides per view
                    spaceBetween={20} // Space between slides
                    freeMode={true} // Enable free mode
                    modules={[FreeMode]} // Add FreeMode module
                    className='!w-fit' // Custom class for Swiper container
                >
                    {this.state.courses.map((course) => (
                        <SwiperSlide
                            key={course.id}
                            className="!w-[317px] ml-2" // Custom class for each slide
                        >
                            <Courserelated course={course} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}

export default Courserelatedlist;