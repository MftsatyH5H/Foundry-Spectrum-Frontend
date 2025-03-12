import React from "react";
import StudentProfile from "../components/Cards/studentprofie/StudentProfile";
import MyCoursesCard from "../components/Cards/MyCoursesCard/MyCoursesCard";
import InviteCard from "../components/Cards/inviteCard/invitaCard";
import Courserelatedlist from "../components/courserelated/courserelatedlist";
import Blogsliderlist from "../components/blogsslider/blogsliderlist";
import PerformanceChart from "../components/chart/PerformanceChart";
import ChartOverview from "../components/chart/ChartOverview";

function ProfileStudent() {
  return (
    <>
      <div className="container mx-auto overflow-hidden py-[104px] ">
        <div className="flex flex-row gap-[40px]">
          {/* Student Profile Section */}
          <div className="flex justify-center sticky top-[104px]">
            <StudentProfile />
          </div>

          {/* Main Content Section */}
          <div className="flex flex-col gap-[84px] flex-1 w-full">

            {/* My Courses Section */}
            <div className="w-full flex flex-row">
              <ChartOverview />
            </div>
            <div className="flex flex-col gap-[16px] w-full">
              <h1 className="text-foundryyellow font-[agrandir] font-bold text-[24px] leading-[150%]">
                Courses
              </h1>
              <MyCoursesCard />
            </div>

            {/* Invite Card Section */}
            <div className="w-full">
              <InviteCard />
            </div>

            {/* Second Invite Card Section */}
            <div className="w-full">
              <InviteCard />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[40px] mt-[84px]">
          <div className="p-[205px]"></div>
          <div className="flex flex-col gap-[84px]">
            <div className="flex flex-col gap-[16px] w-full">
              <h1 className="text-foundryyellow font-[agrandir] font-bold text-[24px] leading-[150%]">
                Recommended Courses
              </h1>
              <p className="font-[Poppins] font-light text-[14px] leading-[100%] text-[#6D6D94]">Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
              <Courserelatedlist />
            </div>
            <div className="flex flex-col gap-[16px] w-full">
              <h1 className="text-foundryyellow font-[agrandir] font-bold text-[24px] leading-[150%]">
                Latest Article
              </h1>
              <p className="font-[Poppins] font-light text-[14px] leading-[100%] text-[#6D6D94]">Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
              <Blogsliderlist />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileStudent;