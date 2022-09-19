import { Link } from "react-router-dom";

import "./CaractersPanel.css"

function CaractersPanel ({results}) {

let display;

if (results) {
    display = results.map((x) => {
        let {id, name, image} = x;

        return(
            <Link 
                to={`${id}`}
                key={id} className="CaractersPanel-Caracter-div" >
                <img src={image} alt={name} className="CaractersPanel-Caracter-img"/>
                <h1 className="CaractersPanel-Caracter-name">{name}</h1> 
            </Link>
        );
    })
}else { 
    display = "No Caracter";
};


return(

        <div class="homepage-CaractersPanel">
            {/* <img  className="CaractersPanel-img" src="\images\birdperson.png" alt="Bird Preson" /> */}
            <div class="CaractersPanel-overlay">
                <h1 className="CaractersPanel-overlay-h1"> Find your favourite Caracter</h1>
                <div className="CaractersPanel-Fetch" > {display}</div>   
            </div>
        </div>

);
};


export default CaractersPanel;