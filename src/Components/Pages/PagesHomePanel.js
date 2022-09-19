import Search from "../Searchbar/Search";
import "./PagesHomePanel.css"

function PagesHomePanel ({setpage, currentPage, setSearch}) {

    let next = () => {
        if(currentPage === 42) return;
        setpage((x) => x+1)
    };


    let last = () => {
        if(currentPage === 1) return;
        setpage((x) => x-1)
    };

return(

    <div className="CaracterPanel-overlay-Pages" >

        <button onClick={last} className="HomePanel-page-button" >last</button>
            <Search />
        <button onClick={next} className="HomePanel-page-button" >next</button>
    </div>
)

}

export default PagesHomePanel; 