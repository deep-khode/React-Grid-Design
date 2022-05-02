import logo from './logo.svg';
import './App.css';
import Header from './Components/header'
import Cards from './Components/cards';
import Filter from './Components/filter'

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Cards />
    </div>
  );
}

export default App;
