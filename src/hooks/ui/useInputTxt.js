import React, { useState } from 'react'

const useInputTxt = (minLen) => {
    console.log("--useInputTxt");
    const [inVal,setInVal] = useState('')
    const [isTouched,setIsTouched] = useState(false)
    const [isErr,setIsErr] = useState(false)
    const [errMsg,setErrMsg] = useState('')


    const valChangeH = (e) =>{
        setInVal(e.target.value)
        validateInput(e.target.value)
    }

    const inBlurH = (e) =>{
        setIsTouched(true)
    }

    const resetField = (e) =>{
        setInVal('')
        setIsErr(false)
        setErrMsg('')
        setIsTouched(false)
    }

    const validateInput = (data) =>{
        if(data.trim().length  == 0){
            setIsErr(true)
            setErrMsg('Input cannot be empty!')
        }else if(data.trim().length  < minLen){
            setIsErr(true)
            setErrMsg('Minumum '+minLen+' characters!')
        }else{
            setIsErr(false)
        }
    }

    return {inVal,isTouched,isErr,errMsg,valChangeH,inBlurH,resetField}
}

export default useInputTxt
