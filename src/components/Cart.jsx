import React, {useContext, useState} from 'react'
import { CartContext } from '../context/CartContext';



const ItemCart =({item})=>{
    const {removeToCart} = useContext (CartContext);
    const {totalPrice}= useContext(CartContext)
   
    return (
        <>
            <h2>Mis Compras</h2>
            <div>
            <h3 className="card-title" id= "titulo"> 
                {item.name}
            </h3>  
            <p className="card-text" id="description"> 
                Descripción: {item.description} 
            </p>
            <img src={item.img} className= "car-img-top img-fluid" alt={item.name}/>
            <p className="card-text"> Precio: $ {item.price} </p>
            <p className="card-text"> Unidades: {item.quantity} </p>
            <p className="card-text"> Subtotal: $ {item.quantity*item.price} </p>   
        </div>
            
            <button onClick={()=>removeToCart(item.id)}>Eliminar</button>
            
        </>
    );
}

export default ItemCart;