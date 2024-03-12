import React, { useState } from "react";
import "./SignupModel.scss";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { UserState } from "../../context/context";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

const SignupModel = ({ setSignModel }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, setLoading } = UserState();

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      if (!name || !username || !email || !password) {
        toast.error("Please fill all the fields");
        return;
      }
      setLoading(true);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.post(
        "https://backendtwitter.vercel.app/api/v1/users/register",
        { name, email, username, password },
        config
      );

      if (data) {
        toast.success(data?.message);
        setSignModel(false)
        setName("")
        setEmail("")
        setUsername("")
        setPassword("")
      }

      setLoading(false);
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
              <RxCross2 onClick={() => setSignModel(false)} />
            </div>
            <div>
              Create your account
              <form onSubmit={(e) => signUpHandler(e)}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>Create</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupModel;
