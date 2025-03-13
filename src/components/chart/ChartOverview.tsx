import React from 'react'
import PerformanceChart from './PerformanceChart'

function ChartOverview() {
  return (
    <div className='flex flex-row w-full chart-container justify-between items-center rounded-[8px] h-[220px]'>
        <div className='bg-[#140d21] h-full w-1/2 grid grid-cols-2 gap-[32px] p-[24px] text-center'>
    <div className='flex flex-col items-center'>
        <span className='text-foundryyellow font-bold text-2xl font-[agrandir]'>1</span>
        <span className='font-poppins font-light text-sm text-white'>Courses Started</span>
    </div>
    <div className='flex flex-col items-center'>
        <span className='text-foundryyellow font-bold text-2xl font-[agrandir]'>0</span>
        <span className='font-poppins font-light text-sm text-white'>Answered Questions</span>
    </div>
    <div className='flex flex-col items-center'>
        <span className='text-foundryyellow font-bold text-2xl font-[agrandir]'>0</span>
        <span className='font-poppins font-light text-sm text-white'>Learning Hours</span>
    </div>
    <div className='flex flex-col items-center'>
        <span className='text-foundryyellow font-bold text-2xl font-[agrandir]'>0</span>
        <span className='font-poppins font-light text-sm text-white'>Points Earned</span>
    </div>
</div>

        <PerformanceChart />
    </div>
  )
}

export default ChartOverview