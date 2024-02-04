import React from "react";
import "./HomePost.scss";
import { SlOptions } from "react-icons/sl";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { ImParagraphRight } from "react-icons/im";

const AllPosts = () => {
  return (
    <div className="allPost">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Mangekyou_Sharingan_Itachi.svg"
          alt="user"
        />
      </div>
      <div>
        <div>
          <div>
            <p>name</p>
            <p>@name</p>
          </div>
          <div>
            <SlOptions />
          </div>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          libero, soluta perspiciatis ratione consequatur dolore reiciendis
          reprehenderit, delectus ab aliquam fugiat adipisci magni natus
          excepturi, non mollitia accusamus illum ipsa?
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
