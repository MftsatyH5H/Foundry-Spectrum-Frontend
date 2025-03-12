import * as React from "react";

const PrivateMentorHome = () => {
  return (
    <div
      className="p-[64px] flex flex-row gap-[80px] backdrop-blur-[2px] border border-[#2F2F4F] rounded-[16px]"
      style={{
        background:
          "linear-gradient(115deg, rgba(82, 53, 135, 0.12) 27.02%, rgba(20, 13, 33, 0.12) 96.63%)",
      }}
    >
      <div className="flex flex-col gap-[24px] w-[50%]">
        <img src="/02-Foudry-purple-.png" alt=""  className="w-[48px]"/>
        <h1 className="font-[agrandir] font-bold text-[36px] leading-[150%] bg-gradient-to-r from-[#FCE8F3] to-[#E1FF00] bg-clip-text text-transparent">
          Our Private <br />
          Mentor Services
        </h1>
        <p className="font-[Poppins] font-medium text-[16px] leading-[150%] text-white">
          Our private mentor service offers tailored guidance from industry
          experts, ensuring you receive the support you need to excel.
          Experience a customized learning journey that adapts to your unique
          goals and challenges.
        </p>
        <ul className="list-disc text-[#AFAFC7] font-[Poppins] font-medium text-[14px] leading-[150%]">
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur.
          </li>
        </ul>
        <button className="text-foundryyellow font-medium text-[16px] leading-[150%] rounded-lg px-5 py-3 bg-[#332052] w-[225px]">
          Book Your Session Now
        </button>
      </div>
      <div className="p-[10px] w-[50%]">
        <img
          src="/privatementorhome.gif"
          alt=""
          className="w-[478px] shadow-[0px_25px_50px_-12px_#00000040] rounded-[24px]"
        />
      </div>
    </div>
  );
};

export default PrivateMentorHome;
