import React, { useEffect, useState } from "react";
import Item from "../Items/Item";
import { productList } from "../../data/data";
import "./ItemList.css";
import { Waveform } from "@uiball/loaders";

const ItemList = () => {
  //usaré useState para luego en products introducir los productos que consuma de mi API o en este caso del array de productos que tengo en la carpeta data
    const [products, setProducts] = useState([]);

    //esta constante guarda una instancia de la clase Promise, en la cual hay un setTimeout con 2 segundos que devuelve mi array de productos como parámetro en el "resolve".
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(productList);
        }, 2000);
    });

    //esta función implemente un async que setea la variable products de mi useState y le ingresa mi array de productos
    const getProductsFromDB = async () => {
        try {
        const result = await getProducts;
        setProducts(result);
        } catch (error) {
        console.log(error);
        alert("No podemos mostrar los productos en este momento");
        }
    };

    //useEffect ejecutará la función getProductsFromDB simulando que estamos consumiendo los datos desde una base de datos.
    //Esto se ejecutará solo una vez ya que el array de dependencias "[]" está vacío.
    useEffect(() => {
        getProductsFromDB();
    }, []); //[] = array de dependencias

    return (
        <div className="product-list-container">
        {
            //estaré implementando un ternario (ver documentación de mozilla) en el cual pregunto por el número de elementos que hay en products
            products.length ? ( //si en products no hay nada, el valor será "0" y en ese caso, un cero se puede interpretar como un valor booleano por lo cual se considerará como falso
            <>
                {
                //Luego de dos segundos, products tendrá los productos dentro, y por lo tanto el products.length será distinto de "0", así que se puede interpretar como un valor booleano "true"
                products.map((product) => {
                    // acá tenemos el uso de map, que basicamente está retornando un div con nuestro item adentro tantas veces como productos tenga en mi array de productos (nótese la propiedad key a la cual asigno el id para que react pueda identificar los nodos que se van creando y así los pueda diferenciar). Por favor leer la documentación de map en MDN
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
            ) : (
                <Waveform size={40} lineWeight={3.5} speed={1} color="black" />            
            )
        }
        </div>
    );
};

export default ItemList;
