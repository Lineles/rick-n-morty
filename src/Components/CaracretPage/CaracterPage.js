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
      <img src="\images\collection-torn-paper-png.png" alt="papier" className="papier"></img>

      <div className="info-flex">
        <div className="imageDIV">
          <img src={image} alt={name} className=""/>
        </div>
        <div className="basicInfo">
            <div className="nameDIV">
              {name}
            </div>
            <div className="info"> 
              <div className="statusDIV">
                Status: {status}
              </div>
              <div className="speciesDIV">
                Species: {species}
              </div>
              <div className="typeDIV">
                Type: {type}
              </div>          
              <div className="genderDIV">
                Gender: {gender}
              </div>
              <div className="locationDIV">
                Last known Location: {location?.name}
              </div>
              <div className="originDIV">
                Origin: {origin?.name}
              </div>
            </div>   
        </div>       
      </div>
    </div>
    )
}

export default CaracterPage; 