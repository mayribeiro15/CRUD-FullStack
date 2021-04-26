import './App.css';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact from="/" render={props => <Home {...props}/>}/>
          <Route exact from="/produtos" render={props => <Produtos {...props}/>}/>
          <Route exact from="/estoque" render={props => <Home {...props}/>}/>
          <Route exact from="/listagem" render={props => <Home {...props}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
