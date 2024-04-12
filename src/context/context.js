import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [chn, setChn] = useState(false);
  const [allUsers, setAllUsers] = useState();
  const [idUser, setIdUser] = useState();
  const [allPosts, setAllPosts] = useState();
  const [myPosts, setMyPosts] = useState();
  const [followingPosts, setFollowingPosts] = useState();
  const [searchUser, setSearchUser] = useState();
  const [comments, setComments] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
    fetchAllUsers();
    fetchAllPosts();
    fetchFollowingPosts();
  }, [chn]);

  const fetchUser = async () => {
    setLoading(true);
    if (document.cookie) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${document.cookie.split("=")[1]}`,
          },
          withCredentials: true,
          sameSite: "None",
        };

        const { data } = await axios.get(
          "https://backendtwitter.vercel.app/api/v1/users/me",
          config
        );

        if (data) {
          setUser(data?.user);
          setMyPosts(data?.posts);
          toast.success(data?.message);
          setLoading(false);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
        setLoading(false);
      }
    } else {
      navigate("/login");
      setLoading(false);
    }
  };

  const fetchAllUsers = async () => {
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
        "https://backendtwitter.vercel.app/api/v1/users/allusers",
        config
      );

      if (data) {
        setAllUsers(data?.users);
        setLoading(false);
      }
    } catch (error) {
      toast(error.response?.data?.message);
      setLoading(false);
    }
  };

  const fetchAllPosts = async () => {
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
        "https://backendtwitter.vercel.app/api/v1/users/allposts",
        config
      );

      if (data) {
        setAllPosts(data?.posts);
        setLoading(false);
      }
    } catch (error) {
      toast(error.response?.data?.message);
      setLoading(false);
    }
  };

  const fetchFollowingPosts = async () => {
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
        "https://backendtwitter.vercel.app/api/v1/users/following/posts",
        config
      );

      if (data) {
        setFollowingPosts(data?.posts);
        setLoading(false);
      }
    } catch (error) {
      toast(error.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
        chn,
        setChn,
        allUsers,
        setAllUsers,
        idUser,
        setIdUser,
        allPosts,
        setAllPosts,
        myPosts,
        setMyPosts,
        followingPosts,
        setFollowingPosts,
        searchUser,
        setSearchUser,
        comments,
        setComments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};
