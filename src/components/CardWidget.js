import { useContext } from 'react';
import {BiCart} from 'react-icons/bi';
import { CartContext } from '../context/CartContext';


const CardWidget =()=>{
    const valueToShare = useContext(CartContext)
    
    if (valueToShare.cantInCart===0){
        return <></>
    }

    return (
        <>
        <BiCart/>
        <p>{valueToShare.cantInCart}</p>
        </>  
    );
}

export default CardWidget;