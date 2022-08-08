import { useContext } from 'react';
import {BiCart} from 'react-icons/bi';
import { CartContext } from '../context/CartContext';


const CardWidget =()=>{
    const {cantInCart}= useContext(CartContext)
    return (
        <BiCart>{cantInCart}</BiCart>
    );
}

export default CardWidget;