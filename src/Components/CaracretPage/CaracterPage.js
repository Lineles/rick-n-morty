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

    <div>
      <div className="buttonDiv">
        <button className="name-h1 effekt5" onClick={showIMG} >{name}</button>
      </div>
      <div className="MainDiv">
        <div>
          <img src="\images\94aefc0b4cc029fb9ae73faa95c906d2.png" alt="hiddenIMG" id="hiddenIMG" className="hiddenIMG"></img>
        </div>
        <div className="imageDIV">
          <img src={image} alt={name} className="caracter-img" />
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
    </div>
    )
}


function showIMG() {
  const hiddenImg = document.getElementById("hiddenIMG")
  let imgstatus = hiddenImg.style.display
  if (imgstatus === "none"){
    hiddenImg.style.display = "inline"
  } else {
    hiddenImg.style.display = "none"
  }
 }


export default CaracterPage; 