import React, { useState } from "react";
import "./SideBar.scss";
import { useNavigate } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RiNotificationLine } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import {toast} from 'react-toastify'
import { UserState } from "../../context/context";

const SideBar = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const {user} = UserState()

  const profileHandler = () =>{
    navigate('/profile')
  }
  const logoutHandler = () => {
    navigate("/login");
    document.cookie = `token=${null};max-age= 0`;
    toast.success("logout successfull");
  }
  return (
    <div className="sideBar">
      <div>
        <div className="sideBarBtn" onClick={() => navigate("/")}>
          <BsTwitterX />
        </div>
        <div className="sideBarBtn" onClick={() => navigate("/")}>
          <GoHome />
          <p>Home</p>
        </div>
        <div className="sideBarBtn" onClick={() => navigate("/search")}>
          <IoSearch />
          <p>Explore</p>
        </div>
        <div className="sideBarBtn" onClick={() => navigate('/img')}>
          <RiNotificationLine />
          <p>Notifications</p>
        </div>
        <div className="sideBarBtn">
          <BsTwitterX />
          <p>Premium</p>
        </div>
        <div className="sideBarBtn" onClick={profileHandler}>
          <IoPersonOutline />
          <p>Profile</p>
        </div>
        <div className="sideBarBtn more" onClick={() => setActive(!active)}>
          <div className={active ? "active" : ""}>Setting</div>
          <CiCircleMore />
          <p>More</p>
        </div>
        <button>Post</button>
        <div className="bottom">
          <div onClick={logoutHandler}>Logout Accout</div>
          <img
            src={user?.avatar}
            alt="user"
          />
          <div>
            <p>{user?.name}</p>
            <p>@{user?.username}</p>
          </div>
          <SlOptions />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
