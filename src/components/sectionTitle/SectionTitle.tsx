import React from 'react'

interface Props{
    heading :string,
    subHeading: string,
    description: string
}
function SectionTitle({heading, subHeading, description} : Props) {
  return (
    <div className='flex flex-col items-center content-center gap-2'>
        <p className='text-[#E1FF00] font-[agrandir] text-lg'>{subHeading}</p>
        <p className='text-[#E1FF00] font-[agrandir] text-3xl font-bold'>{heading}</p>
        <p className='description-text text-white font-[poppins] text-sm font-light'>{description}</p>
    </div>
  )
}

export default SectionTitle