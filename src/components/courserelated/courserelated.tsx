import React, { Component } from 'react';
import './courserelated.css';

// Define the type for the course object
interface Course {
    id: number;
    title: string;
    category: string;
    level: string;
    imagesrc: string;
}

// Define the type for the component's props
interface CourserelatedProps {
    course: Course;
}

// Define the type for the component's state
interface CourserelatedState {
    title: string;
    category: string;
    level: string;
    imagesrc: string;
}

class Courserelated extends Component<CourserelatedProps, CourserelatedState> {
    constructor(props: CourserelatedProps) {
        super(props);

        // Initialize the state with type safety
        this.state = {
            title: props.course.title,
            category: props.course.category,
            level: props.course.level,
            imagesrc: props.course.imagesrc
        };
    }

    render() {
        const { imagesrc } = this.state;

        const cardStyle = {
            backgroundImage: `url(${imagesrc})`,
        };

        return (
            <div className='flex-1 w-[317px] h-[317px] card'>
                <div style={cardStyle} className='bg-cover bg-center h-[317px] w-[317px] rounded-[6px]'>
                    <div className='relative w-full h-full gredient-related to-transparent rounded-[6px]'>
                        <div className='text-white absolute bottom-0 small-card duration-500 ease-in-out flex flex-col w-full justify-center items-center p-3'>
                            <h1 className='font-[Poppins] text-[14px] leading-[21px] font-bold'>
                                {this.state.title}
                            </h1>
                            <div className='flex flex-row mt-[5px] gap-[10px] font-[poppins] text-[12px] leading-[18px]  text-[#AFAFC7] ml-[-25px]'>
                                <span>{this.state.category}</span>
                                <span>For {this.state.level}</span>
                                <span>English / Arabic</span>
                            </div>
                            <button className='pt-2 pr-3 pl-3 pb-2 bg-[#0A0A2B] rounded-lg font-medium w-full mt-[10px] font-[Poppins] text-[12px]'>
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Courserelated;