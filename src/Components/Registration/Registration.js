import "./Registration.css";
import NavigationNoSerch from "../Navigation/NavigationNoSerch";


function Registration(){

    return(
        <div>
            <NavigationNoSerch /> 
            <div>
                <form className="form-flex">
                    <div className="SignUp-div">
                        <h1 className="SignUp-h1">Sign Up</h1>
                    </div>
                    <div className="form-div-flex">
                        <div className="form-input-box">
                            <label className="reg-input-label">First Name</label>
                            <input type="text" placeholder="Rick"  className="reg-input"/> 
                        </div>
                        <div className="form-input-box">
                            <label className="reg-input-label">Last Name</label>
                            <input type="text" placeholder="Sanchez"  className="reg-input"/> 
                        </div>
                    </div>
                    <div className="form-div-flex">
                        <div className="form-input-box">
                            <label className="reg-input-label">Username</label>
                            <input type="text" placeholder="BigBrain"  className="reg-input"/> 
                        </div>
                        <div className="form-input-box">
                            <label className="reg-input-label">E-Mail</label>
                            <input type="text" placeholder="RickThe#1@galactic.gl"  className="reg-input"/> 
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button className="R-button">Reset</button>
                        <button className="S-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration; 