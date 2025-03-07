import React, { Component } from 'react';

// Define the type for the blog object
interface Blog {
    id: number;
    title: string;
    category: string;
    description: string;
    imagesrc: string;
}

// Define the type for the component's props
interface BlogsliderProps {
    blog: Blog;
}

// Define the type for the component's state
interface BlogsliderState {
    title: string;
    category: string;
    description: string;
    imagesrc: string;
}

class Blogslider extends Component<BlogsliderProps, BlogsliderState> {
    constructor(props: BlogsliderProps) {
        super(props);

        // Initialize the state with type safety
        this.state = {
            title: props.blog.title,
            category: props.blog.category,
            description: props.blog.description,
            imagesrc: props.blog.imagesrc
        };
    }

    render() {
        const { imagesrc } = this.state;

        const cardStyle = {
            backgroundImage: `url(${imagesrc})`,
        };

        return (
            <div className='flex flex-col hover:bg-[#332052] ease-in-out duration-500 group p-[16px] w-[360px] h-[549px] ml-[10px] mr-[10px] rounded-lg'>
                <div className='bg-cover bg-center h-[256px] w-[328px] rounded-[6px]' style={cardStyle}>
                </div>
                <div className='flex flex-row mt-[20px] gap-[24px] font-[poppins] text-[12px] leading-[18px] text-white  ml-[15px]'>
                    <span className='relative ml-[7px] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[""] before:w-[12px] before:h-[1px] before:bg-white before:ml-[-20px] before:group-hover:text-white group-hover:text-foundryyellow duration-500 ease-in'>
                        {this.state.category}
                    </span>
                </div>
                <h1 className='font-[agrandir] font-bold text-[24px] leading-[36px] tracking-tight text-white pt-[10px]'>{this.state.title}</h1>
                <span className='font-[Poppins] text-[12px] leading-[18px] text-[#505075] font-normal pt-[10px] pb-[10px] group-hover:text-[#C3C3D9] duration-300 ease-in'>5 min read</span>
                <p className='font-[Poppins] font-normal text-[#C3C3D9] text-[14px] leading-[21px]'>{this.state.description}</p>
            </div>
        );
    }
}

export default Blogslider;