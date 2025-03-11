import React from 'react';
import { PiCubeFill } from "react-icons/pi";


const AboutUsContent = () => {

  return (
        <div 
        className="rounded-[16px] px-[64px] py-[80px] w-fit"
        style={{
            background: `
            linear-gradient(140.37deg, rgba(82, 53, 135, 0.12) 22.17%, rgba(20, 13, 33, 0.12) 77.35%),
            radial-gradient(52.03% 7.49% at 50% -2.87%, rgba(225, 255, 0, 0.2) 0%, rgba(225, 255, 0, 0) 100%)
            `,
            border: `1px solid #2F2F4F`
        }}
        >
        <div className=" h-[525.9993286132812px] border-b-[2px] pt-[96px] pb-[96px] gap-[64px] border-[#E1FF00]"
        style={{
            borderImageSource: "linear-gradient(90deg, #141315 0%, #E1FF00 16.5%, #E1FF00 86.5%, #020103 100%)",
            borderImageSlice: 1
          }}
         >
                <div className="h-[333.99932861328125px] pt-[96px] pb-[96px]  justify-center flex flex-col items-center ">

                    <div className="w-[329px] mb-[120px]">
                        <img src="/Foundry-yellow.png" alt="" />
                    </div>

                    <div className="w-[756px] h-[138] gap-[12px]">

                        <p className="text-[#FFFFFF] text-[36px] leading-[54px] text-center font-normal font-[agrandir]">Who we are ?</p>
                        <p className="text-[#6D6D94] font-light text-[16px] leading-[24px] font-[Poppins] text-center ">Unlock your potential with our comprehensive courses designed for aspiring 3D builders and animators. Join a community of creators and elevate your skills to new heights.Unlock your potential with our comprehensive courses designed for aspiring 3D builders and animators. 

                        </p>

                    </div>

                </div>
        </div>

        <div className=" h-[904px] pt-[120px] pb-[120px] gap-[64px] border-b-[1px]" style={{
            borderImageSource: "linear-gradient(90deg, #141315 0%, #E1FF00 16.5%, #E1FF00 86.5%, #020103 100%)",
            borderImageSlice: 1
          }}>


            <div className=" h-[164px] gap-[8px] flex flex-col items-center mb-[64px]">
            
              
                    <p className="font-bold text-[36px] text-center font-[agrandir] leading-[54px] bg-gradient-to-r from-[#FCE8F3] to-[#E1FF00] bg-clip-text text-transparent" > 
                            Discover How Our Courses</p>
                    <p className="font-bold text-[36px] text-center font-[agrandir] leading-[54px] bg-gradient-to-r from-[#FCE8F3] to-[#E1FF00] bg-clip-text text-transparent">Empower You “Benefits”</p>
               
                    <p className="text-[#6D6D94] text-[16px] text-center leading-[24px]font-light font-[Poppins] w-[888px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            
            </div>

            <div className=" h-[436px] flex ">
                
                <div className="w-[375.9974365234375px] h-[436xp] gap-[80px] flex flex-col items-center">

                    <div className="flex flex-col items-center gap-[24px]"> 
                    <PiCubeFill size={48} className="text-[#5F358A]" />
                <p className="font-bold text-[18px] leading-[27px] font-[Poppins] text-[#FFFFFF]">Short heading goes here</p>
                <p className="font-normal text-[14px] leading-[21px] text-center  text-[#9898B5]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p></div>
                    <div className="flex flex-col items-center gap-[24px]">
                    <PiCubeFill size={48} className="text-[#5F358A]" />

                <p className="font-bold text-[18px] leading-[27px] font-[Poppins] text-[#FFFFFF]">Short heading goes here</p>
                <p className="font-normal text-[14px] leading-[21px] text-center  text-[#9898B5]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                    </div>

                </div>
                <div className=" flex items-center justify-center flex-auto ">


                    <img src="/02-Foudry-purple-.png" alt="" className=" h-[240px]"/>


                </div>
                <div className="w-[375.9974365234375px] h-[436xp] gap-[80px] flex flex-col items-center">

                    <div className="flex flex-col items-center gap-[24px]"> 
                    <PiCubeFill size={48}  className="text-[#5F358A]"/>


                <p className="font-bold text-[18px] leading-[27px] font-[Poppins] text-[#FFFFFF]">Short heading goes here</p>
                <p className="font-normal text-[14px] leading-[21px] text-center  text-[#9898B5]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p></div>
                    <div className="flex flex-col items-center gap-[24px]">
                    <PiCubeFill size={48}  className="text-[#5F358A]" />
                <p className="font-bold text-[18px] leading-[27px] font-[Poppins] text-[#FFFFFF]">Short heading goes here</p>
                <p className="font-normal text-[14px] leading-[21px] text-center  text-[#9898B5]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                    </div>

                </div>

            </div>      


        </div>

        <div className=" pt-[96px]">

          <div className="  gap-[80px] flex">

                <div className=" gap-[24px] flex flex-col items-start">
                    <img src="/02-Foudry-purple-.png" alt="" className=" h-[47.99954605102539px]"/>
                    <p className="font-bold text-[36px] leading-[54px] font-[agrandir]  bg-gradient-to-r from-[#FCE8F3] to-[#E1FF00] bg-clip-text text-transparent  ">Our Story</p>
                    <p className="font-normal text-[16px] leading-[24px] font-[Poppins] text-[#FFFFFF]">this course, you will start with absolutely no experience in game development whatsoever. All of the important terms and concepts in game development will be introduced to you and explained carefully and in detail. By the end, you will have four small game projects of different genres, ranging from 2D to 3D, and you'll understand the underlying principles needed to make any creation you can imagine.</p>
                    <p className="font-normal text-[16px] leading-[24px] font-[Poppins] text-[#FFFFFF]">The course starts you off as a complete beginner, but experienced developers will also benefit from this course, as many best practices and advanced features are covered throughout.</p>
                    <p className="font-normal text-[16px] leading-[24px] font-[Poppins] text-[#FFFFFF]">The course begins at the beginning - downloading the Epic Games Launcher, where we will install Unreal Engine 5, as well as gain access to the Epic Games Marketplace where we can get tons of free, high-quality assets for our games. After familiarizing ourselves with the Unreal Engine editor, learning about asset types and how to import asset files, we get some practice manipulating objects in the level and building simple game environments with free asset packs.</p>
                    <p className="font-normal text-[16px] leading-[24px] font-[Poppins] text-[#FFFFFF]">We then get started learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every game developer needs to understand. We get practice visualizing vectors in the engine with the various debug drawing Blueprint nodes.</p>
                </div>
                <img src="/aboutusimage.jpeg" alt="" className="w-[373px]  rounded-[24px] border-[2px] border-[#291A42] object-cover"/>

          </div>

        </div>        

    </div>
  )
}

export default AboutUsContent