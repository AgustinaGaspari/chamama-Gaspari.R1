
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>CHAMAMA</h1>
        <NavBar/>
        <ItemListContainer greeting= 'BIENVENIDO A TIENDA CHAMAMA - REINVENTANDO LA BASURA'/>
        <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;


