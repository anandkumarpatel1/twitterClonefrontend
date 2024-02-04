import React from "react";
import "./ProfileMain.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";

const ProfileMain = () => {
  return (
    <div className="profile-main">
      <div className="heading">
        <FaArrowLeft />
        <div>
          <h2>Niranjan Kumar</h2>
          <p>20 Post</p>
        </div>
      </div>

      <div className="banner">
        <img
          src="https://pbs.twimg.com/profile_banners/1594724152661127173/1669056859/1500x500"
          alt="bannerpic"
        />
      </div>

      <div className="profile-user-details">
        <div className="first">
          <div className="profile">
            <img
              src="https://pbs.twimg.com/profile_images/1594766167503433728/_P77j_Yt_400x400.jpg"
              alt="userImage"
            />
            <div className="profile-details">
              <h2>Niranjan Kumar</h2>
              <p>@sinha_niranjan_</p>
            </div>
          </div>
          <div className="edit-profile">
            <p>Edit Profile</p>
          </div>
        </div>
        <p>student at Bhagalpur college of egineering || web developer ||</p>

        <div className="joining-date">
          <FaRegCalendarDays />
          Joined November 2022
        </div>

        <div className="profile-follower">
          <p>
            {" "}
            <p>46</p> Following{" "}
          </p>
          <p>
            {" "}
            <p>70</p> Follower{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
