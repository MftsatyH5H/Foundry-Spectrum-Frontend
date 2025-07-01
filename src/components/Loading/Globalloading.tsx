import React from "react";



const Globalloading = () => {
    return ( 
        <div className="flex flex-col items-center justify-center">
            <img src="/loading.gif" alt="loading" className="w-[72px] h-[72px]" />
            <p className="text-white text-[14px] font-semibold mt-[16px] leading-[150%] font-[Poppins]">Loading...</p>
        </div>
     );
}
 
export default Globalloading;