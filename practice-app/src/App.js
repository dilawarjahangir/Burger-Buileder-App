import './App.css';
import './index.css'; 

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {loadUser } from "./redux/actions/user";
import store from "./redux/store.js"

import HomePage from './Pages/HomePage';
import OrderPage from './Pages/OrderPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import { useEffect } from 'react';
import CheckoutPage from './Pages/CheckoutPage.jsx';

function App() {
  
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  
  return (
   
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
