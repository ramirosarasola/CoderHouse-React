import "bootstrap/dist/css/bootstrap.css";
import "./CartWidget.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
        <li className="nav-item">
            <a className="nav-link px-3 fs-3" href="">
            <FontAwesomeIcon icon={faCartShopping}/>
            </a>
        </li>
    );
}

export default CartWidget