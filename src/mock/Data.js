

const productos = [
    {id:'01', 
    name: 'Bolso CHA',
    category: 'bolsos', 
    description: 'Bolso Reciclado. Material: BLACKOUT y CÁMARA DE VEHICULOS. Costuras y correas reforzadas; bolsillo para celu y llaves.', 
    price: 4500, 
    stock: 10, 
    img:'./img/BolsoBlackout.png'},

    {id:'02', 
    name: 'Mochila MOMO',
    category: 'bolsos', 
    description: 'Mochila Reciclada. Material: BLACKOUT y CÁMARA DE VEHICULOS. Costuras y cierres reforzados; bolsillo frontal y compartimento interno; correas desmontables y regulables.', 
    price: 5000, 
    stock: 10, 
    img: '/img/mochila.png'},

    {id:'03', 
    name: 'Billetera S', 
    category: 'billeteras',
    description: 'Billetera reciclada. Tamaño pequeño. Material: BLACKOUT. Costuras y cierre reforzado, con división para tarjetas y monedas.', 
    price: 1500, 
    stock: 20, 
    img:'/img/BilleteraBlackoutChica.png'},

    {id:'04', 
    name: 'Billetera G',
    category: 'billeteras',
    description: 'Billetera reciclada. Tamaño grande. Material: BLACKOUT. Costuras y cierre reforzado, con división para tarjetas y monedas.', 
    price: 2000, 
    stock: 20, 
    img:'/img/BilleteraBlackoutGrande.png'},

    {id:'05', 
    name: 'Bandolera',
    category:'bolsos', 
    description: 'Bandolera Reciclada. Material: BLACKOUT y CÁMARA DE VEHICULOS. Costuras y cierres reforzados; correa desmontable y regulable; tamaño medio, guardá lo justo y necesario', 
    price: 3500, 
    stock: 10, 
    img:'/img/bandolera.png'},

    {id:'06', 
    name: 'Riñonera PLANA',
    category:'rinoneras', 
    description: 'Riñonera plana reciclada. Material: BLACKOUT. Costuras y cierres reforzados.', 
    price: 3000, 
    stock: 20, 
    img:'/img/riñonera3.png'},

    {id:'07', 
    name: 'Riño QUE', 
    category:'rinoneras',
    description: 'Riñonera reciclada. Material: BLACKOUT y CÁMARA DE VEHICULOS. Costuras y cierre reforzado; bolsillo frontal y compartimento interno; correas desmontables y regulables.', 
    price: 3500, 
    stock: 15, 
    img:'/img/Riñonera.png'},

    {id:'08', 
    name: 'Tabaquera',
    category:'tabaqueras', 
    description: 'Tabaquera reciclada. Material: CÁMARA DE VEHICULOS. Costuras reforzadas', 
    price: 2500, 
    stock: 5, 
    img:'/img/TabaqueraCamara.png'}

]

export const data = new Promise((resolve, reject) =>{
        
    let condition = true

    setTimeout(()=>{
        if(condition){
            resolve(productos)
        }else {
            reject ('Error, algo salio mal')
        }
    },2000)
})


