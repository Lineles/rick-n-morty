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
 
 
     
     let {name, status, species, type, gender, image, origin, location } = caracters; 
    
    return(
        <div>
            <NavigationNoSerch />

                <div className="homepage-main-flex">
                    <div className="homepage-panel homepage-effekt1"> 
                        <img src={image} alt={name} />
                        <h1 >{name}</h1>
                        <h1 >{status}</h1>
                        <h1 >{species}</h1>
                        <h1 >{type}</h1>
                        <h1 >{gender}</h1>

                    </div>
                    <div className="homepage-panel homepage-effekt2">  
                    </div>
                    <div className="homepage-panel homepage-effekt3">  
                    </div>
                    <div className="homepage-panel homepage-effekt4"> 
                    </div>
                </div> 
            
            
            <h1>Hello</h1>
        </div>
    )

}

export default HomePage; 