import React from "react";
import "./HomePost.scss";
import UpperHeader from "./UpperHeader";
import CreatePost from "./CreatePost";
import AllPosts from "./AllPosts";
import MobileHeader from "./MobileHeader";
import { UserState } from "../../context/context";
import Loader from "../Loader/Loader";

const HomePost = () => {
  const { loading, allPosts } = UserState();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="homePost">
          <MobileHeader />
          <UpperHeader />
          <CreatePost />
          {allPosts &&
            allPosts.map((item, index) => (
              <AllPosts
                name={item?.admin?.name}
                username={item?.admin?.username}
                avatar={item?.admin?.avatar}
                userId={item?.admin?._id}
                desc={item?.desc}
                postImg={item?.postImg}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default HomePost;
