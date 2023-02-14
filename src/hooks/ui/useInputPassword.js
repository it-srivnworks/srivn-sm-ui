import React, { useState } from 'react'

const useInputPassword = () => {
    console.log("--useInputPassword");  

    const [pwdVal, setPwdVal] = useState("");
    const [isErr, setIsErr] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const [showPwd, setShowPwd] = useState(false);
  
    const valChangeH = (e) => {
      e.preventDefault();
      setPwdVal(e.target.value);
      validatePassword(e.target.value);
    };
  
    const inputBlurH = (e) => {
      e.preventDefault();
      setIsTouched(true);
    };
  
    const toggleDisplay = (e) => {
        setShowPwd(!showPwd)
    }
  
    const resetField = (e) => {
      setPwdVal("");
      setIsErr(false);
      setErrMsg("");
      setIsTouched(false);
    };
  
    const validatePassword = (data) => {
      if (data.trim().length == 0) {
        setIsErr(true);
        setErrMsg("Password cannot be empty!");
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/i.test(data)) {
        setIsErr(true);
        setErrMsg("Invalid Password Format!\nMin 8 Max 30!\n'A-Z''0-9'''Atleast 1 special character");
      } else {
        setIsErr(false);
        setIsTouched(true);
      }
    };
  
    return {
        pwdVal,
      isErr,
      isTouched,
      errMsg,
      showPwd,
      valChangeH,
      inputBlurH,
      toggleDisplay,
      resetField,
    };
}

export default useInputPassword
