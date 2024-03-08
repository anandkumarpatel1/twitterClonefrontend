import React from "react";
import "./search.scss";
import { CiSearch } from "react-icons/ci";
import UserCard from "../HomeLeft/UserCard";

const SearchMain = () => {
  return (
    <div className="search">
      <div>
        <CiSearch />
        <input type="text" placeholder="search" />
      </div>
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
      </div>
    </div>
  );
};

export default SearchMain;
