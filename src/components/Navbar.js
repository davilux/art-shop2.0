import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AllProducts from "./AllProducts";
import Home from "./Home";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Login from "./Login";
import NotFound from "./NotFound";
import Register from "./Register";

import { logoutUser } from "../redux/reducers/usersSlice";

import { StyledPageContainer } from "../styles/PageContainer.styles";

const Navbar = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedInUser.refreshToken) setLoggedIn(true);
    else setLoggedIn(false);
  }, [loggedInUser]);

  const handleSignOut = () => {
    dispatch(logoutUser());
  };

  return (
    <Router>
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        {loggedIn && <Link to="/settings">Settings</Link>}
        {loggedIn ? (
          <Link onClick={handleSignOut}>Sign Out</Link>
        ) : (
          <Link to="/login">Sign In</Link>
        )}
      </nav>
      <StyledPageContainer>
        <Routes>
          <Route path="/shop" element={<AllProducts />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </StyledPageContainer>
    </Router>
  );
};

export default Navbar;
