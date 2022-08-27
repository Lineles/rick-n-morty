import "./Navigation.css"
import Pages from "../Pages/Pages";
import Search from "../Searchbar/Search";

function Navigation ({setpage, page, setSearch, search}) {

        return (

            <nav> 
                <div>

                </div>
                <div>
                    <Search setSearch={setSearch} search={search} />
                </div>
                <div>
                    <Pages setpage={setpage} page={page}/>
                </div>
            </nav>
        );


}

export default Navigation; 