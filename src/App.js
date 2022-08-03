
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {Routes, Route} from "react-router-dom";
import CardWidget from './components/CardWidget';


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting= 'BIENVENIDO A TIENDA CHAMAMA - REINVENTANDO LA BASURA'/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/category/:category" element={<ItemListContainer/>} />
        <Route path="*" element={<ItemListContainer/>} />
      </Routes>
    </div>
  );
}

export default App;


