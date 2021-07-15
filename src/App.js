import logo from './logo.svg';
import './App.css';
import './css/style.css'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Product from './Components/Pages/Product';
import Categories from './Components/Pages/Categories';
import ItemDetail from './Components/Pages/ItemDetail';
import Cart from './Components/Pages/Cart';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/Productos'} exact component={Product}/>
        <Route path={'/Productos/Categoria/:categoriaID'} exact component={Categories}/>
        <Route path={'/Productos/Detalle/:itemID'} exact component={ItemDetail}/>
        <Route path={'/Carrito'} exact component={Cart}/>
      </header>
        </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;
