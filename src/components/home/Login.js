import React, { useEffect, useState } from "react";
import mdlogo from "../../assets/images/home/srivn.png";
import useHttpPOST from "../../hooks/http/useHttpPOST";
import useInputPassword from "../../hooks/ui/useInputPassword";
import useInputTxt from "../../hooks/ui/useInputTxt";
import { useNavigate } from "react-router-dom";
import * as AppRoutes from "../../reduxstore/AppRoutes";

const Login = () => {
  console.log("---Login");
  const [isSubmit, setIsSubmit] = useState(true);
  const navigate = useNavigate();

  const {
    inVal: userEmail,
    isTouched: ueIsTouched,
    isErr: ueIsErr,
    errMsg: ueErrMsg,
    valChangeH: ueValChangeH,
    inBlurH: ueBlurH,
    resetField: ueResetField,
  } = useInputTxt(5);

  const {
    pwdVal: userPassword,
    isErr: upIsErr,
    isTouched: upIsTouched,
    errMsg: upErrMsg,
    showPwd: upShowPwd,
    valChangeH: upValChangeH,
    inputBlurH: upInputBlurH,
    toggleDisplay: upToggleDisplay,
    resetField: upResetField,
  } = useInputPassword();

  const {
    isReqComplete,
    respStatusCode ,
    respMessage,
    respError,
    sendPOSTReq: validateLogin
  } = useHttpPOST();

  const respFunc = () => {
    console.log('Tester')
    navigate(AppRoutes.welcome);
  }

  const checkLogin = () => {
    const url = "http://localhost:3000/users/";
    const loginData = {
      userEmail: userEmail,
      userPassword: userPassword
    };
    //validateLogin(url, loginData, respFunc)
    setTimeout(respFunc, 2000);
  }

  const checkLoginH = () => {
    setIsSubmit(false);
    checkLogin(userEmail, userPassword);
  };

  const resetLoginH = () => {
    ueResetField();
    upResetField();
  };

  const addNewUserH = () => {
    navigate(AppRoutes.registerUser);
  };

  return (
    <>
      <div className="login-box">
        <img src={mdlogo}></img>
        <div className="card">
          <div className="input-group mb-3">
            <p>User Name: </p>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="UserName"
              value={userEmail}
              onChange={ueValChangeH}
              onBlur={ueBlurH}
              maxLength={20}
            />
            {ueIsErr && <p className="text-danger">{ueErrMsg}</p>}
          </div>
          <div className="input-group mb-3">
            <p>User Password: </p>
            <input
              type={upShowPwd ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              value={userPassword}
              onChange={upValChangeH}
              onBlur={upInputBlurH}
              maxLength={30}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={upToggleDisplay}
              id="button-addon2"
            >
              Show/Hide
            </button>
            {upIsErr && <p className="text-danger">{upErrMsg}</p>}
          </div>
          <div className="input-group mb-3">
            <button
              type="button"
              className="btn btn-dark"
              disabled={
                !(!ueIsErr && ueIsTouched && !upIsErr && upIsTouched) ||
                !isSubmit
              }
              onClick={checkLoginH}
            >
              Login&nbsp;&nbsp;
              {!isSubmit && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-secondary"
              onClick={resetLoginH}
            >
              Reset
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-dark btn-sm"
              onClick={addNewUserH}
            >
              Sign Up!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
