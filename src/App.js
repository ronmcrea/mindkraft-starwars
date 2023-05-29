import './App.css';
import { Home } from './components/pages/Home';
import { Routes, Route } from "react-router-dom"
import { Register } from './components/pages/Register';
import Boat from './components/pages/Boat';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="register" element={<Register/>}/>
        <Route path="boat" element={<Boat/>}/>
      </Routes>
    </div>
  );
}

export default App;
