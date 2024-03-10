import React, { useState } from "react";
import "./ProfileMain.scss";
import { RxCross2 } from "react-icons/rx";
import { UserState } from "../../context/context";
import { toast } from "react-toastify";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import axios from "axios";

const EditModal = ({ setEditModal }) => {
  const { user, setLoading, chn, setChn } = UserState();

  const [avatar, setAvatar] = useState();
  const [name, setName] = useState(user?.name);
  const [bio, setBio] = useState(user?.bio);

  const submitHandler = async () => {
    try {
      setLoading(true);
      if (avatar) {
        const storageRef = ref(storage, `files/${user._id}`);
        const uploadTask = uploadBytesResumable(storageRef, avatar);
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
              dataSender(downloadURL);
            });
          }
        );
      } else {
        dataSender();
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  const dataSender = async (imgUrl) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.put(
        "https://backendtwitter.vercel.app/api/v1/users/editprofile",
        { name, bio, avatar: imgUrl },
        config
      );
      setLoading(false);
      setChn(!chn);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="editModal">
      <div>
        <div>
          <div>
            <RxCross2 size={20} onClick={() => setEditModal(false)} />
            <p>Edit Profile</p>
          </div>

          <button onClick={submitHandler}>Save</button>
        </div>
        <div>
          <img
            src={avatar ? URL.createObjectURL(avatar) : user?.avatar}
            alt={user?.name}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
