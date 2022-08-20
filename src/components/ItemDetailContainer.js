import {useState, useEffect} from "react";
import ItemDetail from './ItemDetail';
//import {data} from '../mock/Data';
import './ItemDetailContainer.css';
import {useParams} from "react-router-dom";
import { doc, collection, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = ()=>{

    const [item, setItem]= useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams();
    
    useEffect(() => {
        const db=getFirestore();

        const collectionProducts = collection(db, "items")

        const productRef=doc(collectionProducts, id);

        getDoc(productRef).then((snapshot)=> {
            setItem({id: snapshot.id, ...snapshot.data()})
        })
        .catch((error)=> console.error(error))
        .finally(()=> {setLoading(false)})

    }, [id]);


    /*useEffect(()=>{
        console.log ('soy el use effect') 
        data
        .then((res)=> {
                setItem(res.find((product)=> product.id===id))    
            })
        .catch(()=> setMensaje ('Error, intente más tarde'))
        .finally(()=> setLoading(false))
    },[id]) ;*/

    return (
        <div>
            <h1 id="detail">DETALLE DE PRODUCTO</h1>
            {item && <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;