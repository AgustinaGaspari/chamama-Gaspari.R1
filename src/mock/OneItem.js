

const oneProduct = {
    id:'01', 
    name: 'Bolso CHA', 
    description: 'Bolso Reciclado. Material: BLACKOUT y CÁMARA DE VEHICULOS. Costuras y correas reforzadas; bolsillo para celu y llaves.', 
    price: 4500, 
    stock: 10, 
    img:'./img/BolsoBlackout.png'
}

export const oneItem = new Promise((resolve, reject) =>{
        
    let condition = true

    setTimeout(()=>{
        if(condition){
            resolve(oneProduct)
        }else {
            reject ('Error, algo salio mal')
        }
    },2000)
})

