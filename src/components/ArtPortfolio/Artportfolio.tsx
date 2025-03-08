import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from 'swiper/modules';
import { LuZoomIn } from "react-icons/lu";
import './artportfolio.css'
import { IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";



const Artportfolio = () => {
    const images = [
        '/karim-yasser-1.jpg',
        '/karim-yasser-2.jpg',
        '/karim-yasser-3.jpg',
        '/karim-yasser-1.jpg',
        '/karim-yasser-2.jpg',
        '/karim-yasser-3.jpg',
    ];

    return (
        <div className='h-[450px] w-full  flex mt-[20px]  relative'>
            <div className='w-[384px] h-full flex flex-col flex-shrink-0 z-10 p-[24px] gap-[8px] absolute'>
                <h1 className='font-[agrandir] font-bold text-foundryyellow text-[72px] leading-[100%]'>
                    <span className='font-thin'>Art</span><br />Portfolio
                </h1>
                <p className='font-[Poppins] font-light text-[#AFAFC7] text-[16px]'>
                    Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every 
                </p>
                <div className='flex flex-row gap-[24px] mt-[100px] '>
                    <button className='p-[9px] rounded-full flex items-center justify-center text-white cursor-pointer' style={{
                        background: `linear-gradient(270deg, rgba(5, 5, 23, 0.24) 0%, rgba(248, 255, 196, 0) 100%)`,
                    }}><IoIosArrowBack size={21}/></button>
                    <button className='p-[9px] rounded-full flex items-center justify-center text-white cursor-pointer' style={{
                        background: `linear-gradient(270deg, rgba(5, 5, 23, 0.24) 0%, rgba(248, 255, 196, 0) 100%)`,
                    }}><IoIosArrowForward size={21}/></button>
                </div>
            </div>

            {/* Swiper Slider */}
            <div className='flex-grow h-full ml-4 z-20 overflow-hidden'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView="auto" 
                    freeMode={{
                        enabled: true, // Enable free mode
                        momentum: true, // Enable momentum dragging
                    }}
                    modules={[FreeMode]}
                    pagination={{ clickable: true }}
                    className='h-full !pl-[400px]'
                >
                    {images.map((image, index) => (
                        <SwiperSlide className="!w-[384px] !mr-[32px] group gredient cursor-pointer" key={index}>
                            <div className='!w-[384px] h-full rounded shadow-[0px_25px_50px_-12px_#00000040] relative '>
                                <img src={image} className='h-full w-full object-cover rounded-[8px] cursor-pointer' alt={`image ${index + 1}`} />
                                <div className='w-full h-full font-[Poppins] font-medium text-[14px] leading-[150%] text-foundryyellow absolute  top-[0%] text-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[2px] transition-opacity duration-[0.5s] ease-in-out flex flex-row  items-center justify-center gap-2 px-[16px] py-[12px]' style={{background:"linear-gradient(180deg, rgba(51, 32, 82, 0) 0%, rgba(5, 5, 29, 0.9) 48.59%, rgba(5, 5, 29, 0.9) 51.6%, rgba(51, 32, 82, 0) 100%)",
      }} >
                                    <LuZoomIn size={16} />
                                    View Larger
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Artportfolio;