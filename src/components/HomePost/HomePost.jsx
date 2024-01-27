import React from "react";
import "./HomePost.scss";
import UpperHeader from "./UpperHeader";
import CreatePost from "./CreatePost";

const HomePost = () => {
  return (
    <div className="homePost">
      <UpperHeader />
      <CreatePost />
    </div>
  );
};

export default HomePost;
