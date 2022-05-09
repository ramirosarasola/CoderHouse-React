import React from 'react'

const ShopTitle= "Tienda Oficial All In"

export default function Titulo({titulo= ShopTitle}) {
    return (
        
            <h1 className='itemListContainer__title'>{titulo}</h1>            
        
    )
}
