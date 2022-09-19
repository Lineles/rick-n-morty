import React from "react";
import NewsPanel from "./Panels/NewsPanel";
import LoginPanel from "./Panels/LoginPanel";
import CaractersPanel from "./Panels/CaractersPanel";
import ChatPanel from "./Panels/ChatPanel";

import "./HomePage.css"

function HomePage ({results, currentPage, setpage, page}) {
 


    return(
        <div>

                <div className="homepage-main-flex">
                    <NewsPanel />
                    <LoginPanel />
                    <ChatPanel /> 
                    <CaractersPanel results={results} setpage={setpage} page={page} currentPage={currentPage}/>


                </div> 
                
            
        </div>
    )

}

export default HomePage; 