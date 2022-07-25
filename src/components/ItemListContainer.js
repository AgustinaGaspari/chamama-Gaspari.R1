import './ItemListContainer.css';
import ItemCount from './ItemCount';

const ItemListContainer=(props)=> {
    
    const onAdd=(cantidad)=>{
        if (cantidad !=0) {
            console.log(`Agregaste ${cantidad} productos al carrito`)
        }
    }

    return(
        <div className="saludar">
           <h2 id="hi">{props.greeting}</h2>
           
           <ItemCount initial={0} stock={30} onAdd={onAdd}/>
        </div>
    )
}
export default ItemListContainer;