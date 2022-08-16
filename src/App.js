import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from './CartContext';
import { Cart } from './components/Cart/Cart';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Products from './components/Products/Products';

const App = () => {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;

