import React, { useState } from "react";
import "./HomePost.scss";
import { useNavigate } from "react-router-dom";
import { UserState } from "../../context/context";
import { CiImageOn } from "react-icons/ci";
import { toast } from "react-toastify";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import axios from "axios";

const CreatePost = () => {
  const [postImg, setPostImg] = useState();;
  const [desc, setDesc] = useState();

  const { user, loading, setLoading, chn, setChn } = UserState();
  const navigate = useNavigate();

  const submitHandler = async () => {
    try {
      setLoading(true);
      if (postImg) {
        const storageRef = ref(
          storage,
          `posts/${user._id}/${Math.round(Math.random() * 100)}`
        );
        const uploadTask = uploadBytesResumable(storageRef, postImg);
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
        "https://backendtwitter.vercel.app/api/v1/users/createpost",
        { desc, postImg: imgUrl },
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
    <div className="createPost">
      <div>
        <img
          src={user?.avatar}
          alt={user?.name}
          onClick={() => navigate("/profile")}
        />
      </div>
      <div>
        <div>
          <textarea
            placeholder="What is happing?!"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div>
          <div>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={(e) => setPostImg(e.target.files[0])}
            />
            <label htmlFor="file">
              <CiImageOn />
            </label>
          </div>
          <button onClick={submitHandler}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
