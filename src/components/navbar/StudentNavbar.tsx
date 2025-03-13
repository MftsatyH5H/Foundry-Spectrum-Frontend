import React, { useState } from "react";
import { Badge, Dropdown, ConfigProvider, MenuProps } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './Navbar.css'

interface NotificationItem {
  key: string;
  label: React.ReactNode;
}

const notifications: NotificationItem[] = [
  {
    key: "1",
    label: (
      <div
        className="px-4 py-3 bg-[#140D21] border border-b-[#2F2F4F] border-transparent flex flex-row gap-3 items-center"
      >
        <div className="flex justify-center items-center">
          <HiOutlineMegaphone size={32} className="text-white" />
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="font-[Poppins] text-[14px] leading-[125%] text-white font-normal">
            A new course just dropped! Unlock fresh insights and skills—enroll now and stay ahead! 🚀
          </p>
          <p className="font-[Poppins] text-[12px] leading-[125%] text-[#505075] font-normal">
            a few moments ago
          </p>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div
        className="px-4 py-3 bg-[#140D21] border border-b-[#2F2F4F] border-transparent flex flex-row gap-3 items-center"
      >
        <div className="flex justify-center items-center">
          <HiOutlineMegaphone size={32} className="text-white" />
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="font-[Poppins] text-[14px] leading-[125%] text-white font-normal">
            A new course just dropped! Unlock fresh insights and skills—enroll now and stay ahead! 🚀
          </p>
          <p className="font-[Poppins] text-[12px] leading-[125%] text-[#505075] font-normal">
            a few moments ago
          </p>
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div
        className="px-4 py-3 bg-[#140D21] border border-b-[#2F2F4F] border-transparent flex flex-row gap-3 items-center"
      >
        <div className="flex justify-center items-center">
          <HiOutlineMegaphone size={32} className="text-white" />
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="font-[Poppins] text-[14px] leading-[125%] text-white font-normal">
            A new course just dropped! Unlock fresh insights and skills—enroll now and stay ahead! 🚀
          </p>
          <p className="font-[Poppins] text-[12px] leading-[125%] text-[#505075] font-normal">
            a few moments ago
          </p>
        </div>
      </div>
    ),
  },
];

const StudentNavbar: React.FC = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState<boolean>(false);

  const handleProfileDropdownOpenChange = (open: boolean) => {
    setProfileDropdownOpen(open);
  };

  const notificationMenuProps: MenuProps = {
    items: notifications,
  };

  return (
      <nav
        className={`flex justify-between fixed items-center h-[72px] w-full backdrop-blur-sm border-b border-transparent px-[48px] transition-all duration-300 ease-in-out top-0 z-[1000]`}
        style={{
          borderImage:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(153, 153, 153, 0.12) 100%) 1",
        }}
      >
        <a href="">
          <img src="/03-white.png" alt="" className="w-[95px]" />
        </a>
        <div className="flex flex-row items-center gap-[32px]">
          <ul className="hidden xl:flex items-center justify-center gap-[48px] font-[Poppins] text-[16px] leading-[24px] font-light text-white  relative">
            <li className="py-[24px] relative group cursor-pointer">
              <span className="relative inline-block">
                Home
                <span className="absolute bottom-[-24px] left-0 w-full h-[3px] bg-[#E1FF00] scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </li>
            <li className="py-[24px] relative group cursor-pointer">
              <span className="relative inline-block">
                My Courses
                <span className="absolute bottom-[-24px] left-0 w-full h-[3px] bg-[#E1FF00] scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </li>
            <li className="py-[24px] relative group cursor-pointer">
              <span className="relative inline-block">
                I Need A Help
                <span className="absolute bottom-[-24px] left-0 w-full h-[3px] bg-[#E1FF00] scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </li>
          </ul>
          <ConfigProvider
            theme={{
              components: {
                Badge: {
                  dotSize: "8px",
                  boxShadow: "none",
                },
                drobdown: {
                  width: "300px",
                },
              },
            }}
          >
            <Dropdown
              menu={notificationMenuProps}
              placement="bottom"
              trigger={["click"]}
              rootClassName="w-[384px]"
              overlayClassName=""
              overlayStyle={{ padding: "0px" }}
              dropdownRender={(menu) => (
                <div className="bg-[#140D21] mt-3">
                  <h1 className="text-center px-4 py-2 text-[#DADAED] font-[Poppins] font-light text-[16px] leading-[150%] bg-[#332052]">
                    Notifications
                  </h1>
                  {menu}
                </div>
              )}
            >
              <Badge
                dot
                offset={[-14, 13]}
                className="bg-[#471F70B8] p-[8px] rounded-full cursor-pointer"
              >
                <IoIosNotificationsOutline size={24} className="text-white" />
              </Badge>
            </Dropdown>
          </ConfigProvider>
          <ConfigProvider>
            <Dropdown
              placement="bottom"
              trigger={["click"]}
              overlayStyle={{ padding: "0px" }}
              onOpenChange={handleProfileDropdownOpenChange}
              open={profileDropdownOpen}
              dropdownRender={(menu) => (
                <div className="bg-[#2F2F4F] mt-3 rounded-lg flex flex-col">
                  <div className="flex flex-col py-1">
                    <button className="px-4 py-2 text-[#AFAFC7] font-[Poppins] font-normal text-[14px] leading-[150%] text-left">
                      My profile Info
                    </button>
                    <button className="px-4 py-2 text-[#AFAFC7] font-[Poppins] font-normal text-[14px] leading-[150%] text-left">
                      Change My Email
                    </button>
                  </div>
                  <button className="px-4 py-2 text-[#F05252] font-[Poppins] font-normal text-[14px] leading-[150%] text-left border border-t-[#505075] border-transparent">
                    Sign Out
                  </button>
                </div>
              )}
            >
              <div className="flex flex-row items-center gap-[12px] cursor-pointer">
                <img
                  src="/profile.png"
                  alt="profile"
                  className="border border-[#291A42] rounded-full w-[40px]"
                />
                <h1 className="font-[Poppins] font-medium text-[14px] leading-[150%] text-white">
                  Karim0@gmail.com
                </h1>
                {profileDropdownOpen ? (
                  <IoIosArrowUp size={14} className="text-white" />
                ) : (
                  <IoIosArrowDown size={14} className="text-white" />
                )}
              </div>
            </Dropdown>
          </ConfigProvider>
        </div>
      </nav>
  );
};

export default StudentNavbar;