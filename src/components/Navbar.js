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
import { clearCart } from "../redux/reducers/cartSlice";

import { StyledPageContainer } from "../styles/PageContainer.styles";
import { StyledNavbar } from "../styles/Navbar.styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

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
    dispatch(clearCart());
  };

  return (
    <Router>
      <StyledNavbar>
        <div className="leftNav">
          <Link to="/" className="logo">
            Home
          </Link>
          <Link to="/shop">Shop</Link>
          {loggedIn && <Link to="/settings">Settings</Link>}
          {loggedIn ? (
            <Link onClick={handleSignOut}>Sign Out</Link>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </div>
        <div className="rightNav">
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        </div>
      </StyledNavbar>
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
