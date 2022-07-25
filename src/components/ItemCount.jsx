import React, { useState } from 'react'

const ItemCount =({initial, stock, onAdd})=>{
    const [contador, setContador] = useState(initial)
    
    console.log('me renderice')

    const sumar=()=>{
        if(contador< stock){
            setContador(contador+1)
        }
        
    }
    const restar=()=>{
        if(contador > 0){
            setContador(contador-1)
        }
        
    }

    return(
        <>
        <div>
            <button onClick={restar} id="less">-</button>
            <span>{contador}</span>
            <button onClick={sumar} id="plus">+</button>
        </div>
        
        <button onClick={()=>onAdd(contador)} id="buy">Agregar al Carrito</button>
        </>
        
    )
}

export default ItemCount;
