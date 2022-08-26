
function Pages ({setpage, page}) {

        let next = () => {
            if(page === 42) return;
            setpage((x) => x+1)
        };

        let last = () => {
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