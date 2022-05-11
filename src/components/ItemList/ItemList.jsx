import React, { useEffect, useState } from "react";
import Item from "../Items/Item";
import { productList } from "../../data/data";
import "./ItemList.css";
import { Waveform } from "@uiball/loaders";

const ItemList = () => {
    const [products, setProducts] = useState([]);
    
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(productList);
        }, 2000);
    });

    
    const getProductsFromDB = async () => {
        try {
        const result = await getProducts;
        setProducts(result);
        } catch (error) {
        console.log(error);
        alert("No podemos mostrar los productos en este momento");
        }
    };

    
    useEffect(() => {
        getProductsFromDB();
    }, []);

    return (
        <div className="product-list-container">
        {
            
            products.length ? (
            <>
                {
                
                products.map((product) => {
                    
                    return (
                    <div key={product.id}>
                        <Item
                        title={product.title}
                        img={product.img}
                        price={product.price}
                        stockProduct={product.stockProduct}
                        id={product.id}
                        discount={product.discount}
                        month={product.month}/>
                    </div>
                    );
                })
                }
            </>
            ) : 
            (
                <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
            )
        }
        </div>
    );
};

export default ItemList;
