import "bootstrap/dist/css/bootstrap.css";
import './ItemListContainer.css'
import Titulo from "../Titulo/Titulo";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(){
    return(
        <div className="itemListContainer">
        <svg  className='itemListContainer__background' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,218.7C672,235,768,245,864,224C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <Titulo />
        <ItemList/>       

        </div>
        
    )
}

export default ItemListContainer