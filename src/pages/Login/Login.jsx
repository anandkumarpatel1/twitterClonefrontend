import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import "./Login.scss";
import SignupModel from "../../components/Signup/SignupModel";
import LoginModel from "../../components/Login/LoginModel";

const Login = () => {
  const [signModel, setSignModel] = useState(false);
  const [loginModel, setLoginModel] = useState(false);

  return (
    <>
      {signModel && <SignupModel setSignModel={setSignModel} />}
      {loginModel && <LoginModel setLoginModel={setLoginModel} />}
      <div className="LoginCont">
        <div>
          <BsTwitterX color="white" />
        </div>
        <div>
          <p>Happening now</p>
          <p>Join today.</p>
          <div>
            <button onClick={() => setSignModel(true)} >Create account</button>
            <div>
              <hr /> or <hr />
            </div>
            <button onClick={() => setLoginModel(true)} >Sign in</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
