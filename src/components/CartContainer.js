import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import {Link, useNavigate} from "react-router-dom";
import ItemCart from './Cart';
import './CartContainer.css';
import Button from 'react-bootstrap/Button'



const CartContainer=()=>{
    const {cart, totalPrice, cleanCart} = useContext (CartContext);
    const navegar = useNavigate()

    if (cart.length===0){
        return <>
            <div className='emptyCart'>
                <p>No hay productos en el carrito</p>
                <Link to={'*'} style={{color:'black', background:'#f6d74f'}}>Volver a la Tienda</Link>
            </div>
        </>   
    } 

    return(
        <>
        <div>
            <h2 className='myCartTittle'>Mis Compras</h2>
            
            {cart.map(item=> <ItemCart key= {item.id} item={item}/>)}
        
            <p className='totalBuy'>Total: $ {totalPrice()} </p>
            <div className="buttons">
                <Button variant="outline-dark" onClick={()=>navegar('/checkout')}>Finalizar Compra</Button>
                <Button variant="outline-dark" onClick={()=>cleanCart()}>Vaciar Carrito</Button>
            </div>
        </div>
        
        </>
    )

}

export default CartContainer