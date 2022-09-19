import "./Header.css"

function Header (){
    return (
        
        <div className="header-div">
             <div>
             <img src="\images\rick-and-morty2.png" alt="Rick and Morty" className="header-img-left"></img>
             </div>

             <div className="header-text" >
                 <h3 className="header-h3"> The </h3>
                 <h1 className="header-h1"> Rick and Morty </h1>
                 <h3 className="header-h3-2"> Character Encyclopedia</h3>
             </div>

             <div>
             <img src="\images\Rick-And-Morty.png" alt="Rick and Morty" className="header-img-right"></img>
             </div>
        </div>
); 
}

export default Header; 