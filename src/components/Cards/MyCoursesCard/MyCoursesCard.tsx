import React from "react";
import "../cardgrediant.css";
import { FaArrowRight } from "react-icons/fa6";

const MyCoursesCard = () => {
  const progress = 5;

  return (
    <div className="grediant p-[16px] rounded-[8px] flex flex-row items-center w-fit">
      <div className="flex flex-row gap-[24px] items-center">
        <div className="w-[122px] h-[122px] rounded-[8px] overflow-hidden">
          <img
            src="/karim-yasser-3.jpg"
            alt="course"
            className="rounded-[6px] w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-[16px] pr-[16px]">
          <h1 className="font-[Poppins] font-bold text-[14px] leading-[150%] text-white">
            The Ultimate Unreal Engine 2D Game Development Course
          </h1>
          <div className="flex flex-row gap-[12px] items-center">
            <div className="flex flex-row gap-[4px] items-center">
              <img
                src="/profile.png"
                alt=""
                className="h-[16px] w-[16px] rounded-full"
              />
              <h2 className="font-[Poppins] font-light text-[12px] leading-[150%] text-[#9898B5]">
                By Mohamed Hussien
              </h2>
            </div>
            <span className="text-[#9898B5]">-</span>
            <span className="font-[Poppins] font-light text-[12px] leading-[150%] text-[#9898B5]">
              120 Lesson{" "}
            </span>
            <span className="font-[Poppins] font-light text-[12px] leading-[150%] text-[#9898B5]">
              3 Hours{" "}
            </span>
            <span className="font-[Poppins] font-light text-[12px] leading-[150%] text-[#9898B5]">
              32 Quiz{" "}
            </span>
          </div>
          <div className="">
            <div className="flex flex-row justify-between items-center mb-[5px]">
                <h2 className="font-[Poppins] font-medium text-[12px] leading-[150%] text-[#C3C3D9]">0 Min Watched</h2>
                <h2 className="text-foundryyellow font-[Poppins] font-medium text-[12px] flex flex-row items-center">let’s Start Now <FaArrowRight size={16} className={`text-foundryyellow ml-2`} /></h2>
            </div>
            <div className="w-full h-[8px] bg-[#332052] rounded-[20px]">
              <div
                className="h-full bg-[linear-gradient(90deg,#A17ACC_0%,#6C2BD9_647.37%)] transition-all duration-300 ease-in-out rounded-[20px]"
                style={{
                  width: `${progress}%`, // Use percentage for width
                }}
              ></div>
            </div>
          </div>
        </div>
        <div>
            <button className="text-foundryyellow bg-[#332052] px-5 py-2.5 text-[14px] font-[Poppins] font-medium leading-[150%] rounded-lg">Start Learning Journey</button>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesCard;
