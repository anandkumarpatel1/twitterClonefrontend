import React from "react";
import "./Search.scss";
import SideBar from "../../components/SideBar/SideBar";
import HomeLeft from "../../components/HomeLeft/HomeLeft";
import SearchMain from "../../components/Search/SearchMain";
import MobileHeader from "../../components/HomePost/MobileHeader";

const Search = () => {
  return (
    <>
      <MobileHeader />
      <div className="searchPage">
        <SideBar />
        <SearchMain />
        <HomeLeft />
      </div>
    </>
  );
};

export default Search;
