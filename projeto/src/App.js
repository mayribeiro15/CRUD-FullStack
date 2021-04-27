import './App.css';
import Header from './Header';
import Home from './Pages/Home';
import Produtos from './Pages/Produtos';
import Estoque from './Pages/Estoque';
import Listagem from './Pages/Listagem';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/produtos" exact component={Produtos}/>
          <Route path="/estoque" exact component={Estoque}/>
          <Route path="/listagem" exact component={Listagem}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
