import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/myFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks'

function App() {
  return (
    <div className="App">
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
      <MyNav/>
      <Welcome/>
      <AllTheBooks/>
      <MyFooter/>
    </div>
  );
}

export default App;
