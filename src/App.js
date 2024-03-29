import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {Routes, Route} from "react-router-dom";
import CartProvider from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting= 'BIENVENIDO A TIENDA CHAMAMA - REINVENTANDO LA BASURA'/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/category/:id" element={<ItemListContainer/>} />
            <Route path="*" element={<ItemListContainer/>} />
            <Route path='/cart' element={<CartContainer/>} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;


