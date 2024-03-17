import React, { useState } from "react";
import { UserState } from "../../context/context";
import "./HomePost.scss";
import StatusModel from "./StatusModel";

const StatusBar = () => {
  const { user, loading, setLoading, chn, setChn } = UserState();
  const [statusModel, setStatusModel] = useState(false);
  
  return (
    <>
      {statusModel && <StatusModel setStatusModel={setStatusModel} />}
      <div className="statusBar" onClick={() => setStatusModel(true)}>
        <div></div>
        <img src={user?.avatar} alt={user?.name} />
      </div>
    </>
  );
};

export default StatusBar;
