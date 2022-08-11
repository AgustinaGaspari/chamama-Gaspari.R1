
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {Routes, Route} from "react-router-dom";
import CartProvider from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting= 'BIENVENIDO A TIENDA CHAMAMA - REINVENTANDO LA BASURA'/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/category/:category" element={<ItemListContainer/>} />
            <Route path="*" element={<ItemListContainer/>} />
            <Route path='/cart' element={<h1>Mi Carrito</h1>} />
          </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;


