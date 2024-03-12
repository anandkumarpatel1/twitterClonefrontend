import React, { useState } from "react";
import "./ProfileMain.scss";
import { useNavigate, useParams } from "react-router-dom";
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

  const { user, loading, idUser, myPosts } = UserState();
  const { id } = useParams();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="profile-main">
          <div className="heading">
            <div onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </div>
            <div>
              <h2>{id ? idUser?.name : user?.name}</h2>
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
                  <img
                    src={id ? idUser?.avatar : user?.avatar}
                    alt="userImage"
                  />
                </div>
                <div className="profile-details">
                  <h2>{id ? idUser?.name : user?.name}</h2>
                  <p>@{id ? idUser?.username : user?.username}</p>
                </div>
              </div>
              <div
                className="edit-profile"
                onClick={() => setEditModal(!editModal)}
              >
                <p>{id ? "Follow" : "Edit Profile"}</p>
              </div>
            </div>
            <p>{id ? idUser?.bio : user?.bio}</p>

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

          {idUser &&
            idUser?.posts.map((item, index) => (
              <AllPosts
                key={index}
                name={id ? idUser.name : user.name}
                username={id ? idUser.username : user.username}
                avatar={id ? idUser?.avatar : user?.avatar}
                userId={item?.admin?._id}
                desc={item?.desc}
                postImg={item?.postImg}
              />
            ))}
        </div>
      )}
      {editModal && <EditModal setEditModal={setEditModal} />}
    </>
  );
};

export default ProfileMain;
