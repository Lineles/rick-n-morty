import React, { useEffect, useState } from "react";

import NavigationNoSerch from "../Navigation/NavigationNoSerch";

import "./HomePage.css"

function HomePage () {
    
    let [caracters, fetchedCaracters] = useState([])

    let api = `https://rickandmortyapi.com/api/character/25`
 
 
    useEffect(() => {
     (async function () {
       let data = await fetch(api).then((res) => res.json()); 
       fetchedCaracters(data);
     })(); 
   }, [api]);
 
 
     
     let {name, status, species, type, gender, image } = caracters; 
    
    return(
        <div>
            <NavigationNoSerch />

                <div className="homepage-main-flex">
                    <div className="homepage-panel homepage-effekt1"> 
                        <img src="\images\abradolflincon.png" alt="Abradolf Lincler" />
                    </div>
                    <div className="homepage-panel homepage-effekt2">  
                        <img src="\images\meeseeks1.png" alt="Mr. Meeseeks" />
                    </div>
                    <div className="homepage-panel homepage-effekt3">  
                        <img src="\images\face.png" alt="Armagheadon" />
                    </div>
                    <div className="homepage-panel homepage-effekt4"> 
                        <img src="\images\birdperson.png" alt="Bird Preson" />
                    </div>
                </div> 
            
            
            <h1>Hello</h1>
        </div>
    )

}

export default HomePage; 