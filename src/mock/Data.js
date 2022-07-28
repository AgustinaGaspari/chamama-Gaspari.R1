

const productos = [
    {id:'01', name: 'Bolsotote', price: 4500, stock: 10, img:'./img/BolsoBlackout.png'},
    {id:'02', name: 'Mochila', price: 5000, stock: 10, img: '/img/mochila.png'},
    {id:'03', name: 'Billetera S', price: 1500, stock: 20, img:'/img/BilleteraBlackoutChica.png'},
    {id:'04', name: 'Billetera G', price: 2000, stock: 20, img:'/img/BilleteraBlackoutGrande.png'},
    {id:'05', name: 'Bandolera', price: 3500, stock: 10, img:'/img/bandolera.png'},
    {id:'06', name: 'Riñonera S', price: 3000, stock: 20, img:'/img/riñonera3.png'},
    {id:'07', name: 'Riñonera G', price: 3500, stock: 15, img:'/img/Riñonera.png'},
    {id:'08', name: 'Tabaquera', price: 2500, stock: 5, img:'/img/TabaqueraCamara.png'}
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


