import "./LoginPanel.css"
import Login from "../../Login/Login";


function LoginPanel () {


    return (

        <div className="homepage-login-panel">  
            <h1 className="login-panel-h1"> why aren't you registered yet ?</h1>
            <img className="login-panel-img" src="\images\meeseeks1.png" alt="Mr. Meeseeks" />
            <div class="login-panel-overlay">
                <div className="login-panel-box">
                    <Login />
                    
                </div>
        </div>
    </div>

    );

};

export default LoginPanel; 