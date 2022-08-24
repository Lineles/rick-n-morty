
function CaracterCard ({results}) {
   
        let display;

        if (results) {
            display = results.map((x) => {
                let {id, name} = x; 
                return(
                <div key={id}>
                    {name}
                
                </div>
                ); 


            })
        }else { 
            display = "No Caracter";
        };
        return <>{display}</>
}

export default CaracterCard; 