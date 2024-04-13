import React, { useState } from "react";
import "./HomePost.scss";
import UpperHeader from "./UpperHeader";
import CreatePost from "./CreatePost";
import AllPosts from "./AllPosts";
import MobileHeader from "./MobileHeader";
import { UserState } from "../../context/context";
import Loader from "../Loader/Loader";
import StatusBar from "./StatusBar";

const HomePost = () => {
  const { loading, allPosts, followingPosts } = UserState();
  const [slider, setSlider] = useState("all");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="homePost">
          <MobileHeader />
          <UpperHeader slider={slider} setSlider={setSlider} />
          <StatusBar />
          <CreatePost />
          {allPosts && allPosts.length < 1 ? (
            <p
              style={{
                textAlign: "center",
                fontSize: "15px",
                marginTop: "20px",
              }}
            >
              No posts found.
            </p>
          ) : (
            ""
          )}
          {slider === "all"
            ? allPosts?.map((item, index) => (
                <AllPosts
                  key={index}
                  id={item._id}
                  name={item?.admin?.name}
                  username={item?.admin?.username}
                  avatar={item?.admin?.avatar}
                  userId={item?.admin?._id}
                  desc={item?.desc}
                  postImg={item?.postImg}
                  commentCount={item?.comments?.length}
                  retweetsCount={item?.retweets}
                  likesCount={item?.likes}
                />
              ))
            : followingPosts?.map((item, index) => (
                <AllPosts
                  key={index}
                  name={item?.admin?.name}
                  username={item?.admin?.username}
                  avatar={item?.admin?.avatar}
                  userId={item?.admin?._id}
                  desc={item?.desc}
                  postImg={item?.postImg}
                  commentCount={item?.comments?.length}
                  retweetsCount={item?.retweets}
                  likesCount={item?.likes}
                />
              ))}
        </div>
      )}
    </>
  );
};

export default HomePost;
