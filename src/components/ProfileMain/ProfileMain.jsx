import React from "react";
import "./ProfileMain.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ProfileMain = () => {
  const url = window.location.pathname;
  
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
          <h5>
            {" "}
            <p>46</p> Following{" "}
          </h5>
          <h5>
            {" "}
            <p>70</p> Follower{" "}
          </h5>
        </div>
      </div>

      <div className="profile-link">
        <NavLink
          to={`/profile`}
          style={{ color: `${url === "/profile" && "white"}` }}
        >
          Posts
        </NavLink>
        <NavLink
          to={`/profile/replies`}
          style={{ color: `${url === "/profile/replies" && "white"}` }}
        >
          Replies
        </NavLink>
        <NavLink
          to={`/profile/highlights`}
          style={{ color: `${url === "/profile/highlights" && "white"}` }}
        >
          Highlights
        </NavLink>
        <NavLink
          to={`/profile/media`}
          style={{ color: `${url === "/profile/media" && "white"}` }}
        >
          Media
        </NavLink>
        <NavLink
          to={`/profile/likes`}
          style={{ color: `${url === "/profile/likes" && "white"}` }}
        >
          Likes
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileMain;
