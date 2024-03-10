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

const MobileHeader = () => {
  const [slider, setSlider] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="MobileHeader">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Mangekyou_Sharingan_Itachi.svg"
          alt=""
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
                  src="https://upload.wikimedia.org/wikipedia/commons/1/17/Mangekyou_Sharingan_Itachi.svg"
                  alt=""
                  onClick={() => navigate("/profile")}
                />
                <RxCross2 size={30} onClick={() => setSlider(!slider)} />
              </div>

              <div onClick={() => navigate("/profile")}>
                <p>Anand Kumar</p>
                <p>@anandkumarpatel</p>
              </div>
              <div>
                <p>
                  <span>39</span> Following
                </p>
                <p>
                  <span>39</span> Follower
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
                <p>
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