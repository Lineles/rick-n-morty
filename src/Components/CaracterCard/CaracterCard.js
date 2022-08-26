import "./CaracterCard.css"

function CaracterCard ({results}) {
   
        let display;

        if (results) {
            display = results.map((x) => {
                let {id, name, image} = x; 
                return(

                <div key={id} className="card-div effect">
                    <img src={image} alt={name} className="card-img effect10"/>
                    <h1 className="card-name effect1">{name}</h1> 
                </div>
                ); 


            })
        }else { 
            display = "No Caracter";
        };
        return <div className="main-flex"> {display}</div>
}

export default CaracterCard; 