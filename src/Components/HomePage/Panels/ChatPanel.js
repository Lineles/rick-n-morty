import { Link } from "react-router-dom";
import "./ChatPanel.css"

function ChatPanel () {

    return (

        <Link
            to={"/Discord"}
            class="homepage-ChatPanel">
            <img  className="ChatPanel-img" src="\images\vascular-venture-fantendo.png" alt="Summer" />
            <img  className="ChatPanel-img-2" src="\images\a8103e67a904.png" alt="TV" />
                <ul className="ChatPanel-ul"> 
                    <li className="ChatPanel-li">There is nothing to see here!!!</li>
                </ul>
           
            <div class="ChatPanel-overlay">
                <h1 className="ChatPanel-h1-overlay"> Join our DISCORD!</h1>
                <img  className="ChatPanel-img-overlay" src="\images\summer.png" alt="Summer" />
                <p className="ChatPanel-p-overlay">become part of the community</p>  
                <img className="ChatPanel-img-2-overlay" src="\images\rick-and-morty-png-transparent-png.png" alt="Summer" />
                
            </div>
        </Link>


    );
};

export default ChatPanel; 