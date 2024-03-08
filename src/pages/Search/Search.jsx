import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import HomeLeft from "../../components/HomeLeft/HomeLeft";
import SearchMain from "../../components/Search/SearchMain";

const Search = () => {
  return (
    <div
      style={{
        background: "#000",
        display: "flex",
        height: "100vh",
        color: "white",
      }}
    >
      <SideBar />
      <SearchMain />
      <HomeLeft />
    </div>
  );
};

export default Search;
