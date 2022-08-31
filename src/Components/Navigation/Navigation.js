import "./Navigation.css"
import Search from "../Searchbar/Search";
import error from "../404";
import { Link } from "react-router-dom";

function Navigation ({setpage, setSearch}) {

        return (

            <nav> 
                <div>
                    <Link to={error}>Rick Tak Toe</Link>
                    <Link to={error}>Rick Paper Sissors</Link>
                </div>

                <div>
                    <Search setSearch={setSearch} setpage={setpage} />
                </div>
                <div>
                    <Link to={error}>Witch Caracter are you?</Link>
                </div>


            </nav>
        );


}

export default Navigation; 