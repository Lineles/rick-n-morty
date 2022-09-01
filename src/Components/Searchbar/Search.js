import "./Search.css"

function Search ({setSearch, setpage} ) {

    return(
        <form>
            <input 
                onChange={(input) => {
                    setpage(1);
                    setSearch(input.target.value);
                }}
                type="text" 
                placeholder="Search for Caracter" 
                className="search-input effekt3"/> 
        </form>

    );
}

export default Search; 