import React from "react";
import "./ProfileMain.scss";
import { RxCross2 } from "react-icons/rx";
import { UserState } from "../../context/context";

const StatusModal = ({ setStatusModal }) => {

    const {user} = UserState()
  return (
    <div className="statusModel">
      <div>
        <div>
          <RxCross2 size={20} onClick={() => setStatusModal(false)} />
          <p>Status</p>
        </div>
        <div>
          <video
            src={user?.status}
            autoPlay
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
