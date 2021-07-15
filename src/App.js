import logo from './logo.svg';
import './App.css';
import './css/style.css'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Product from './Components/Pages/Product';
import Categories from './Components/Pages/Categories';
import ItemDetail from './Components/Pages/ItemDetail';
import Cart from './Components/Pages/Cart'
function App() {
  return (
    
      <Router>
        <Navbar/>
        <div className="App flex">
        
        <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/Productos'} exact component={Product}/>
        <Route path={'/Productos/Categoria/:categoriaID'} exact component={Categories}/>
        <Route path={'/Productos/Detalle/:itemID'} exact component={ItemDetail}/>
        <Route path={'/Carrito'} exact component={Cart}/>
      
        </Switch>
        </div> 
      </Router>
     
  );
}

export default App;
