import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import AllProducts from './AllProducts';
import Home from './Home'
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Login from './Login';
import NotFound from './NotFound'
import Register from './Register'

import { logoutUser } from '../redux/reducers/usersSlice';

const Navbar = () => {

  const dispatch = useDispatch()

  const loggedInUser = useSelector((state) => state.users.loggedInUser)

  const handleSignOut = () => {
    dispatch(logoutUser())
  }

  return (
    <Router>
        <nav>
          <Link to='/shop' >Shop</Link>
          <Link to='/' >Home</Link>
          <Link to='/cart' >Cart</Link>
          { loggedInUser.refreshToken && <Link to='/settings' >Settings</Link>}

          {/* TODO: dispatch a log out thunk here */}
          { loggedInUser.refreshToken ? <Link onClick={handleSignOut} >Sign Out</Link> : <Link to='/login' >Sign In</Link>}
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
