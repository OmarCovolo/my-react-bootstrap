import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/myFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks'

import BooKlist from './components/BookList';
import fantasy from './books/fantasy.json'

function App() {
  return (
    <div className="App">

      <MyNav/>
      <Welcome/>
      
    <div>
      <BooKlist books={fantasy}/>
      <AllTheBooks/>
    </div>
      <MyFooter/>
    </div>
  );
}

export default App;
