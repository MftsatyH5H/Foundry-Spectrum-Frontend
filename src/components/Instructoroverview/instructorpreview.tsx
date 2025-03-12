import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEventNote } from "react-icons/md";

const InstructorPreview: React.FC = () => {
  const images: string[] = [
    '/karim-yasser-1.jpg',
    '/karim-yasser-2.jpg',
    '/karim-yasser-3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Timing configurations
  const fadeDuration: number = 4000; // Fade transition duration in milliseconds
  const zoomDuration: number = 5000; // Zoom effect duration in milliseconds

  // Reference to store timeout IDs for cleanup
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  useEffect(() => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];

    setIsZoomed(false);

    const zoomTimeout = setTimeout(() => {
      setIsZoomed(true);

      const nextSlideTimeout = setTimeout(() => {
        setPrevIndex(currentIndex);
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, zoomDuration);

      timeoutsRef.current.push(nextSlideTimeout);
    }, fadeDuration);

    timeoutsRef.current.push(zoomTimeout);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[710px]">
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          background:
            'linear-gradient(270deg, rgba(16, 10, 26, 0) 0%, #100A1A 76.22%)',
        }}
      ></div>

      <div className="absolute top-[72px] left-[48px] z-20 h-full flex flex-col items-center w-[384px] gap-[24px] pt-[24px]">
        <div className="rounded-full border border-foundryyellow h-[148px] w-[148px]">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full rounded-full"
          />
        </div>
        <h1 className="font-[agrandir] font-bold text-white text-[36px] leading-[150%]">
          Karim Yasser
        </h1>
        <p className="font-[Poppins] font-normal text-[rgba(175,175,199,1)] text-[16px] leading-[150%] text-center">
          This is the most comprehensive Unreal Engine course available. If you want to learn how to.
        </p>

        <span className='font-[Poppins] font-light text-center text-[12px] text-[rgba(109,109,148,1)]'>200+ Hours of teaching</span>

        <span className='font-[Poppins] font-light text-center text-[12px] text-[rgba(109,109,148,1)]'>2 Courses</span>

        <div className="flex flex-row justify-center gap-[24px] text-white">
          <FaLinkedin size={24} />
          <FaInstagram size={24} />
          <BsTwitterX size={24} />
          <FaYoutube size={24} />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg shadow-lg z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              transitionDuration: `${fadeDuration}ms`,
              overflow: 'hidden',
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-transform"
              style={{
                transitionDuration: `${zoomDuration}ms`,
                transitionTimingFunction: 'ease-out',
                transform:
                  isZoomed && index === currentIndex ? 'scale(1.3)' : 'scale(1.0)',
              }}
            />
          </div>
        ))}
      </div>

      <div className='absolute p-[24px] bottom-[-80px] bg-[rgba(41,26,66,0.24)] backdrop-blur-sm bg-opacity-30 z-20 w-[90%] left-[5%] rounded-[8px] flex flex-row gap-[24px] border-[1px] border-[rgba(153,153,153,0.24)] '>
        <div className='flex flex-col gap-[8px] '>
            <div className='flex flex-row gap-[12px] text-foundryyellow'>
                <MdOutlineEventNote size={24}/>
                <h1 className='font-[agrandir] text-[20px] font-bold text-white leading-[150%]'>Bio</h1>
            </div>
            <p className='font-[Poppins] font-normal text-[16px] leading-[150%] text-white'>The course begins at the beginning - downloading the Epic Games Launcher, where we will install Unreal Engine 5, as well as gain access to the Epic Games Marketplace where we can get tons of free, high-quality assets for our games. After familiarizing ourselves with the Unreal Engine editor, learning about asset types.</p>
        </div>
        <div className='relative flex flex-col gap-[8px] before:content-[""] before:h-[36px] before:rounded-[8px] before:w-[2px] before:bg-[rgba(153,153,153,0.24)] before:absolute before:translate-x-[-20px] before:translate-y-[100%]'>
            <div className='flex flex-row gap-[12px] text-foundryyellow'>
                <MdOutlineEventNote size={24}/>
                <h1 className='font-[agrandir] text-[20px] font-bold text-white leading-[150%]'>Education</h1>
            </div>
            <p className='font-[Poppins] font-normal text-[16px] leading-[150%] text-white'>Bachlore Degree in Computer Vision from faculty of computer science Ain shams Unversity, 2010</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorPreview;