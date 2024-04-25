import React from "react";
import Avatar2 from "/public/images/Avatar (2).png";
import NotificationIcon from "/public/icons/dashboard/Notification-icon.svg";
import { ArrowLeftIcon, ArrowRightIcon } from "../../common/svg";
const SideBar = ({ children, handleShowText, showText }) => {
  return (
    <aside
      className={` gap-7 flex flex-col md:pl-20 h-screen fixed md:static left-0 top-12  pl-3 z-50  rounded-md  sm:w-[20rem] mt-10 md:mt-0 `}
    >
      <div>
        <button
          onClick={handleShowText}
          className="absolute sm:static top-0 h-0 "
        >
          {showText ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </button>
      </div>
      <div
        className={`hidden md:flex flex-col gap-7 h-screen bg-wybt-white p-4 ${
          showText ? "w-64" : "md:w-fit items-center"
        }`}
      >
        <div className="md:flex items-center border-wybt-primary border p-3      rounded-md gap-3 hidden">
          <img src={Avatar2} alt="" className="p-0" />
          <span className={`flex gap-2 ${showText ? "" : "hidden"}`}>
            <p className="font-semibold">Tamya Jess</p>
            <img src={NotificationIcon} alt="Notification Icon" width="20fpx" />
          </span>
        </div>
        <div className="border-wybt-primary border p-6 rounded-md">
          {children}
        </div>
      </div>{" "}
      {showText && (
        <div className="md:hidden flex flex-col gap-7 p-4 bg-wybt-white rounded-md overflow-y-auto">
          <div className="flex items-center border-wybt-primary border p-4 rounded-md gap-3 ">
            <img src={Avatar2} alt="" />
            <span className="items-center flex flex-col">
              <p className="font-semibold">Tamya Jess</p>
              <img
                src={NotificationIcon}
                alt="Notification Icon"
                width="20fpx"
              />
            </span>{" "}
          </div>
          <div className="border-wybt-primary border p-4 rounded-md overflow-scroll md:overflow-auto">
            {children}
          </div>
        </div>
      )}
      <div></div>
    </aside>
  );
};

export default SideBar;
