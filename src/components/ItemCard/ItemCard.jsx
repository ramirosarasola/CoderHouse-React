import "./ItemCard.css";
import ItemCount from "../Buttons/ItemCount";



export default function ItemCard({title='Begginer', stockProduct=10, price='$' + 1900, discount='', month=""}){

    return (
        <div className="card">
        <p className="title">{title}</p>
        <div className="pricecontainer">
            <p className="price">{price}</p>
            <p className="pricedescriptor">{month}/month</p>
            <p className="stock">{stockProduct}</p>
        </div>
        <p className="includes">This Plan Includes:</p>
        <ul className="benefitlist">
            <li>Awesome Benefits</li>
            <li>{discount}</li>
        </ul>
        <div className="btncontainer">
            <div className="btnCounter">
                <ItemCount/>
            </div>
        </div>
        </div>
    );
}