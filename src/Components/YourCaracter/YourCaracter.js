import NavigationNoSerch from "../Navigation/NavigationNoSerch"
import React, { useEffect, useState }  from "react";

export const YourCaracter = () => {
  
let [caracter, fetchedCaracter] = useState([]);
  let {result} = caracter;


  let number = 2;
    number = () => {Math.floor(Math.random()*20)}


  let api = `https://rickandmortyapi.com/api/character/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json()); 
      fetchedCaracter(data);
    })(); 
  }, [api]);
 

    return (
        <div> 
            <NavigationNoSerch /> 
            <div> 
                <p>Wich Caracter fits you the best? </p>
                <button onClick={number()}> Find Out </button>
                
                {result}
            </div>
        </div>
    )

}