import React from "react";
import "./HomePost.scss";

const UpperHeader = ({ slider, setSlider }) => {
  return (
    <div className="upperCase">
      <div
        className={slider === "all" ? "active" : ""}
        onClick={() => setSlider("all")}
      >
        <p>For You</p>
      </div>
      <div
        className={slider === "following" ? "active" : ""}
        onClick={() => setSlider("following")}
      >
        <p onClick={() => setSlider("following")}>Followings</p>
      </div>
    </div>
  );
};

export default UpperHeader;
