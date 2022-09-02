import "./Navigation.css"
import { Link } from "react-router-dom";
import error from "../404";

function NavigationNoSerch ({setpage, setSearch}) {

        return (

            <nav> 
                <div>
                    <Link to={error} className="nav-link">Rick Tak Toe</Link>
                    <Link to={error} className="nav-link">Rick Paper Scissors</Link>
                    <Link to={error} className="nav-link">Which Character are you?</Link>
                </div>

                
                <div>
                    <form>
                        <button to={error}  className="nav-button">Create Acc</button>
                        <input type="text" placeholder="Rick Sanchez"  className="nav-input"/> 
                        <input type="password" placeholder="Password" className="nav-input"/> 
                        <button to={error} className="nav-button">Login</button>
                    </form>
                </div>


            </nav>
        );


}


export default NavigationNoSerch;