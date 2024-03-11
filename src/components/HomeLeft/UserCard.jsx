import React from "react";
import "./HomeLeft.scss";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserState } from "../../context/context";
import { toast } from "react-toastify";

const UserCard = ({ id, img, name, username }) => {

  const navigate = useNavigate();
  const { user, loading, setLoading, idUser, setIdUser } = UserState();

  const userHandler = async () =>{
    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://backendtwitter.vercel.app/api/v1/users/user/${id}`,
        config
      );

      if (data) {
        setIdUser(data?.user);
      }
      navigate(`/user/${id}`)
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  }
  return (
    <div className="userCard" onClick={userHandler}>
      <div>
        <img src={img} alt={name} />
        <div>
          <p>{name}</p>
          <p> {username} </p>
        </div>
      </div>
      <button onClick={userHandler}>Visit</button>
    </div>
  );
};

export default UserCard;
