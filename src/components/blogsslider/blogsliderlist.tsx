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
    width?: string;
    margin?: string;
}

// Define the type for the component's state
interface BlogsliderlistState {
    Blogs: Blog[];
}

// Define the type for the component's props
interface BlogsliderlistProps {
    width?: string;
    margin?: string;
 
}

class Blogsliderlist extends Component<BlogsliderlistProps, BlogsliderlistState> {
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
        const { width = "!w-[360]", margin } = this.props; 

        return (
            <div className='flex justify-center items-center flex-row'>
                <Swiper
                    slidesPerView="2" // Allow Swiper to calculate the number of slides per view
                    spaceBetween={24} // Space between slides
                    freeMode={{
                        enabled: true, // Enable free mode
                        momentum: true, // Enable momentum dragging
                    }}
                    modules={[FreeMode]} // Add FreeMode module
                    className={`flex items-center flex-row !w-fit ${margin}`}
                    onAfterInit={(swiper) => {
                        // Force Swiper to update after initialization
                        swiper.updateSlides();
                        swiper.updateSize();
                    }}
                >
                    {this.state.Blogs.map((blog) => (
                        <SwiperSlide
                            key={blog.id}
                            className={ width } 
                        >
                            <Blogslider blog={blog} width={width} margin={margin}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}

export default Blogsliderlist;