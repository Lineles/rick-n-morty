import './Caracter.css';
 
function Caracter (props) {
   
   return(

       <div> 
           <img className='caracter-image' src={props.image} alt={props.name} />
           <h1> This is {props.name} </h1>


       </div>

   ); 
}

export default Caracter; 