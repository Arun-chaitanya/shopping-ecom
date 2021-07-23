import React,{useState} from 'react';
import { TextField } from '@material-ui/core';
import "./SignUp.scss"

function SignUp() {
    const [isFormFilled,setIsFormFilled] = useState(true)
    return (
        <div className="signup">
            <h2 className="signupHeader">SIGNUP</h2>
            <div className="phoneSignup">
              <div className="authLabelAndInput">
                {!isFormFilled?
                <>
                <div className="authLabelAndInputRow">
                <TextField  
                    label="First Name"
                    autoFocus={true}
                    variant="outlined"
                    placeholder="eg. Arun"
                    className="firstChild"
                />
                <TextField 
                    label="Last Name"
                    autoFocus={true}
                    variant="outlined"
                    placeholder="eg. Chaitanya"
                />
                </div>
                <div className="authLabelAndInputRow">
                <TextField 
                    label="Phone Number"
                    autoFocus={true}
                    variant="outlined"
                    placeholder="eg. 9932507987"
                    className="firstChild"
                />
                <TextField 
                    label="Backup E-Mail"
                    autoFocus={true}
                    variant="outlined"
                    placeholder="eg. arun@gmail.com"
                />
                </div>
                </>
                :
                <TextField className="signupOTP" label="Enter One Time Password" variant="outlined" />
                }
              </div>
            {isFormFilled ?
              <button className="signupButton">Verify</button>:
              <button className="signupButton">Submit OTP</button>
            }
            </div>
            <p className="orText">OR</p>
            <img className="googleLoginIcon" src="https://bloomfield.edu/sites/default/files/2020-01/google_logo.png" alt=""/>
        </div>
    )
}

export default SignUp
