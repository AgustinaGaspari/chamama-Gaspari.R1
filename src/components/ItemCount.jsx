import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'


const ItemCount =({initial, stock, onAdd, handleQuit})=>{
    
    const navigate = useNavigate()
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
    function goToCart(){
        navigate('/cart')
    }
    

    

    return(
        <>
        <Stack direction="vertical" gap={2} style={{alignSelf:'center'}}>
            <div >
                <Button variant="outline-secondary" disabled = {contador<=1} onClick={restar} > - </Button>
                <span className="numContador"> {contador} </span>
                <Button variant="outline-secondary" disabled = {contador>=stock} onClick={sumar} > + </Button>
            </div>
            <div>
                <Button variant="secondary" onClick={()=>onAdd(contador)}>Agregar al carrito</Button>
                <Button variant="secondary" onClick={goToCart}>Finalizar Compra</Button>
            </div>
        </Stack>
        </>
        
    )
}

export default ItemCount;

        