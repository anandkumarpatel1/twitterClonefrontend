import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import "./Profile.scss"
import ProfileMain from "../../components/ProfileMain/ProfileMain";

const Profile = () => {
  return (
    <div className="profile">
      <SideBar />
      <ProfileMain />
    </div>
  );
};

export default Profile;
