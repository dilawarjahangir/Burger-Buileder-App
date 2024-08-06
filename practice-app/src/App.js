import './App.css';
import './index.css'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import OrderPage from './Pages/OrderPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
