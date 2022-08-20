import React from "react";
import { useState, useContext } from "react";
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {getFirestore } from "firebase/firestore";
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";

const Checkout=()=>{
   
    const navi = useNavigate()

    const [comprador, setComprador]=useState({})

    const{cart, totalPrice, cleanCart}= useContext(CartContext)

    const [orderId,setOrderId]=useState('')

    const datosComprador=(e)=>{
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }
    const db=getFirestore()
    
    const backHome=()=> navi('/')
    

    const finalizarCompra =(e)=>{
        e.preventDefault()
        if (Object.values(comprador).length !==3){
           Swal.fire({
                icon:'warning',
                text:'Todos los campos son obligatorios',
                showConfirmButton: false,
                timer:2000,
            })
        }else{
        
            const ventasCollection= collection(db, "ventas")
            addDoc(ventasCollection, {
                comprador,
                items: cart,
                total: totalPrice(),
                date: serverTimestamp()

            })
                .then((res)=>{
                setOrderId(res.id)
                cleanCart()
            })
            .catch((error)=>console.log(error))
    
        }
    }
    return(
        <>
           {!orderId  ?
                <div>
                    <h2>Completa tus datos para finalizar la compra</h2>
                    <form onSubmit={finalizarCompra}>
                        <input type="text" placeholder='Nombre Completo' name='name'onChange={datosComprador}/>
                        <input type="number" placeholder='Número de teléfono' name='telefone' onChange={datosComprador} />
                        <input type="email" placeholder='mail@mail.com' name='email'onChange={datosComprador}/>
                        <button type='submit'>Comprar</button>
                    </form>
                </div>
                :   <div>
                        <h2>MUCHAS GRACIAS POR SU COMPRA!</h2>
                        <h3>Su orden es: {orderId}</h3>
                        <button onClick={backHome}>Volver a la tienda</button>
                    </div>}
            
        </>
    )
}

export default Checkout