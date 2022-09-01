import "./CaracterCard.css"
import { Link } from 'react-router-dom'; 
import Navigation from "../Navigation/Navigation";
import Pages from "../Pages/Pages";

function CaracterCard ({results, page, setpage, setSearch}) {
   
        let display;

        if (results) {
            display = results.map((x) => {
                let {id, name, image} = x; 
                
                return(
                    <Link 
                        to ={ `${page}${id}`}
                        key={id} className="card-div effect" >
                        <img src={image} alt={name} className="card-img effect10"/>
                        <h1 className="card-name effect1">{name}</h1> 
                    </Link>
                ); 


            })
        }else { 
            display = "No Caracter";
        };
        return (
         <div>   
            <Navigation setpage={setpage} setSearch={setSearch}/> 
            <div className="main-flex" > {display}</div>
            <Pages setpage={setpage} page={page} />
        </div>)
}

export default CaracterCard; 