import "./Navigation.css"
import Search from "../Searchbar/Search";
import error from "../404";
import { Link } from "react-router-dom";


function Navigation ({setpage, setSearch}) {

        return (

            <nav> 
                <div className="nav-link-div">
                    <Link to="/news" className="nav-link">News</Link>
                    <Link to="/" className="nav-link">Home Page</Link>
                    <Link to="/Caracters" className="nav-link">Caracters</Link>
                    <Link to="/Discord" className="nav-link">Discord</Link>
                    <Link to="/registration"  className="nav-link">Create Acc</Link>
                </div>

                <div>
                    <Search setSearch={setSearch} setpage={setpage} />
                </div>
                <div>
                    <form className="nav-login-form">
                        <Link to={error} className="nav-link">Login</Link>
                        <input type="text" placeholder="Rick Sanchez"  className="nav-input"/> 
                        <input type="password" placeholder="Password" className="nav-input"/> 
                    </form>
                </div>


            </nav>
        );


}

export default Navigation; 