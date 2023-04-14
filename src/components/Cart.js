import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/reducers/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const status = useSelector((state) => state.users.status);
  const user = useSelector((state) => state.users.loggedInUser);

  useEffect(() => {
    if (status === "succeeded") {
      dispatch(getCart(user.id));
    }
  }, [status, dispatch]);

  return <h1>Cart</h1>;
};

export default Cart;
