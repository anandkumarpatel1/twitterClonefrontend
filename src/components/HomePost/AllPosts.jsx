import React from "react";
import "./HomePost.scss";
import { SlOptions } from "react-icons/sl";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { ImParagraphRight } from "react-icons/im";

const AllPosts = ({ name, username, avatar, userId, desc, postImg }) => {
  return (
    <div className="allPost">
      <div>
        <img
          src={avatar}
          alt={name}
        />
      </div>
      <div>
        <div>
          <div>
            <p>{name}</p>
            <p>@{username}</p>
          </div>
          <div>
            <SlOptions />
          </div>
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
