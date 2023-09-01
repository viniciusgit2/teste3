import logo from './logo.svg';
import './App.css';
import Calculadora from './calc/Calculadora'
import Menu from './navegação/Menu';
import Content from './navegação/Content';
import { BrowserRouter } from 'react-router-dom';
import Aleatorio from './componentes/Aleatorio'
import Contador from './componentes/Contadador';
import About from './navegação/About';
function App() {
  return (
    <div className="App">
      <Contador/>
      <Aleatorio></Aleatorio>
      <BrowserRouter>
      <Menu></Menu>
      <About/>
      </BrowserRouter>
      <Calculadora></Calculadora>
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
      </header>
    </div>
  );
}

export default App;
