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
                className="nav-input"/> 
            <button className="input-submit"> Find </button>
        </form>

    );
}

export default Search; 