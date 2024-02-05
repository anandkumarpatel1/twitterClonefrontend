import React from "react";
import "./SideBar.scss";
import { BsTwitterX } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RiNotificationLine } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div>
      <div>
        <BsTwitterX />
      </div>
      <div className="sideBarBtn">
        <GoHome />
        <p>Home</p>
      </div>
      <div className="sideBarBtn">
        <IoSearch />
        <p>Explore</p>
      </div>
      <div className="sideBarBtn">
        <RiNotificationLine />
        <p>Notifications</p>
      </div>
      <div className="sideBarBtn">
        <BsTwitterX />
        <p>Premium</p>
      </div>
      <div className="sideBarBtn">
        <IoPersonOutline />
        <p>Profile</p>
      </div>
      <div className="sideBarBtn">
        <CiCircleMore />
        <p>More</p>
      </div>
      <button>Post</button>
      <div className="bottom">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Mangekyou_Sharingan_Itachi.svg"
          alt="user"
        />
        <div>
          <p>Anand Kumar</p>
          <p>@anandkumar</p>
        </div>
        <SlOptions />
      </div>
      </div>
     
    </div>
  );
};

export default SideBar;
