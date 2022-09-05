import React from 'react'
import Item from './Item'
import './ItemListContainer.css';

const ItemList =({listaProductos})=>{
    
    return(
        <div className= "itemsStyle">
            {listaProductos.map((producto)=> <Item key={producto.id} producto={producto} />)}
        </div>
    )
}

export default ItemList 