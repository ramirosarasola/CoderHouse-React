import React from "react";
import ItemCount from "../Buttons/ItemCount";
import swal from 'sweetalert';
import "./Item.css"
const Item = ({ title, img, price, id, stockProduct, month, discount,  }) => {
    const onAdd = (quantity) => {
        swal({
            title: "Felicitaciones!",
            text: `Has adquirido ${quantity} planes!!`,
            icon: "success",
            button: "VOVLER",
        });
    };

    return (
        <div className="card">
        <p className="title">{title}</p>
        <div className="pricecontainer">
            <img className="card__backgrond--img" src={img}/>
            <p className="price">{price}</p>
            <p className="pricedescriptor">{month}/month</p>
            <p className="stock">{"stock disponible: " + stockProduct}</p>
        </div>
        <p className="includes">This Plan Includes:</p>
        <ul className="benefitlist">
            <li>Awesome Benefits</li>
            <li>{discount}</li>
        </ul>
        <div className="btncontainer">
            <div className="btnCounter">
                <ItemCount stockProduct={stockProduct} onAdd={onAdd} initial={1} />
            </div>
        </div>
        </div>
    );
};

export default Item;
