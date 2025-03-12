import React from 'react'
 

const MentorshipRequests = () => {
  return (
    <div className='w-full  rounded-[8px] grediant flex justify-between p-[32px] gap-[24px]'>
        <div className='flex flex-row gap-[24px] items-center'>
            <div className='w-[162px]'>
                <img src="/Mentorshiprequests.png" alt="" className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-[4px]'>
                    <span className='font-[Poppins] font-light text-[16px] leading-[150%] text-white'>Private</span>
                    <h1 className='font-[agrandir] font-bold text-[24px] leading-[150%] text-white'>Mentorship Requests</h1>
                </div>
                <p className='font-light font-[Poppins] text-[#6D6D94] text-[14px] leading-[100%]'>You can request a 1-hour mentorship session with a course instructor for just $20. Get personalized explanations and answers to all your questions!</p>
            </div>
            <div>
                <button className='text-foundryyellow font-[Poppins] font-medium text-[16px] leading-[150%] bg-[#332052] px-6 py-3.5 rounded-lg w-[193px]'>Book Session Now</button>
            </div>
        </div>

    </div>
  )
}

export default MentorshipRequests