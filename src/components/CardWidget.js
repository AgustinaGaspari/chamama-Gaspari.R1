import { useContext } from 'react';
import {BiCart} from 'react-icons/bi';
import { CartContext } from '../context/CartContext';


const CardWidget =()=>{
    const valueToShare = useContext(CartContext)
    
    return (
        <BiCart>{valueToShare.cantInCart}</BiCart>
    );
}

export default CardWidget;