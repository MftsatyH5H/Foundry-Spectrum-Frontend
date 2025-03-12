import React from 'react';
import Button from '../../button/button';

interface Props{
    heading :string,
    subHeading: string,
    button: string
}

function CommunityCard({heading,subHeading,button} : Props)  {

        return (
            <div className='w-full h-[148px] rounded-[12px] p-[32px] bg-[#332052] gap-[24px] flex'>
            <div className=' w-[10%] h-full'> 
                <img src="/9f8c4f8d5b0151daaabd032483af1a9f.png" alt="" className='object-cover w-[84px] h-[84px] hue-rotate-[-90deg]'/> 
            </div>
            <div className='w-[75%] h-full font-[Poppins] flex flex-col gap-2'>
                <p className='font-light text-[16px] leading-[24px] text-[#FFFFFF] '>{heading}</p>
                <p className='font-semibold text-[18px] leading-[27px] text-[#FFFFFF]'>{subHeading}</p>
                
            </div>
            <div className='w-[15%] h-full flex justify-center items-center'>
                <Button 
                text={button}
                backgroundColor={"#FFFFFF"}
                textColor={'#050517'}
                borderColor={"#C3C3D9"}
                width={'92px'}
                height={'52px'}
                fontSize={'16px'}
                />
            </div>
        </div>
        );
    }

 
export default CommunityCard;