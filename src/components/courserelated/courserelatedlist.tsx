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
    width?: string;
    margin?: string;
}

// Define the type for the component's state
interface CourserelatedlistState {
    courses: Course[];
}
interface CourserelatedlistProps {
    width?: string;
    margin?: string;
}

class Courserelatedlist extends Component<CourserelatedlistProps, CourserelatedlistState> {
    
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
        const { width = "!w-[360]", margin } = this.props; 
        return (
            <div className='flex justify-center items-center flex-row'>
                <Swiper
                    slidesPerView="3" 
                    spaceBetween={20} 
                    freeMode={{
                        enabled: true, 
                        momentum: true, 
                    }}
                    modules={[FreeMode]} 
                    className='!w-fit !ml-0' 
                >
                    {this.state.courses.map((course) => (
                        <SwiperSlide
                            key={course.id}
                            className={`${width} ml-2`} 
                        >
                            <Courserelated course={course} width={width} margin={margin}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}

export default Courserelatedlist;