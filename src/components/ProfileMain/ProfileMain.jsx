import React, { useEffect, useState } from "react";
import "./ProfileMain.scss";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import AllPosts from "../HomePost/AllPosts";
import { UserState } from "../../context/context";
import EditModal from "./EditModal";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import axios from "axios";

const ProfileMain = () => {
  const url = window.location.pathname;
  const navigate = useNavigate();
  const [editModal, setEditModal] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [status, setStatus] = useState()

  const { user, setLoading, loading, idUser, myPosts, chn, setChn } =
    UserState();
  const { id } = useParams();

  useEffect(() => {
    followedFun();
  }, [followed]);

  const followedFun = () => {
    let follow;
    if (id) {
      follow = user.followings.indexOf(id);
    }

    if (follow === -1) {
      setFollowed(false);
      return;
    }

    setFollowed(true);
  };

  const followHandler = async () => {
    try {
      setLoading(true);
      if (document.cookie) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${document.cookie.split("=")[1]}`,
          },
          withCredentials: true,
          sameSite: "None",
        };

        const { data } = await axios.get(
          `https://backendtwitter.vercel.app/api/v1/users/follow/${id}`,
          config
        );
        toast.success(data?.message);
        setChn(!chn);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  const statusHandler = async () => {
    try {
      if (!id) {
        const storageRef = ref(storage, `status/${user._id}`);
        const uploadTask = uploadBytesResumable(storageRef, status);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          },
          (error) => {
            toast(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            });
          }
        );
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
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
                    onClick={statusHandler}
                  />
                </div>
                <div className="profile-details">
                  <h2>{id ? idUser?.name : user?.name}</h2>
                  <p>@{id ? idUser?.username : user?.username}</p>
                </div>
              </div>

              {id && id !== user._id ? (
                <div className="edit-profile">
                  <p onClick={followHandler}>
                    {followed ? "Unfollow" : "Follow"}
                  </p>
                </div>
              ) : (
                <>
                  <div
                    className="edit-profile"
                    onClick={() => setEditModal(!editModal)}
                  >
                    <p>Edit Profile</p>
                  </div>
                  <div
                    className="edit-profile"
                  >
                    <input
                      type="file"
                      onChange={(e) => setStatus(e.target.files[0])}
                    />
                  </div>
                </>
              )}
            </div>
            <p>{id ? idUser?.bio : user?.bio}</p>

            <div className="joining-date">
              <FaRegCalendarDays />
              Joined November 2022
            </div>

            <div className="profile-follower">
              <h5>
                <p>
                  {id ? idUser?.followings.length : user?.followings.length}
                </p>
                Following
              </h5>
              <h5>
                <p>{id ? idUser?.followers.length : user?.followers.length}</p>{" "}
                Follower
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

          {id &&
            idUser &&
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
          {!id &&
            myPosts &&
            myPosts.map((item, index) => (
              <AllPosts
                key={index}
                name={user?.name}
                username={user?.username}
                avatar={user?.avatar}
                userId={user?._id}
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
