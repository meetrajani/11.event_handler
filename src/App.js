import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage';
import Signuppage from './components/Signuppage';
import MedicineComponent from './components/MedicineComponent';
import { Routes,Route, Link } from 'react-router-dom';
import InventoryForm from './components/InventoryForm';
import MedicineList from './components/MedicineList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='Signin/' element={<Loginpage/>}></Route>
        <Route path='/' element={<Signuppage/>}></Route>
        <Route path='MedicineComponent/' element={<MedicineComponent/>}></Route>
        <Route path='InventoryForm/' element={<InventoryForm/>}></Route>
        <Route path='MedicineList/' element={<MedicineList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
