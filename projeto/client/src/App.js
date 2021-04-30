import './App.css';
import Header from './Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import ProdutosAlterar from './pages/ProdutosAlterar';
import Estoque from './pages/Estoque';
import Listagem from './pages/Listagem';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/produtos" exact component={Produtos}/>
          <Route path="/produtos/alterar/:idProduto" exact component={ProdutosAlterar}/>
          <Route path="/estoque" exact component={Estoque}/>
          <Route path="/listagem" exact component={Listagem}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
