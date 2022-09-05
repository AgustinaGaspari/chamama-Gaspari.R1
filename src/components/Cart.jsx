import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import {CgTrash} from 'react-icons/cg';
import './Cart.css';

const ItemCart =({item})=>{
    const {removeToCart} = useContext (CartContext);
   
    return (
        <>
            <div className='itemCart'>
                <p className="card-title" > 
                    {item.name}
                </p>  
                <p className="card-text"> Precio: $ {item.price} </p>
                <p className="card-text"> Unidades: {item.quantity} </p>
                <p className="card-text"> Subtotal: $ {item.quantity*item.price} </p>   
                <CgTrash onClick={()=>removeToCart(item.id)}></CgTrash>   
            </div>
            
            
        </>
    );
}

export default ItemCart;