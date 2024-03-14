import React, { useState } from "react";
import "./search.scss";
import { CiSearch } from "react-icons/ci";
import UserCard from "../HomeLeft/UserCard";
import { toast } from "react-toastify";
import axios from "axios";
import { UserState } from "../../context/context";

const SearchMain = () => {
  const [search, setSearch] = useState("");

  const { searchUser, setSearchUser, loading, setLoading } = UserState();

  const searchHandler = async (e) => {
    setSearch(e.target.value);
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://backendtwitter.vercel.app/api/v1/users/search/${search}`,
        config
      );
      if (data) {
        setSearchUser(data?.student);
      }
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <div className="search">
      <div>
        <CiSearch />
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => searchHandler(e)}
        />
      </div>
      <div>
        {loading && <p>Loading</p>}
        {searchUser &&
          searchUser.map((item, index) => (
            <UserCard
              key={index}
              id={item?._id}
              username={item?.username}
              name={item?.name}
              img={item?.avatar}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchMain;
