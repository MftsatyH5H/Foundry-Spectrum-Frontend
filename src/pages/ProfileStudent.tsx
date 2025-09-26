import React, {useState, useEffect} from "react";
import StudentProfile from "../components/Cards/studentprofie/StudentProfile";
import MyCoursesCard from "../components/Cards/MyCoursesCard/MyCoursesCard";
import CommunityCard from "../components/Cards/inviteCard/CommunityCard";
import Courserelatedlist from "../components/courserelated/courserelatedlist";
import Blogsliderlist from "../components/blogsslider/blogsliderlist";
// import PerformanceChart from "../components/chart/PerformanceChart";
import ChartOverview from "../components/chart/ChartOverview";
import MentorshipRequests from "../components/Cards/MentorShipRequestsCard/MentorShipRequestsCard";
import { fetchUserData } from './../state/slices/user.slice';
import { useDispatch , useSelector } from 'react-redux';









function ProfileStudent() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const token = useSelector((state: any) => state.user.token);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    const fetchData = async () => {
      try {
        // If we have a token but no user data
          //@ts-ignore
          await dispatch(fetchUserData());
        
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading profile...</div>;
  }


  return (
    <>
      <div className="container mx-auto overflow-hidden  overflow-y-auto py-[104px] scrollbar-thin scrollbar-webkit">
        <div className="flex flex-row gap-[40px]">
          {/* Student Profile Section */}
          <div className="sticky top-0 self-start">
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

            <div className="w-full">
              <MentorshipRequests />
            </div>

            <div className="w-full">
              <CommunityCard heading="Invite & Win" subHeading="You can invite your friends and they wil got 20% Disounct and you will wil 20000 Point + Free Mentorhsip Sessions" button="Invite"/>
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
              <Courserelatedlist width="!w-[317px]"/>
            </div>
            <div className="flex flex-col gap-[16px] w-full">
              <h1 className="text-foundryyellow font-[agrandir] font-bold text-[24px] leading-[150%]">
                Latest Article
              </h1>
              <p className="font-[Poppins] font-light text-[14px] leading-[100%] text-[#6D6D94]">Learning the basic structure of the Blueprint visual scripting system, as well as cover the fundamental math skills every .</p>
              <Blogsliderlist  width="!w-[360px]" margin="!ml-0"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileStudent;