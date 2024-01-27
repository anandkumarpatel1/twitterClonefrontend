import React from "react";
import "./SignupModel.scss";
import { RxCross2 } from "react-icons/rx";

const SignupModel = ({setSignModel}) => {
  return (
    <div className="signupModel">
      <div>
        <div>
          <RxCross2 onClick={() => setSignModel(false)}/>
        </div>
        <div>
          Create your account
          <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModel;
