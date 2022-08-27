import "./Navigation.css"
import Pages from "../Pages/Pages";

function Navigation ({setpage, page}) {

        return (

            <nav> 
                <div>

                </div>
                <form>
                    <input type="text" placeholder="Search for Caracter" className="nav-input"/> 
                    <button className="input-submit"> Find </button>
                </form>
                <div>
                    <Pages setpage={setpage} page={page}/>
                </div>
            </nav>
        );


}

export default Navigation; 