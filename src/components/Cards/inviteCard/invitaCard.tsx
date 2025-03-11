import React from 'react';
import Button from '../../button/button';



const InviteCard = () =>  {

        return (
            <div className='w-[864px] h-[148px] rounded-[12px] p-[32px] bg-[#332052] gap-[24px] flex'>
            <div className=' w-[10%] h-full'> 
                <img src="/9f8c4f8d5b0151daaabd032483af1a9f.png" alt="" className='object-cover w-[84px] h-[84px] hue-rotate-[-90deg]'/> 
            </div>
            <div className='w-[75%] h-full font-[Poppins] flex flex-col gap-2'>
                <p className='font-light text-[16px] leading-[24px] text-[#FFFFFF] '>Invite & Win</p>
                <p className='font-semibold text-[18px] leading-[27px] text-[#FFFFFF]'>You can invite your friends and they wil got 20% Disounct and you will wil 20000 Point + Free Mentorhsip Sessions</p>
                
            </div>
            <div className='w-[15%] h-full flex justify-center items-center'>
                <Button 
                text={'Invite'}
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

 
export default InviteCard;