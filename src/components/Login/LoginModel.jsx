import React, { useState } from "react";
import "./LoginModel.scss";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import axios from "axios";
import { UserState } from "../../context/context";
import Loader from "../Loader/Loader";

const LoginModel = ({ setLoginModel }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, setLoading, setUser, setChn, chn } = UserState();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        toast.warn("Please fill all the fields");
        return;
      }
      setLoading(true);

      const config = {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.post(
        "https://backendtwitter.vercel.app/api/v1/users/login",
        { username, password },
        config
      );

      if (data) {
        document.cookie = `token=${data?.token}; max-age= 8,64,000`;
        setUser(data?.user);
        setChn(!chn);
        toast.success(data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="signupModel">
          <div>
            <div>
              <RxCross2 onClick={() => setLoginModel(false)} />
            </div>
            <div>
              Create your account
              <form onSubmit={(e) => loginHandler(e)}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
                <p>Forgot Password?</p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModel;
