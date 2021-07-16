import './App.css';
import './css/style.css'
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Product from './Components/Pages/Product';
import Categories from './Components/Pages/Categories';
import ItemDetail from './Components/Pages/ItemDetail';
import Cart from './Components/Pages/Cart';
/**INSTALAR EL ROUTER
 * nos colocamos en nuestra carpeta de aplicacion
 * abrimos la consola de comandos
 * y escribimos el comando
 * npm i react-router-dom 
 * https://reactrouter.com/web/guides/quick-start
 */
/** IMPORTAMOS EL ROUTER
 * BrowserRouter as Router es una forma de darle un nombre mas corto para implementar
 * Los componentes que usen Link para poder guiarlos a la ruta de 
 * nuestro Switch siempre deben estar dentro del router
 * como se ve en el ejemplo con Navbar
 */
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
      <Router>
        <Navbar/>
        <div className="App flex">
          {/* Switch posee todas nuestras rutas 
          incluyendo los URL params que deberian recibir cada una */}
        <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/Productos'} exact component={Product}/>
        <Route path={'/Productos/Categoria/:categoriaID'} exact component={Categories}/>
        {/**una Route puede recibir tantos params como veamos convenientes */}
        <Route path={'/Detalle/:itemName/:itemID'} exact component={ItemDetail}/>
        <Route path={'/Carrito'} exact component={Cart}/>
        </Switch>
        </div> 
      </Router>
     
  );
}

export default App;
