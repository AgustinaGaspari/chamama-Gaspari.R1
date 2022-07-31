import {useState, useEffect} from "react";
import ItemDetail from './ItemDetail';
import {oneItem} from '../mock/OneItem';
import './ItemDetailContainer.css';

const ItemDetailContainer = ()=>{

    const [item, setItem]= useState([])
    const[mensaje, setMensaje] = useState(false)
    const [loading, setLoading] = useState(true)

    
    useEffect(()=>{
        console.log ('soy el use effect') 
        oneItem
        .then((res)=> setItem(res))
        .catch(()=> setMensaje('Error, intente más tarde'))
        .finally(()=> setLoading(false))
    },[]) 

    return(
        <div>
            <h1 id="detail">DETALLE DE PRODUCTO</h1>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;