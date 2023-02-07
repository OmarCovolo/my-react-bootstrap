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

      <MyNav/>
      <Welcome/>
    <div>
      <AllTheBooks/>
      </div>
      <MyFooter/>
    </div>
  );
}

export default App;
