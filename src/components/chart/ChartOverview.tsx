import React from 'react'
import PerformanceChart from './PerformanceChart'

function ChartOverview() {
  return (
    <div className='flex flex-row justify-between items-center rounded-[8px]'>
        <div className='bg-[#140d21] w-1/2 px-32 py-[2.3rem] h-full'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col items-center justify-between'>
                    <span className='text-foundryyellow font-bold text-2xl font-[Agrandir]'>12</span>
                    <span className='text-white font-poppins font-light text-center'>Learning Hours</span>
                </div>
                <div className='flex flex-col items-center content-center'>
                    <span className='text-foundryyellow font-bold text-2xl font-[Agrandir]'>32</span>
                    <span className='text-white font-poppins font-light text-center'>Answered Questions</span>
                </div>
            </div>
            <div className='flex justify-between items-center mt-16'>
                <div className='flex flex-col items-center content-center'>
                    <span className='text-foundryyellow font-bold text-2xl font-[Agrandir]'>2</span>
                    <span className='text-white font-poppins font-light'>Courses Started</span>
                </div>
                <div className='flex flex-col items-center content-center'>
                    <span className='text-foundryyellow font-bold text-2xl font-[Agrandir]'>300</span>
                    <span className='text-white font-poppins font-light'>Points Earned</span>
                </div>
            </div>
        </div>
        <PerformanceChart />
    </div>
  )
}

export default ChartOverview