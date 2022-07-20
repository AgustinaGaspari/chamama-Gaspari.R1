import Button from "react-bootstrap/esm/Button";


const greeting=()=> {
    return(
        <div className="Saludar">
            <Button callback ={greeting}>
                <h1>
                    BIENVENIDO
                </h1>
            </Button>
        </div>
    )
}
export default greeting;