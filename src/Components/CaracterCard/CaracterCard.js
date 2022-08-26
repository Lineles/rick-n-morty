import "./CaracterCard.css"

function CaracterCard ({results}) {
   
        let display;

        if (results) {
            display = results.map((x) => {
                let {id, name, gender, image, species, status} = x; 
                return(

                <div key={id} className="card-div">
                    <img src={image} alt={name} className="card-img"/>
                    <h1 className="card-name">{name}</h1> 
                    {/* <p className="card-gender">{gender}</p> */}
                    {/* <p className="card-species">{species} </p> */}
                    {/* <p className="card-status">{status}</p> */}
                </div>
                ); 


            })
        }else { 
            display = "No Caracter";
        };
        return <div className="main-flex"> {display}</div>
}

export default CaracterCard; 