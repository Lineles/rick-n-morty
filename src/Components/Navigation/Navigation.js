import "./Navigation.css"
import Search from "../Searchbar/Search";

function Navigation ({setpage, setSearch}) {

        return (

            <nav> 
                <div>
                    <Search setSearch={setSearch} setpage={setpage} />
                </div>
            </nav>
        );


}

export default Navigation; 