import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import {Link, useNavigate} from "react-router-dom";
import ItemCart from './Cart';


const CartContainer=()=>{
    const {cart, totalPrice, cleanCart} = useContext (CartContext);
    const navegar = useNavigate()

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
            <h2>Mis Compras</h2>
            
            {cart.map(item=> <ItemCart key= {item.id} item={item}/>)}
        
            <p>Total: $ {totalPrice()} </p>

            <button onClick={()=>navegar('/checkout')}>Finalizar Compra</button>
            <button onClick={()=>cleanCart()}>Vaciar Carrito</button>
        </div>
        
        </>
    )

}

export default CartContainer