import React, { Component } from "react";

import { HiCheck } from "react-icons/hi2";
import { IconContext } from "react-icons/lib";

class PrivateClassroomcard extends Component {
  state = {};
  render() {
    return (
      <div className=" bg-[#140c21] rounded-[12px] p-[24px] gap-6 w-[864px] h-[234px] flex  ">
        <div >
          <div className="flex justify-start w-[500px] h-[120px ] gap-[24px] mb-[23px]">
            <img
              src="/privateclassroom.png"
              className="w-[120px] h-[120px] object-contain grayscale"
              alt="sd"
            />
            <div className=" flex flex-col justify-center ">
              <p className="w-[127px] text-[#ffffff] font-[700px] text-[24px] leading-[36px]">
                Private
              </p>{" "}
              <p className="w-[127px] text-[#ffffff] font-[700px] text-[24px] leading-[36px]">
                {" "}
                ClassRoom
              </p>
            </div>
          </div>

          <div>
            <p className="font-[300px] text-[14px] leading-[21px] text-[#6d6d94]">
              You will have four small game projects of different genres,
              ranging from 2D to 3D, and you'll understand the underlying
              principles neede
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] border-[2px] border-l-[#999999] border-transparent">
          <div className=" flex justify-center w-full h-[29px]">
            <p className="font-[700px] size-[18px] text-[#FFFFFF] w-[266px]  text-center">
              $ 21.99 Monthly
            </p>
          </div>
          <div className="flex flex-col items-start w-full gap-[16px] h-[95px] pl-6">
            <IconContext.Provider value={{ className: "pr-2" }}>
              <p className="flex font-[300px] text-[14px] text-[#AFAFC7] ">
                <HiCheck size={"22"} />
                High quality assets for levels
              </p>
              <p className="flex font-[300px] text-[14px] text-[#AFAFC7] mt-2">
                <HiCheck size={"22"} />
                Get free, high quality assets.
              </p>
              <p className="flex font-[300px] text-[14px] text-[#AFAFC7] mt-2">
                <HiCheck size={"22"} />
                Quality assets for level characters.
              </p>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default PrivateClassroomcard;
