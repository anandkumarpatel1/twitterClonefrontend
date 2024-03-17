import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { UserState } from "../../context/context";
import "./HomePost.scss";import { toast } from "react-toastify";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import axios from "axios";

const StatusModel = ({ setStatusModel }) => {
  const [status, setStatus] = useState();

  const { user, loading, setLoading, chn, setChn } = UserState();

  const statusHandler = async () =>{
    try {
      setLoading(true);
      if (status) {
        const storageRef = ref(storage, `status/${user._id}`);
        const uploadTask = uploadBytesResumable(storageRef, status);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          },
          (error) => {
            toast(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              statusProcess(downloadURL);
            });
          }
        );
      } else {
        toast.warn('Please Select a video')
        return;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  }

  const statusProcess = async (url) => {
    try {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${document.cookie.split("=")[1]}`,
          },
          withCredentials: true,
          sameSite: "None",
        };

        const { data } = await axios.post(
          "https://backendtwitter.vercel.app/api/v1/users/add/status",
          { url },
          config
        );
        setLoading(false);
        setChn(!chn);
      } catch (error) {
        toast.error(error.response.data.message);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="statusModelHome">
      <div>
        <div>
          <div>
            <RxCross2 size={20} onClick={() => setStatusModel(false)} />
            <p> Add Status</p>
          </div>
          <button onClick={statusHandler}>Save</button>
        </div>
        <div>
          <input
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            onChange={(e) => setStatus(e.target.files[0])}
          />
        </div>
      </div>
    </div>
  );
};

export default StatusModel;
