import "./NavigationNoSerch.css"
import { Link } from "react-router-dom";
import error from "../404";

function NavigationNoSerch ({setpage, setSearch}) {

        return (

            <nav> 
                <div>
                    <Link to={error}>Rick Tak Toe</Link>
                    <Link to={error}>Rick Paper Sissors</Link>
                </div>

                <div>

                </div>
                <div>
                    <Link to={error}>Witch Caracter are you?</Link>
                </div>


            </nav>
        );


}


export default NavigationNoSerch;