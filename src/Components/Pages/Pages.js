import "./Pages.css"

function Pages ({setpage, page}) {

        const next = () => {
            if(page === 42) return;
            setpage((x) => x+1)
        };

        const last = () => {
            if(page === 1) return;
            setpage((x) => x-1)
        };
    
    return(

        <div>
            <button onClick={last}>last</button>
            <button onClick={next}>next</button>
        </div>
    )

}

export default Pages; 