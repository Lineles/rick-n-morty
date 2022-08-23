import React from "react";
import Caracter from "../Caracter/Caracter";
import axios from "axios";

export default function Homepage () {
    const [caracters, setCaracter] = React.useState([]);

    const fetchCaracter = () => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response => setCaracter(response.data))
    };

    return(

        <div> 
            <button onClick={fetchCaracter} >render Caracters</button>
            {caracters.map(
                function(caracters) {
                    return <Caracter 
                    name={caracters.name}
                    image={caracters.image} />    
                }
            )}
        </div>

    )

}