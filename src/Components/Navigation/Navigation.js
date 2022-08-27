import "./Navigation.css"
import Pages from "../Pages/Pages";
import Search from "../Searchbar/Search";

function Navigation ({setpage, page, setSearch}) {

        return (

            <nav> 
                <div>

                </div>
                <div>
                    <Search setSearch={setSearch} setpage={setpage} />
                </div>
                <div>
                    <Pages setpage={setpage} page={page}/>
                </div>
            </nav>
        );


}

export default Navigation; 