import React, { Component } from 'react';
import Footersmall from './footersmall';
import Button from '../button/button';
import { AiOutlineX, AiFillYoutube,AiFillLinkedin,AiFillInstagram ,AiOutlineMail } from "react-icons/ai";
import { IconContext } from 'react-icons/lib';







class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className='pt-[80px] pb-[80px] pr-[64px] pl-[64px] bg-[#140D21] w-full h-[685px] '>
                <div className='flex justify-between items-center w-full flex-row h-[160px] '>
                    <div className='flex flex-col w-[560px] h-[144px]'>
                        <div className='w-[188px]  '>
                            <img src="/Foundry-yellow.png" alt="Foundry"  className=' w-full h-auto ' />
                        </div>
                        <p className='font-[Poppins] font-normal text-[#9898B5] text-[16px] leading-[24px] mt-[24px]'>
                            Join our monthly newsletter for helpful tips on how to run your business smoothlyJoin our monthly newsletter for helpful tips on how to run your business smoothly
                        </p>
                    </div>
                    <div className=' h-[160px]  flex flex-row gap-[32px] justify-center'>
                        <div className='flex flex-col w-[300px] '>
                            <h3 className='font-[Poppins] font-extrabold text-foundryyellow leading-[24px] text-[16px] mb-[10px]'>Foundry</h3>
                            <ul className='flex flex-col gap-[8px] text-[#FFFFFF] text-[16px] leading-[24px] font-thin'>
                                <li className='pt-[8px] pb-[8px] '>About Us</li>
                                <li className='pt-[8px] pb-[8px]'>Our Courses</li>
                                <li className='pt-[8px] pb-[8px]'>Blog Posts</li>
                            </ul>
                        </div>
                        <div className='flex flex-col w-[300px] '>
                            <h3 className='font-[Poppins] font-extrabold text-foundryyellow leading-[24px] text-[16px] mb-[10px]'>Help</h3>
                                <ul className='flex flex-col gap-[8px] text-[#FFFFFF] text-[16px] leading-[24px] font-thin'>
                                    <li className='pt-[8px] pb-[8px] '>FAQs</li>
                                    <li className='pt-[8px] pb-[8px] '>I Need a help</li>
                                    <li className='pt-[8px] pb-[8px] '>Terms of Use</li>
                                </ul>
                        </div>
                    </div>
  
                </div>
                <div className='w-[1312px] pt-[24px] pb-[50px] mt-[50px] border-[1px] border-t-[#471F70] border-transparent border-b-[#471F70] mb-[24px] flex flex-row justify-between items-center'>
                    <div className='flex flex-col w-[500px]'>
                        <h1 className='font-[agrandir] font-bold text-[24px] leading-[36px] text-white mb-[15px]'>Join the Newsletter</h1>
                        <p className='font-[Poppins] font-normal text-[16px] leading-[24px] text-[#9898B5]'> Join our monthly newsletter for helpful tips on how to run your business smoothly</p>
                        <form action="" className='flex flex-row  gap-[16px] mt-[24px] w-[500px] height-[42px] mb-[10px]'>
                        <IconContext.Provider
                        value={{ className: 'absolute z-10 p-[9px] ', color: '#9898B5' }}
                        >
                        <AiOutlineMail size={40} />
                        <input type="email" name="" id="" className='pt-3 pb-3 pr-4 pl-10 border border-[#505075]  bg-[#2F2F4F] w-[600px] h-[42px] rounded-[8px] text-white relative flex items-center' placeholder='Your email' />
                        </IconContext.Provider>
                            <Button text='Subscribe' backgroundColor='#332052' textColor='#E1FF00' height={'41px'} fontSize={'14px'} width={'10px'} />
                        </form>
                            <span className='font-[Poppins] text-[14px] leading-[21px] text-[#9898B5]'>We won’t send you spam. Unsubscribe at any time.</span>

                    </div>
                    <div className='w-[660px] h-[136px] flex flex-col gap-[24px] '>
                        <h1 className='font-[Poppins] font-extrabold text-foundryyellow leading-[24px] text-[16px] mb-[10px]'>Follow Us</h1>
                        <div>
                            <ul className='flex flex-row gap-[36px] text-[#FFFFFF] text-[16px] leading-[24px] font-thin font-[Poppins]'>
                                <li className='flex justify-center items-center gap-[10px] '><AiFillLinkedin  size={'24'}/>LinkedIn</li>
                                <li className='flex justify-center items-center gap-[10px] '><AiFillInstagram size={'24'}/>Instagram</li>
                                <li className='flex justify-center items-center gap-[10px] '><AiOutlineX size={'24'}/> X</li>
                                <li className='flex justify-center items-center gap-[10px] '><AiFillYoutube size={'24'}/> YouTube</li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <Footersmall />
            </div>
        );
    }
}
 
export default Footer;