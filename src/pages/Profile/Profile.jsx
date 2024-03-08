import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import "./Profile.scss"
import ProfileMain from "../../components/ProfileMain/ProfileMain";
import HomeLeft from "../../components/HomeLeft/HomeLeft";
import MobileHeader from "../../components/HomePost/MobileHeader";

const Profile = () => {
  return (
    <div className="profile">
      <SideBar />
      <ProfileMain />
      <HomeLeft />
    </div>
  );
};

export default Profile;
