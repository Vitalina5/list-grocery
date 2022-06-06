
import './App.css';
import { GroceryList } from './GroceryList';
import imageOne from './shop.jpg';
import imageTwo from './grocery.jpg';

function App() {
  return (
    <div className='app'>
    <div className='container'>
      <img src={imageOne} alt="shopping" width='250px' height='230px'/>
    </div>
    <div className='container'>
      <h1>Grocery List</h1>
    </div>
      <GroceryList />
    <div className='container'>
      <img src={imageTwo} alt="shopping" width='250px'  height='230px'/>
    </div>
    </div>
  );
}

export default App;
