import React from "react";
import NewsPanel from "./Panels/NewsPanel";
import LoginPanel from "./Panels/LoginPanel";
import CaractersPanel from "./Panels/CaractersPanel";
import ChatPanel from "./Panels/ChatPanel";

import "./HomePage.css"

function HomePage () {
 


    return(
        <div>

                <div className="homepage-main-flex">
                    <NewsPanel />
                    <LoginPanel />
                    <ChatPanel /> 
                    <CaractersPanel />

               

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