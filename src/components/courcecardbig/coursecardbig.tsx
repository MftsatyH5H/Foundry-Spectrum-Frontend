import React, { Component, useState } from 'react';
import './coursecardbig.css';

function Coursecardbig(props: any) {
    // const { imagesrc } = this.state;
    console.log('yesss: ',props.course)
    const cardStyle = {
        backgroundImage: `url(${props.course.imagesrc})`,
    };
    // state = {
    //     title: this.props.course.title,
    //     category: this.props.course.category,
    //     level: this.props.course.level,
    //     description: this.props.course.description,
    //     price: this.props.course.price,
    //     imagesrc: this.props.course.imagesrc
    // }


        return (
            <div className='rounded-3xl flex flex-row h-[600px] w-[1312px] relative overflow-hidden flex-2 cards cursor-pointer group '>
                <div 
                    className="absolute inset-0 rounded-3xl z-0 gredient"
                >
                    <div 
                        className="bg-center bg-cover relative w-full h-full rounded-3xl overflow-hidden "
                        style={cardStyle}
                    >
                        <div className='w-full h-full absolute bg-gradient-to-r from-[#050517]  to-transparent z-10 gradient-overlay  duration-900 ease-out '>
                            <div className="flex flex-row justify-center h-full w-full">
                                <div className='flex-auto flex flex-col max-w-[600px] max-h-[600px] ml-[64px] pt-[135px] '>
                                    <h1 className='font-[agrandir] text-[36px] leading-[54px] text-white font-bold'>{props.course.title}</h1>
                                    <div className='flex flex-row mt-[20px] gap-[24px] font-[Poppins] text-[16px] leading-[24px] text-white text-[#AFAFC7] ml-[15px]'>
                                    <span className='relative pl-[30px] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[""] before:w-[24px] before:h-[1px] before:bg-[#AFAFC7] before:ml-[-15px]'>
                                    {props.course.category}
                                        </span>
                                        <span className=' '>For {props.course.level}</span>
                                        <span className=' '>English / Arabic / Spanich</span>
                                    </div>
                                    <p className='font-[Poppins] text-[16px] leading-[24px] text-[#6D6D94] text-[#AFAFC7] mt-[20px] font-light'>
                                        {props.course.description}
                                    </p>
                                    <button className='text-foundryyellow font-[Poppins] font-medium text-[16px] leading-[24px] rounded-lg pt-3.5 pb-3.5 pr-8 pl-8 bg-[#291A42] w-[182px] h-[52px] mt-[40px]'>Buy Now {props.course.price}</button>
                                </div>
                                <div className='flex-auto flex justify-center items-center'>
                                    <button className='text-[14px] leading-[12px] text-white bg-[#471F701F] backdrop-blur-[8px] pt-[24px] pb-[24px] pl-[48px] pr-[48px] rounded-[200px] align-middle opacity-[0.7] learn font-[Poppins] ease-out duration-500 '>Learn More &rarr;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default Coursecardbig;