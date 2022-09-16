import "./CaractersPanel.css"

function CaractersPanel () {

return(

        <div class="homepage-CaractersPanel">
            <img  className="CaractersPanel-img" src="\images\birdperson.png" alt="Bird Preson" />
            <div class="CaractersPanel-overlay">
                <img  className="CaractersPanel-overlay-img1" src="\images\phenixperson.PNG" alt="Bird Preson" />
                {/* <img  className="CaractersPanel-overlay-img2" src="\images\abradolflincon.png" alt="Abradolf" /> */}
            </div>
        </div>

);
};


export default CaractersPanel;