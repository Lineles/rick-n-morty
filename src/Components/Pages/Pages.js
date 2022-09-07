import "./Pages.css"

function Pages ({setpage, currentPage}) {

        let next = () => {
            if(currentPage === 42) return;
            setpage((x) => x+1)
        };


        let last = () => {
            if(currentPage === 1) return;
            setpage((x) => x-1)
        };
    
    return(

        <div className="pages" >
            <button onClick={last} className="page-button" >last</button>
            <button onClick={next} className="page-button" >next</button>
        </div>
    )

}

export default Pages; 