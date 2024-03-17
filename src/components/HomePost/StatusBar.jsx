import React from "react";
import { UserState } from "../../context/context";
import "./HomePost.scss";

const StatusBar = () => {
  const { user } = UserState();
  return (
    <div className="statusBar">
      <div></div>
      <label htmlFor="status">
        <img src={user?.avatar} alt={user?.name} />
      </label>

      <input type="file" id="status" />
    </div>
  );
};

export default StatusBar;
