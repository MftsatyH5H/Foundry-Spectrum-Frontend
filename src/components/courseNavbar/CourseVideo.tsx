import React, { useEffect, useRef, useState } from 'react';
import { PlayCircleFilled } from '@ant-design/icons';

function CourseVideo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const buttonSize = 200; // Approximate button size to avoid crossing edges
    const halfButton = buttonSize / 2;

    // Calculate new x, y positions relative to center
    let x = e.clientX - left - width / 2;
    let y = e.clientY - top - height / 2;

    // Clamp the values to prevent overflow
    x = Math.max(-width / 2 + (halfButton - 10), Math.min(width / 2 - (halfButton - 10), x));
    y = Math.max(-height / 2 + (halfButton - 70), Math.min(height / 2 - (halfButton - 70), y));

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const images: string[] = [
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
    <div className="flex items-center content-center course-title-div">
      <div style={{zIndex : -200}} className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg course-title-div shadow-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full image-course h-full transition-opacity ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
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
      <div className="w-8/12 h-[600px] p-3 flex flex-col gap-9">
        <div className='flex flex-col gap-3 mt-10 ml-6'>
          <span className='flex items-center justify-start text-lightGrey font-poppins gap-3 text-xs'>
            <span>Courses</span>
            <span>{'>'}</span>
            <span>Category Name</span>
            <span>{'>'}</span>
            <span>The Ultimate Unreal Engine Course</span>
          </span>
          <p className='text-white text-4xl font-bold'>The Ultimate Unreal Engine 2D Game Development Course</p>
          <div className='flex items-center justify-start gap-5 text-[#afafc7]'>
            <div className='w-5 border border-[#afafc7] mt-1'></div>
            <span>Unreal Engine</span>
            <span>For Beginner</span>
            <span>English / Arabic / Spanish</span>
          </div>
          <p className='text-lightGrey mt-6'>This is the most comprehensive Unreal Engine course available. If you want to learn how to architect a fully-functional RPG game, this course will give you the ability to do so with an expandable code base, architected with AAA quality code. </p>
        </div>

        <div className='flex justify-start items-center mb-2 ml-6'>
          <button className='bg-[#332052] text-[#cbe30a] font-semibold px-24 py-4 rounded-md'>Buy Now $200</button>
        </div>
        <div className='flex items-center gap-[16px] ml-6'>
          <img src='profile.png' className='w-9 rounded-full border-2 border-foundryyellow' />
          <div className='flex flex-col items-start justify-center'>
            <span className='font-poppins text-white font-semibold'>Karim Yasser</span>
            <span className='font-roboto text-lightGrey flex justify-center items-center gap-4'>
              <span>8 Courses</span>
              <span>200+ Hours of teaching</span>
            </span>
          </div>
        </div>
      </div>
      <div
        className="relative w-4/5 h-[600px] flex items-center justify-center overflow-hidden cursor-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="absolute py-4 px-6 font-semibold flex items-center content-center hover:border-foundryyellow bg-[#471F707A] border text-white shadow-lg transition-all duration-300 ease-out font-poppins gap-3 rounded-full watch-intro-button"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
          <PlayCircleFilled className='watch-now-icon' />
          Watch Intro
        </button>
      </div>

    </div>
  );
}

export default CourseVideo;
