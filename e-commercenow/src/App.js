
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';

function App() {
  return (
    //JSX
    <div className="App">
      <NavBar />
        <div className='title-up'>
        STYLE SHOP
        </div>
        <div className='general-container'>
          <CardList />
        </div>
    </div>
  );
}

export default App;
