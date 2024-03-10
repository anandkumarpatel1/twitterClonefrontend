import React, { useState } from "react";
import avatarImg from './avatarImg.png'
import { storage } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Image = () => {
  const [avatar, setAvatar] = useState("");
  const [progresspercent, setProgresspercent] = useState(0);
  const [imgUrl, setImgUrl] = useState(null);

  const handleUpload = async (e) => {
    const storageRef = ref(storage, `files/${avatar.name}`);
    const uploadTask = uploadBytesResumable(storageRef, avatar);
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
          console.log(downloadURL)
        });
      }
    );
  }
  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      <div>
        <img
          src={avatar ? URL.createObjectURL(avatar) : avatarImg}
          alt="avatar-image"
        />
        <br />
      </div>
      
      <br />
      <br />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setAvatar(e.target.files[0])}
      />
      <button onClick={handleUpload}>submit</button>
    </div>
  );
};

export default Image;
