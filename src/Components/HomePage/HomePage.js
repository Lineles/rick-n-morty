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


                </div> 
                
            
        </div>
    )

}

export default HomePage; 