import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ItemCount.css";
//import ItemCard from "../ItemCard/ItemCard";


export default function ItemCount() {
    let stock = 10;
    const [count, setCount] = useState(0);

    return (
        <div className="btnCountContainer">
        <p className="counter">{count}</p>
        <div className="btns">
            <button className="btnAdd"
            onClick={() => {
                if (count < stock) {
                setCount(count + 1);
                } else {
                alert("No hay stock suficiente");
                }
            }}
            >
            +
            </button>
            <button className="btnAddToCart">Add to Cart</button>
            <button
            className="btnRest"
            onClick={() => {
                if (count == 0) {
                alert("no puede ser menos de 0");
                } else {
                setCount(count - 1);
                }
            }}
            >
            -
            </button>
            
        </div>
        </div>
    );
}
