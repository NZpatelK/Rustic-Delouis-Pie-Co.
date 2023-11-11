import { Routes, Route } from "react-router-dom"
import './App.css';
import PieProducts from './Components/PieProduct';
import Cart from "./Components/Cart";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="pieProducts" element={ <PieProducts/> } />
        <Route path="cart" element={ <Cart/> } />
      </Routes>
    </div>
  );
}

export default App;
