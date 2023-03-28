import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import AllProducts from './AllProducts';
import Home from './Home'
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Login from './Login';
import NotFound from './NotFound'
import Register from './Register'

const Navbar = () => {
  return (
    <Router>
        <nav>
          <Link to='/shop' >Shop</Link>
          <Link to='/' >Home</Link>
          <Link to='/login' >Login</Link>
          <Link to='/cart' >Cart</Link>
        </nav>
      <Routes>
        <Route path="/shop" element={<AllProducts/>} />
        <Route path="/product" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default Navbar;
