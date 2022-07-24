import './ItemListContainer.css';
import Button from "react-bootstrap/esm/Button";


const ItemListContainer=()=> {
    return(
        <div className="saludar">
            <Button id="hiBtn" callback ={ItemListContainer}>
                <h1>
                    BIENVENIDO
                </h1>
            </Button>
        </div>
    )
}
export default ItemListContainer;