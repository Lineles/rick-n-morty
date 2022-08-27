import "./CaracterPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

function CaracterPage () {
    let { id } = useParams() 
    let [caracters, fetchedCaracters] = useState([]);
    
    let {name, status, species, type, gender, origin, location, image, episode} = caracters; 
    // let {name} = location
    // let {name} = origin


    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json()); 
          fetchedCaracters(data);
        })(); 
      }, [api]);
   
    return (

        <div>
             Load perfect
        </div>
    )
}

export default CaracterPage; 