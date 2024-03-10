import React, { useState } from "react";
import "./ProfileMain.scss";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import AllPosts from "../HomePost/AllPosts";
import { UserState } from "../../context/context";
import EditModal from "./EditModal";
import Loader from "../Loader/Loader";

const ProfileMain = () => {
  const url = window.location.pathname;
  const navigate = useNavigate();
  const [editModal, setEditModal] = useState(false);

  const { user, loading } = UserState();

  return (
    <>
    {
      loading ? <Loader /> :       <div className="profile-main">
        <div className="heading">
          <div onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </div>
          <div>
            <h2>{user?.name}</h2>
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
              <div>
              <img src={user?.avatar} alt="userImage" />

              </div>
              <div className="profile-details">
                <h2>{user?.name}</h2>
                <p>@{user?.username}</p>
              </div>
            </div>
            <div
              className="edit-profile"
              onClick={() => setEditModal(!editModal)}
            >
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
            to={`/profile/likes`}
            style={{ color: `${url === "/profile/likes" && "white"}` }}
          >
            Likes
          </NavLink>
        </div>

        <AllPosts img="https://img.freepik.com/free-photo/portrait-beautiful-brunette-with-long-hair_144627-16306.jpg?w=360&t=st=1707016310~exp=1707016910~hmac=1f151c2e9e755bcc1c2e081b0c342fa39676b1bf564734d1bbd3bbc0ff184d36" />
        <AllPosts />
        <AllPosts img="https://img.freepik.com/free-photo/smiling-beautiful-girl-her-handsome-boyfriend-casual-summer-clothes-happy-family-taking-selfie-self-portrait-themselves-smartphone-camera-shows-peace-sign-winking-street_158538-5459.jpg?t=st=1707016123~exp=1707016723~hmac=9dbbbc65fb190ac0e39c9016a6d568a7f7621c5f254fd45c04b772d19ce1f8db" />
        <AllPosts />
        <AllPosts />
        <AllPosts img="https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?w=360&t=st=1707016255~exp=1707016855~hmac=da6ff863e5721f471b2e8db61d559043d533afee1b87a0b4f07711778537abb6" />
        <AllPosts />
        <AllPosts />
        <AllPosts img="https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8108.jpg?w=996&t=st=1707016288~exp=1707016888~hmac=357c42fedee2e9f7d578a6bb515f7ac6a46597968cebb63deb93b9489e82bd31" />
        <AllPosts />
        <AllPosts />
        <AllPosts img="https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=360&t=st=1707016240~exp=1707016840~hmac=c547336a9ac7efb236b1f2f6abc177c3dfafc3b1b8c64f8fa73825f65de8b7d8" />
        <AllPosts />
      </div>
    }
      {editModal && <EditModal setEditModal={setEditModal} />}

    </>
  );
};

export default ProfileMain;
