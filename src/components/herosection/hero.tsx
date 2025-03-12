import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[912px] w-full relative">
      <div className="w-[817px]  absolute top-[215px] left-0 bg-[rgba(20,13,33,0.48)] backdrop-blur-[12px] rounded-tr-[24px] rounded-br-[24px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)]  p-[32px]">
        <div className="p-[32px] flex flex-row gap-8">
          <div className="w-[24px]  flex flex-col justify-between items-center">
            <div className="w-[2px] h-full bg-[#2F2F4F] mb-[32px] "></div>
            <div className="w-[24px] h-[24px]">
              <img
                src="/02-Foudry-purple-.png"
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-[48px]">
            <h1 className="font-[agrandir] font-bold text-[48px] leading-[150%] text-foundryyellow">
              Transform Your Creativity into Stunning 3D Art
            </h1>
            <p className="font-[Poppins] font-normal text-[18px] leading-[150%] text-[#9898B5]">
              Unlock your potential with our comprehensive courses designed for
              aspiring 3D builders and animators.
            </p>
            <div className="flex flex-row items-center rounded-full gap-[8px] p-[12px] bg-[#2f1d4e] w-fit group transition-all duration-3000 shadow-[rgba(0,0,0,0.6)_0px_13px_27px_-5px,rgba(0,0,0,0.3)_0px_8px_16px_-8px]">
              <div className="flex flex-row  ">
                <img
                  src="/profile.png"
                  alt=""
                  className="w-[24px] h-[24px] rounded-full border border-[#1B1524] "
                />
                <img
                  src="/profile.png"
                  alt=""
                  className="w-[24px] h-[24px] rounded-full border border-[#1B1524] ml-[-12px] group-hover:ml-[0px] transition-all duration-3000"
                />
                <img
                  src="/profile.png"
                  alt=""
                  className="w-[24px] h-[24px] rounded-full border border-[#1B1524] ml-[-12px] group-hover:ml-[0px] transition-all duration-3000"
                />
                <img
                  src="/profile.png"
                  alt=""
                  className="w-[24px] h-[24px] rounded-full border border-[#1B1524] ml-[-12px] group-hover:ml-[0px] transition-all duration-3000"
                />
                <img
                  src="/profile.png"
                  alt=""
                  className="w-[24px] h-[24px] rounded-full border border-[#1B1524] ml-[-12px] group-hover:ml-[0px] transition-all duration-3000"
                />
              </div>
              <p className="font-[Poppins] font-semibold text-[14px] leading-[150%] text-[#9898B5] ">
                +200 Students Trusted Us
              </p>
            </div>
            <button className="rounded-lg border border-[#C3C3D9] bg-white font-[Poppins] font-medium text-[16px] leading-[150%] text-[#050517] py-3.5 w-[176px]">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
