import React from 'react';



const StudentProfile = () => {
    return ( 
        <div className='py-[32px] px-[24px] bg-[#050517] flex flex-col gap-8 justify-center items-center w-[400px] h-fit rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]'>
            <div className='flex flex-col gap-[16px] items-center'>
                <div className='w-[96px] h-[96px] rounded-full'>
                    <img src="/profile.png" alt="profile"  className='w-full h-full rounded-full'/>
                </div>
                <h3 className='font-[Poppins] font-light text-[16px] text-white'>Hello 👋 </h3>
                <h1 className='font-[agrandir] font-bold text-[24px] leading-[150%] tracking-[-1%] text-white'>Karim Yasser</h1>
                <p className='font-[Poppins] font-light text-[12px] leading-[150%] text-[#9898B5]'>A good day to achieve more</p>
            </div>
            <div className='flex flex-row gap-[12px]'>
                <div className='flex flex-col gap-[2px] items-center'>
                    <h3 className='font-[Poppins] text-[14px] leading-[150%] text-white font-bold'>1390</h3>
                    <h3 className='font-[Poppins] text-[14px] leading-[150%] text-white font-bold'>Points</h3>
                    <h3 className='font-[Poppins] text-[14px] leading-[150%] text-[#BBBBBB] font-light'>From Quizes</h3>
                </div>
                <div className='flex flex-col gap-[2px] items-center'>
                    <h3 className='font-[Poppins] text-[14px] leading-[150%] text-white font-bold'>#122</h3>
                    <h3 className='font-[Poppins] text-[14px] leading-[150%] text-white font-bold'>Global Rank</h3>
                    <h3 className='font-[Poppins] text-[14px] leading-[150%] text-[#BBBBBB] font-light'>World</h3>
                </div>
                <div className='flex flex-col gap-[2px] items-center'>
                    <h3 className='font-[Poppins] text-[14px] leading-[150%] text-white font-bold'>#48</h3>
                    <h3 className='font-[Poppins] text-[14px] leading-[150%] text-white font-bold'>Country Rank</h3>
                    <h3 className='font-[Poppins] text-[14px] leading-[150%] text-[#BBBBBB] font-light'>Egypt</h3>
                </div>
            </div>
            <div className='h-[1px] w-full bg-[#291A42]'></div>

            <div className='flex flex-col gap-[12px] items-center'>
                <h2 className='font-[Poppins] font-light text-[16px] leading-[150%] bg-gradient-to-r from-[#FCE8F3] to-[#E1FF00] bg-clip-text text-transparent '>Earned Badges</h2>
                <p className='text-[#9898B5] font-[Poppins] font-light text-[12px] leading-[150%] '>Come on make a progress</p>
            </div>

        </div>
     );
}
 
export default StudentProfile;