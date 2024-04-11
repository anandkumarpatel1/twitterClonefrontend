import React, { useState } from "react";
import "./HomePost.scss";
import { SlOptions } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { ImParagraphRight } from "react-icons/im";
import axios from "axios";
import { UserState } from "../../context/context";
import { toast } from "react-toastify";

const AllPosts = ({ name, username, avatar, userId, desc, postImg, id }) => {
  const [option, setOption] = useState(false);
  const navigate = useNavigate();
  const { setLoading, setIdUser, allPosts, setChn, chn, user } = UserState();

  const userHandler = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://backendtwitter.vercel.app/api/v1/users/user/${userId}`,
        config
      );

      if (data) {
        setIdUser(data?.user);
      }
      navigate(`/user/${userId}`);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };

  const deleteHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.delete(
        `https://backendtwitter.vercel.app/api/v1/users/delete/${id}`,
        config
      );

      console.log(data);

      if (data) {
        allPosts.forEach((element) => {
          if (element._id) {
            setChn(!chn);
          }
        });

        toast.success(data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  const optionMenu = async () => {
    setOption(!option);
  };
  return (
    <div className="allPost">
      <div>
        <img src={avatar} alt={name} onClick={userHandler} />
      </div>
      <div>
        <div>
          <div onClick={userHandler}>
            <p>{name}</p>
            <p>@{username}</p>
          </div>
          <div onClick={optionMenu}>
            <SlOptions />
          </div>
          {option && (
            <div className="options">
              <ul>
                {userId === user?._id && (
                  <li onClick={deleteHandler}>Delete</li>
                )}
                <li>Share</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          {postImg && <img src={postImg} alt="img" />}
          {desc}
        </div>
        <div>
          <BiMessageRounded size={20} />
          <FaRetweet size={20} />
          <FaRegHeart size={20} />
          <ImParagraphRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
