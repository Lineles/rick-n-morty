import "./NavigationNoSerch.css"
import { Link } from "react-router-dom";
import error from "../404";

function NavigationNoSerch ({setpage, setSearch}) {

        return (

            <nav> 
                   <div>
                    <Link to={error}>Rick Tak Toe</Link>
                    <Link to={error}>Rick Paper Sissors</Link>
                    <Link to={error}>Witch Caracter are you?</Link>
                </div>

                
                <div>
                    <form>
                        <input type="text" placeholder="Rick Sanchez" /> 
                        <input type="password" placeholder="Password"/> 
                        <Link to={error}>Login</Link>
                    </form>
                </div>


            </nav>
        );


}


export default NavigationNoSerch;