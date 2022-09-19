import "./PagesHomePanel.css"

function PagesHomePanel ({setpage, currentPage}) {

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
        <h3 className="CaracterPanel-overlay-Pages-Title">!!! More than 800 Caracters !!!</h3>
        <button onClick={next} className="HomePanel-page-button" >next</button>
    </div>
)

}

export default PagesHomePanel; 