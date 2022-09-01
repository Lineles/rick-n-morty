import "./Navigation.css"
import Search from "../Searchbar/Search";
import error from "../404";
import { Link } from "react-router-dom";

function Navigation ({setpage, setSearch}) {

        return (

            <nav> 
                <div>
                    <Link to={error} className="nav-link">Rick Tak Toe</Link>
                    <Link to={error} className="nav-link">Rick Paper Sissors</Link>
                    <Link to={error} className="nav-link">Witch Caracter are you?</Link>
                </div>

                <div>
                    <Search setSearch={setSearch} setpage={setpage} />
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

export default Navigation; 