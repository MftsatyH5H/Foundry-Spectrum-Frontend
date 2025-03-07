import React, { Component } from 'react';
import Blogslider from './blogslider';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from 'swiper/modules';

// Define the type for a single blog
interface Blog {
    id: number;
    title: string;
    category: string;
    description: string;
    imagesrc: string;
}

// Define the type for the component's state
interface BlogsliderlistState {
    Blogs: Blog[];
}

class Blogsliderlist extends Component<{}, BlogsliderlistState> {
    // Initialize the state with type safety
    state: BlogsliderlistState = {
        Blogs: [
            {
                id: 1,
                title: "A guide to in-demand roles in film and games",
                category: "Unreal Engine",
                description: "This is the most comprehensive Unreal Engine course available. If you want to learn how to architect a fully-functional RPG game, this course will give you the ability to do so with an expandable code base, architected with AAA quality code.",
                imagesrc: "karim-yasser-1.jpg"
            },
            {
                id: 2,
                title: "A guide to in-demand roles in film and games",
                category: "Unreal Engine",
                description: "This is the most comprehensive Unreal Engine course available. If you want to learn how to architect a fully-functional RPG game, this course will give you the ability to do so with an expandable code base, architected with AAA quality code.",
                imagesrc: "/karim-yasser-2.jpg"
            },
            {
                id: 3,
                title: "A guide to in-demand roles in film and games",
                category: "Unreal Engine",
                description: "This is the most comprehensive Unreal Engine course available. If you want to learn how to architect a fully-functional RPG game, this course will give you the ability to do so with an expandable code base, architected with AAA quality code.",
                imagesrc: "/karim-yasser-3.jpg"
            },
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
                    className='flex justify-center items-center flex-row !w-fit'
                    onAfterInit={(swiper) => {
                        // Force Swiper to update after initialization
                        swiper.updateSlides();
                        swiper.updateSize();
                    }}
                >
                    {this.state.Blogs.map((blog) => (
                        <SwiperSlide
                            key={blog.id}
                            className="!w-[360px] ml-2" // Custom class for each slide
                        >
                            <Blogslider blog={blog} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}

export default Blogsliderlist;