import React, { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import { IconContext } from 'react-icons/lib';
import { CgCloseR } from "react-icons/cg";
import LoginFirstStep from '../Login/Loginfirststep';
import { Link } from 'react-router-dom';

const MainNavbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showLogin, setShowLogin] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    return (
        <React.Fragment>
            {/* Navbar */}
            <nav className={`flex course-title-div justify-between fixed items-center h-[72px] w-full backdrop-blur-sm border-b border-transparent px-[48px] transition-all duration-300 ease-in-out z-[1000] top-0 ${isMenuOpen
                    ? "bg-[rgba(95,53,138,0.84)] backdrop-blur-[32px]"
                    : "bg-[#100A1A1F] px-[48px]"
                }`}
                style={{
                    borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(153, 153, 153, 0.12) 100%) 1',
                }}>
                <a href="">
                    <img src="/03-white.png" alt="" className='w-[95px]' />
                </a>

                <ul className='hidden xl:flex items-center justify-center gap-[48px] font-[Poppins] text-[16px] leading-[24px] font-light text-white w-[740px] relative'>
                    <li className='py-[24px] relative group cursor-pointer'>
                        <span className='relative inline-block'>
                            <Link to='/'>Home</Link>
                            <span className='absolute bottom-[-24px] left-0 w-full h-[3px] bg-[#E1FF00] scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100'></span>
                        </span>
                    </li>
                    <li className='py-[24px] relative group cursor-pointer'>
                        <span className='relative inline-block'>
                            <Link to='/courses'>Courses</Link>
                            <span className='absolute bottom-[-24px] left-0 w-full h-[3px] bg-[#E1FF00] scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100'></span>
                        </span>
                    </li>
                    <li className='py-[24px] relative group cursor-pointer'>
                        <span className='relative inline-block'>
                            <Link to='about-us'>About Us</Link>
                            <span className='absolute bottom-[-24px] left-0 w-full h-[3px] bg-[#E1FF00] scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100'></span>
                        </span>
                    </li>
                    <li className='py-[24px] relative group cursor-pointer'>
                        <span className='relative inline-block'>
                            <Link to='/blog'>Blog</Link>
                            <span className='absolute bottom-[-24px] left-0 w-full h-[3px] bg-[#E1FF00] scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100'></span>
                        </span>
                    </li>
                </ul>

                <div className='hidden xl:flex flex-row gap-[24px]'>
                    <button className='font-[Graphik] font-medium text-[14px] leading-[21px] text-white'>عربي</button>
                    <button
                        className='font-[Poppins] font-normal text-[14px] leading-[21px] px-3 py-2 bg-[#332052] text-white rounded-lg w-[96px]'
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                </div>

                <IconContext.Provider value={{ color: '#E1FF00', size: '20px' }}>
                    <div className='bg-[#5F358A] rounded-[6px] p-[10px] xl:hidden cursor-pointer'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <CgCloseR /> : <FiMenu />}
                    </div>
                </IconContext.Provider>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed xl:hidden top-[72px] left-0 w-full backdrop-blur-sm bg-[rgba(95,53,138,0.84)] backdrop-blur-[32px] flex flex-col items-center transition-all duration-300 ease-in-out z-[1000] ${isMenuOpen
                    ? "translate-y-0 opacity-100 "
                    : "-translate-y-0 opacity-0"
                }`}
                style={{ zIndex: 1000 }}>
                <Link to='/' className='relative p-[24px] pl-[48px] font-[Poppins] font-light text-[16px] w-full hover:bg-[rgba(255,255,255,0.12)] text-white group'>
                    Home
                    <span className='absolute top-0 left-0 h-full w-[3px] bg-[rgba(225,255,0,1)] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100'></span>
                </Link>
                <Link to='/courses' className='relative p-[24px] pl-[48px] font-[Poppins] font-light text-[16px] w-full hover:bg-[rgba(255,255,255,0.12)] text-white group'>
                    Courses
                    <span className='absolute top-0 left-0 h-full w-[3px] bg-[rgba(225,255,0,1)] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100'></span>
                </Link>
                <Link to='about-us' className='relative p-[24px] pl-[48px] font-[Poppins] font-light text-[16px] w-full hover:bg-[rgba(255,255,255,0.12)] text-white group'>
                    About Us
                    <span className='absolute top-0 left-0 h-full w-[3px] bg-[rgba(225,255,0,1)] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100'></span>
                </Link>
                <Link to='/blog' className='relative p-[24px] pl-[48px] font-[Poppins] font-light text-[16px] w-full hover:bg-[rgba(255,255,255,0.12)] text-white group'>
                    Blog
                    <span className='absolute top-0 left-0 h-full w-[3px] bg-[rgba(225,255,0,1)] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100'></span>
                </Link>
                <div className='flex flex-row w-full justify-around border border-t-[#5F358A] border-transparent gap-[16px] px-[24px] py-[16px] bg-[rgba(51, 32, 82, 1)]'>
                    <button className='font-[Graphik] font-medium text-[14px] leading-[21px] text-[#E1FF00] rounded-lg px-5 py-2.5 bg-[rgb(95,53,138)]'>
                        عربي
                    </button>
                    <button
                        className='font-[Poppins] font-normal text-[14px] leading-[21px] bg-[#0A0A2B] text-white rounded-lg w-[240px] px-5 py-2.5'
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                </div>
            </div>

            {/* Login Component */}
            {showLogin && (
                <div className="fixed inset-0 z-[2000] flex justify-center items-center bg-[#0A031652] backdrop-blur-[12px]">
                    <LoginFirstStep onClose={handleCloseLogin} />
                </div>
            )}
        </React.Fragment>
    );
};

export default MainNavbar;