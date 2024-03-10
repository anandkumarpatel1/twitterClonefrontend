import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [chn, setChn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
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
          toast.success(data?.message);
          navigate("/");
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

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
        chn,
        setChn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};
