import { TextField } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import "./Login.scss"

function Login() {
    const [phnNo,setphnNo] = useState({
        value:'',
        isValid: false,
        isFilled: false,
        isSubmitted: false
      })
      const [OTP,setOTP] = useState({
        value:'',
        isValid: false,
        isFilled: false,
        isSubmitted: false
      })

      const handlePhnChange = (e) => {

    }
  
    const handleOTPChange = (e) => {
  
    }

    return (
        <div className="login">
            <h2 className="loginHeader">LOGIN</h2>
            <div className="phoneLogin">
              <div className="authLabelAndInput">
                {!phnNo.isSubmitted ?
                <TextField 
                    label="Enter your Phone Number"
                    autoFocus={true}
                    variant="outlined"
                    placeholder="eg 9932507987"
                />:
                <TextField label="Enter One Time Password" variant="outlined" />
                }
              </div>
            {!phnNo.isSubmitted ?
              <button className="loginButton">Get OTP</button>:
              <button className="loginButton">Submit OTP</button>
            }
            </div>
            <p className="orText">OR</p>
            <img className="googleLoginIcon" src="https://bloomfield.edu/sites/default/files/2020-01/google_logo.png" alt=""/>
        </div>
    )
}

export default Login
