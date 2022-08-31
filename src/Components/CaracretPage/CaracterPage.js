import "./CaracterPage.css";
import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CaracterPage () {
   let { id } = useParams();
   let [caracters, fetchedCaracters] = useState([])


   let api = `https://rickandmortyapi.com/api/character/${id}`


   useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json()); 
      fetchedCaracters(data);
    })(); 
  }, [api]);


    
    let {name, status, species, type, gender, image, origin, location } = caracters; 
   
    
    return (
      <div className="MainDiv">
      
      <div className="imageDIV">
        <img src={image} alt={name} className="caracter-img"/>
      </div>

      <div className="infocard">
        <img src="\images\collection-torn-paper-png.png" alt="papier" className="papier"></img>
        <div className="info">
          <div className="lineflex"> <p className="infos">Status:</p> <p className="answers">{status}</p> </div> 
          <div className="lineflex"> <p className="infos">Species:</p>   <p className="answers">{species}</p></div>
          <div className="lineflex"> <p className="infos">Type:</p>   <p className="answers">{type}</p></div>
          <div className="lineflex"> <p className="infos">Gender:</p>    <p className="answers">{gender}</p></div>
          <div className="lineflex"> <p className="infos">Last known Location:</p>  <p className="answers">{location?.name}</p> </div>
          <div className="lineflex"> <p className="infos">Origin:</p> <p className="answers">{origin?.name}</p> </div>
        </div>
      </div>
    </div>
    )
}

export default CaracterPage; 