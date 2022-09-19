import "./NewsPanel.css"

function NewsPanel () {

    return (
        <div className="NewsPanel homepage-effekt1"> 
            <img className="NewsPanel-img" src="\images\rick-and-morty2.png" alt="Abradolf Lincler" />
            <h1 className="NewsPanel-h1"> Check this out!</h1>
            <ul className="NewsPanel-ul"> 
                <li className="NewsPanel-li">New Season is comming!</li>
                <li className="NewsPanel-li">20% discount in the online shop </li>
                <li className="NewsPanel-li">Rick and Morty</li>
            </ul>
        </div>

    );
};

export default NewsPanel;