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
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setLoggedIn(!!loggedInUser.refreshToken);
  }, [loggedInUser]);

  const handleSignOut = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  const closeMobileMenu = () => {
    if (window.innerWidth < 641) {
      setShowLinks(false);
    }
  };

  return (
    <Router>
      <StyledNavbar>
        <div className="menuBar">
          <Link to="/" className="logo">
            Home
          </Link>
          <Link className="mobileMenuIcon" onClick={toggleMobileMenu}>
            <MenuIcon />
          </Link>
        </div>
        <ul className={showLinks ? "show hiddenLinks" : "hiddenLinks"}>
          <Link to="/shop" onClick={closeMobileMenu}>
            Shop
          </Link>
          {loggedIn && (
            <Link to="/settings" onClick={closeMobileMenu}>
              Settings
            </Link>
          )}
          {loggedIn ? (
            <Link onClick={handleSignOut}>Sign Out</Link>
          ) : (
            <Link to="/login" onClick={closeMobileMenu}>
              Sign In
            </Link>
          )}
          <Link to="/cart" onClick={closeMobileMenu}>
            <ShoppingCartIcon />
          </Link>
        </ul>
      </StyledNavbar>
      <StyledPageContainer>
        <Routes>
          <Route path="/shop" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />
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
