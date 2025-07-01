import React from 'react';
import Footersmall from '../footer/footersmall';




const Pageloading = () => {
    return ( 
        <div className='flex items-center justify-center h-screen'>
            <div className='backdrop-blur-[8px] bg-[#00000040] border border-[#2F2F4F] rounded-[16px] p-[48px]'>

            </div>
            <Footersmall />
        </div>
     );
}
 
export default Pageloading;