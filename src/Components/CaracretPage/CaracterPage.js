import "./CaracterPage.css";
import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CaracterPage () {
   let { id } = useParams();
   let [caracters, fetchedCaracters] = useState([]);

   console.log(caracters)

   let api = `https://rickandmortyapi.com/api/character/${id}`

   useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json()); 
      fetchedCaracters(data);
    })(); 
  }, [api]);
    
    let {name, status, species, type, gender, origin, location, image, episode} = caracters; 
    // let {name} = location
    // let {name} = origin

 
    
    return (
    <div className="MainDiv">
            <div className="imageDIV">
              <img src={image} alt={name} className=""/>
            </div>
            <div className="nameDIV">
              {name}
            </div>
            <div className="statusDIV">
              {status}
            </div>
            <div className="speciesDIV">
              {species}
            </div>
            <div className="typeDIV">
              {type}
            </div>          
            <div className="genderDIV">
              {gender}
            </div>
        </div>

    )
}

export default CaracterPage; 