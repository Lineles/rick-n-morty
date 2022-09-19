import { Link } from "react-router-dom";
import PagesHomePanel from "../../Pages/PagesHomePanel";

import "./CaractersPanel.css"

function CaractersPanel ({results, currentPage, setpage}) {

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
                <PagesHomePanel setpage={setpage} currentPage={currentPage}/>
                <div className="CaractersPanel-Fetch" > {display}</div>   
            </div>
        </div>

);
};


export default CaractersPanel;