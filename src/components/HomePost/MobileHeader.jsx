import React, { useState } from "react";
import { GoGear } from "react-icons/go";
import { BsTwitterX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RiNotificationLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import "./HomePost.scss";
import { UserState } from "../../context/context";
import { toast } from "react-toastify";

const MobileHeader = () => {
  const { user } = UserState();
  const [slider, setSlider] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/login");
    document.cookie = `token=${null};max-age= 0`;
    toast.success("logout successfull");
    console.log(document.cookie)
  };
  return (
    <>
      <div className="MobileHeader">
        <img
          src={user?.avatar}
          alt={user?.name}
          onClick={() => setSlider(!slider)}
        />
        <BsTwitterX size={25} />
        <GoGear size={25} />
      </div>

      {/* slider */}
      {slider && (
        <div className="mobileslider">
          <div>
            <div>
              <div>
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  onClick={() => navigate("/profile")}
                />
                <RxCross2 size={30} onClick={() => setSlider(!slider)} />
              </div>

              <div onClick={() => navigate("/profile")}>
                <p>{user?.name}</p>
                <p>{user?.username}</p>
              </div>
              <div>
                <p>
                  <span>{user?.followings.length}</span> Following
                </p>
                <p>
                  <span>{user?.followers.length}</span> Follower
                </p>
              </div>
            </div>
            <div>
              <div>
                <p onClick={() => navigate("/profile")}>
                  <IoPersonOutline size={35} />
                  Profile
                </p>
                <p onClick={() => navigate("/")}>
                  <GoHome size={35} />
                  Home
                </p>
                <p onClick={() => navigate("/search")}>
                  <IoSearch size={35} />
                  Search
                </p>
                <p>
                  <RiNotificationLine size={35} />
                  Notification
                </p>
                <p>
                  <BsTwitterX size={35} />
                  Premium
                </p>
                <p>
                  <GoGear size={35} />
                  Setting
                </p>
                <p onClick={logoutHandler}>
                  <HiOutlineLogout size={35} />
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
