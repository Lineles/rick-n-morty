import React from "react";
import { useState } from "react";

import "./Login.css"

function Login () {

    const [ UserName, setUserName ] = useState("")
    const [ Email, setEmail ] = useState("")

    return(
        <div>
                <form className="login-form-flex">
                    <div className="login-SignUp-div">
                        <h1 className="login-SignUp-h1">Sign Up</h1>
                    </div>
                    <div className="login-form-div-flex">
                        <div className="login-form-input-box">
                            <label className="login-input-label">Username</label>
                            <input 
                                 type="text" 
                                 placeholder="BigBrain"  
                                 className="login-input"
                                 required
                                 value={UserName}
                                 onChange={(e) => setUserName(e.target.value)}/> 
                        </div>
                        <div className="login-form-input-box">
                            <label className="login-input-label">E-Mail</label>
                            <input 
                                  type="text" 
                                  placeholder="RickThe#1@galactic.gl"  
                                  className="login-input"
                                  required
                                  value={Email}
                                  onChange={(e) => setEmail(e.target.value)}/> 
                        </div>
                    </div>
                    <div className="login-form-buttons">
                        <button className="login-R-button">Reset</button>
                        <button className="login-S-button">Submit</button>
                    </div>
                </form>
            </div>
    )
};

export default Login;