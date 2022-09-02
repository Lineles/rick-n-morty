import "./Navigation.css"
import Search from "../Searchbar/Search";
import error from "../404";
import { Link } from "react-router-dom";


function Navigation ({setpage, setSearch}) {

        return (

            <nav> 
                <div>
                    <Link to={error} className="nav-link">Rick Tak Toe</Link>
                    <Link to={error} className="nav-link">Rick Paper Scissors</Link>
                    <Link to={error} className="nav-link">Which Character are you?</Link>
                </div>

                <div>
                    <Search setSearch={setSearch} setpage={setpage} />
                </div>
                <div>
                    <form>
                    <Link to="/registration"  className="nav-link">Create Acc</Link>
                        <Link to={error} className="nav-link">Login</Link>
                        <input type="text" placeholder="Rick Sanchez"  className="nav-input"/> 
                        <input type="password" placeholder="Password" className="nav-input"/> 
                    </form>
                </div>


            </nav>
        );


}

export default Navigation; 