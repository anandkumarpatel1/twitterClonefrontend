import React from "react";
import "./HomeLeft.scss";
import { IoSearch } from "react-icons/io5";
import UserCard from "./UserCard";

const HomeLeft = () => {
  return (
    <div className="homeleft">
      <div>
        <IoSearch size={25} />
        <input type="text" placeholder="search" />
      </div>
      <div>
        <p>Who to follow</p>
        <div>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
