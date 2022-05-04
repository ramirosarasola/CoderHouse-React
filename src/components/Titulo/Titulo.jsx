import React from 'react'


const ShopTitle= "Tienda Oficial All In"

export default function Titulo({titulo= ShopTitle}) {
    return (
        <div className='itemListContainer'>
            <h1 className='itemListContainer__title'>{titulo}</h1>            
        </div>
    )
}
