import React from "react";
import Login from "../Login/Login";
import NewsPanel from "./NewsPanel";

import "./HomePage.css"

function HomePage () {
 


    return(
        <div>

                <div className="homepage-main-flex">
                    <NewsPanel />

                    <div className="homepage-panel2">  
                        <h1 className="panel2-h1"> why aren't you registered yet ?</h1>
                        <img className="panel2-img" src="\images\meeseeks1.png" alt="Mr. Meeseeks" />
                        <div class="overlay2">
                             <div className="Registration-box">
                                 <Login />
                             </div>
                        </div>
                    </div>

                    <div class="homepage-panel3">
                        <h1 className="panel3-h1"> Chat corner</h1>
                        <img  className="panel3-img" src="\images\birdperson.png" alt="Bird Preson" />
                        <div class="overlay3">
                            <h1 className="panel3-h1-2"> Chat corner</h1>
                            <img  className="panel3-img2" src="\images\phenixperson.PNG" alt="Bird Preson" />
                        </div>
                    </div>

                    <div class="homepage-panel4">
                        <img  className="panel4-img" src="\images\birdperson.png" alt="Bird Preson" />
                        <div class="overlay4">
                            <img  className="panel4-img2" src="\images\phenixperson.PNG" alt="Bird Preson" />
                            <img  className="panel4-img3" src="\images\abradolflincon.png" alt="Abradolf" />
                        </div>
                    </div>
                
                    <div class="homepage-panel5">
                        <h1 className="panel5-h1"> Chat corner</h1>
                        <img  className="panel5-img" src="\images\birdperson.png" alt="Bird Preson" />
                        <div class="overlay5">
                            <div class="overlay5-div">
                                <h1 className="panel5-h1-2"> Chat corner</h1>
                            </div>
                            <img  className="panel5-img2" src="\images\phenixperson.PNG" alt="Bird Preson" />
                        </div>
                    </div>
                    <div class="homepage-panel6">
                        <img  className="panel6-img" src="\images\birdperson.png" alt="Bird Preson" />
                        <div class="overlay6">
                            <img  className="panel6-img2" src="\images\phenixperson.PNG" alt="Bird Preson" />
                        </div>
                    </div>
            
                </div> 
                
            


            <h1>Hello</h1>
        </div>
    )

}

export default HomePage; 