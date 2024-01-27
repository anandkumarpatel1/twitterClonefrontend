import React from "react";
import "./LoginModel.scss";
import { RxCross2 } from "react-icons/rx";

const LoginModel = ({setLoginModel}) => {
  return (
    <div className="signupModel">
      <div>
        <div>
          <RxCross2 onClick={() => setLoginModel(false)}/>
        </div>
        <div>
          Create your account
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Login</button>
            <p>Forgot Password?</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModel;
