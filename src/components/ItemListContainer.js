import './ItemListContainer.css';

const ItemListContainer=(props)=> {

    return(
        <div className="saludar">
           <h2 id="hi">{props.greeting}</h2>
        </div>
    )
}
export default ItemListContainer;