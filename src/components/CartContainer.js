import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import {Link} from "react-router-dom";
import ItemCart from './Cart';

const CartContainer=()=>{
    const {cart, totalPrice, cleanCart} = useContext (CartContext);

    if (cart.length===0){
        return <>
            <div>
                <p>No hay productos en el carrito</p>
                <Link to={'*'}>Volver a la Tienda</Link>
            </div>
        </>   
    } 

    return(
        <>
        <div>
            {cart.map(item=> <ItemCart key= {item.id} item={item}/>)}
        
            <p>Total: $ {totalPrice()} </p>

            <button onClick={()=>cleanCart()}>Vaciar Carrito</button>
        </div>
        
        </>
    )

}

export default CartContainer