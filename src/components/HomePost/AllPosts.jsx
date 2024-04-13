import React, { useEffect, useState } from "react";
import "./HomePost.scss";
import { RxCross2 } from "react-icons/rx";
import { SlOptions } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { ImParagraphRight } from "react-icons/im";
import axios from "axios";
import { UserState } from "../../context/context";
import { toast } from "react-toastify";
import CommentCard from "./CommentCard";
import CommentModel from "./CommentModel";

const AllPosts = ({
  name,
  username,
  avatar,
  userId,
  desc,
  postImg,
  id,
  commentCount,
  retweetsCount,
  likesCount,
}) => {
  const [option, setOption] = useState(false);
  const [model, setModel] = useState("false");
  const [comments, setComments] = useState();
  const [retweet, setRetweet] = useState(retweetsCount);
  const [retweetColor, setRetweetColor] = useState(false);
  const [like, setLike] = useState(likesCount);
  const [likeColor, setLikeColor] = useState(false);
  const navigate = useNavigate();
  const { setLoading, setIdUser, allPosts, setChn, chn, user } = UserState();

  useEffect(() => {
    let index = retweetsCount.indexOf(user?._id);
    if (index !== -1) {
      setRetweetColor(true);
    }
    let like = likesCount.indexOf(user?._id);
    if (like !== -1) {
      setLikeColor(true);
    }
  }, []);

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

  const commentHandler = async () => {
    try {
      setModel("comment");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://backendtwitter.vercel.app/api/v1/users/comment/${id}`,
        config
      );

      if (data) {
        setComments(data?.comments);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const retweetHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://backendtwitter.vercel.app/api/v1/users/retweet/${id}`,
        config
      );

      if (data) {
        let index = retweet.indexOf(user._id);
        if (index !== -1) {
          retweet.splice(index, 1);
          toast.success("tweet unretweeted");
          setRetweetColor(false);
          return;
        }
        retweet.push(user?._id);
        toast.success("tweet retweeted");
        setRetweetColor(true);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const likeHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://backendtwitter.vercel.app/api/v1/users/like/${id}`,
        config
      );

      if (data) {
        let index = like.indexOf(user._id);
        if (index !== -1) {
          like.splice(index, 1);
          toast.success("tweet unliked");
          setLikeColor(false);
          return;
        }
        like.push(user?._id);
        toast.success("tweet liked");
        setLikeColor(true);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
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
            {commentCount > 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "rgb(29, 155, 240)",
                }}
              >
                <span
                  style={{
                    fontWeight: "800",
                    marginRight: "5px",
                    fontSize: "20px",
                  }}
                >
                  {commentCount}
                </span>
                <BiMessageRounded
                  size={25}
                  onClick={commentHandler}
                  style={{ color: "rgb(29, 155, 240)" }}
                />
              </div>
            ) : (
              <div style={{ display: "flex", justifyContent: "center" }}>
                {commentCount}
                <BiMessageRounded size={25} onClick={commentHandler} />
              </div>
            )}
            {retweetColor ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "rgb(0, 186, 124)",
                }}
              >
                <span
                  style={{
                    fontWeight: "800",
                    marginRight: "5px",
                    fontSize: "20px",
                  }}
                >
                  {retweet?.length}
                </span>
                <FaRetweet size={25} onClick={retweetHandler} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontWeight: "800",
                    marginRight: "5px",
                    fontSize: "20px",
                  }}
                >
                  {retweet?.length}
                </span>
                <FaRetweet size={25} onClick={retweetHandler} />{" "}
              </div>
            )}
            {likeColor ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                }}
              >
                <span
                  style={{
                    fontWeight: "800",
                    marginRight: "5px",
                    fontSize: "20px",
                  }}
                >
                  {like?.length}
                </span>
                <FaRegHeart size={20} onClick={likeHandler} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontWeight: "800",
                    marginRight: "5px",
                    fontSize: "20px",
                  }}
                >
                  {like?.length}
                </span>
                <FaRegHeart size={20} onClick={likeHandler} />{" "}
              </div>
            )}

            
            <ImParagraphRight size={18} />
          </div>
        </div>
        {model !== "false" && (
          <div className="model">
            <div>
              <p>Comment</p>
              <RxCross2 onClick={() => setModel("false")} />
            </div>
            {model === "comment" && (
              <CommentModel
                comments={comments}
                id={id}
                commentHandler={commentHandler}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AllPosts;
