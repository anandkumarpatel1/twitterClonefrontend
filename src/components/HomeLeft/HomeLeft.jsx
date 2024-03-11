import React from "react";
import "./HomeLeft.scss";
import { IoSearch } from "react-icons/io5";
import UserCard from "./UserCard";
import { UserState } from "../../context/context";

const HomeLeft = () => {
  const { allUsers } = UserState();
  return (
    <div className="homeleft">
      {/* <div>
        <IoSearch size={25} />
        <input type="text" placeholder="search" />
      </div> */}
      <div>
        <p>Who to follow</p>
        <div>
          {allUsers &&
            allUsers?.map((item, index) => (
              <UserCard
                id={item?._id}
                img={item?.avatar}
                name={item?.name}
                username={item?.username}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
