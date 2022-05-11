import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ItemCount.css";

const ItemCount = ({ initial, stockProduct, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const addProduct = (num) => {
        setQuantity(quantity + num);
    };

    return (
        <div className="count-container">
        <div className="count-container__contador">
            <button
            className="count-container__button"
            onClick={() => addProduct(-1)}
            disabled={quantity === initial ? true : null}
            >
            -
            </button>

            <span className="count-container__quantity">{quantity}</span>

            <button
            className="count-container__button"
            onClick={() => addProduct(+1)}
            disabled={quantity === stockProduct ? true : null}
            >
            +
            </button>
        </div>

        <button
            className="button-primary"
            onClick={() => onAdd(quantity)}
            disabled={stockProduct === 0 ? true : null}
        >
            <a className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">Add to Cart</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
            </a>
        </button>
        </div>
    );
};

export default ItemCount;
