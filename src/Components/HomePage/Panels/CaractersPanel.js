import { Link } from "react-router-dom";
import PagesHomePanel from "../../Pages/PagesHomePanel";


import "./CaractersPanel.css"

function CaractersPanel ({results, currentPage, setpage, setSearch}) {

let display;
let imageDisplay; 

if (results) {
    imageDisplay = results.map((x) => {
        let {id, name, image} = x;

        return(
            <Link 
                to={`${id}`}
                key={id} className="CaractersPanel-Panel-div" >
                <img src={image} alt={name} className="CaractersPanel-Panel-img"/>
            </Link>
        );
    })
}else { 
    imageDisplay = "No Caracter";
};



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
            <p className="CaracterPanel-Pages-p">{imageDisplay}</p>
            <h3 className="CaracterPanel-Pages-Title">!!! More than 800 Caracters !!!</h3>


            <div class="CaractersPanel-overlay">
                <PagesHomePanel setpage={setpage} currentPage={currentPage} setSearch={setSearch}/>
                <div className="CaractersPanel-Fetch" > {display}</div>   
            </div>
        </div>

);
};


export default CaractersPanel;