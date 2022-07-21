import './ItemListContainer.css';
import Button from "react-bootstrap/esm/Button";


const greeting=()=> {
    return(
        <div className="saludar">
            <Button id="hiBtn" callback ={greeting}>
                <h1>
                    BIENVENIDO
                </h1>
            </Button>
        </div>
    )
}
export default greeting;