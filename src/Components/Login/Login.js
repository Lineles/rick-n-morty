import React from "react";
import { useState } from "react";

import "./Login.css"

function Login () {

    const [ UserName, setUserName ] = useState("")
    const [ Email, setEmail ] = useState("")

    return(
        <div>
                <form className="form-flex">
                    <div className="SignUp-div">
                        <h1 className="SignUp-h1">Sign Up</h1>
                    </div>
                    <div className="form-div-flex">
                        <div className="form-input-box">
                            <label className="reg-input-label">Username</label>
                            <input 
                                 type="text" 
                                 placeholder="BigBrain"  
                                 className="reg-input"
                                 required
                                 value={UserName}
                                 onChange={(e) => setUserName(e.target.value)}/> 
                        </div>
                        <div className="form-input-box">
                            <label className="reg-input-label">E-Mail</label>
                            <input 
                                  type="text" 
                                  placeholder="RickThe#1@galactic.gl"  
                                  className="reg-input"
                                  required
                                  value={Email}
                                  onChange={(e) => setEmail(e.target.value)}/> 
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button className="R-button">Reset</button>
                        <button className="S-button">Submit</button>
                    </div>
                </form>
            </div>
    )
};

export default Login;