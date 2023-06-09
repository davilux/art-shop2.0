import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/reducers/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.loggedInUser);

  const isLoggedIn = user.id >= 0;

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCart(user.id));
    }
  }, [isLoggedIn, dispatch]);

  const cart = useSelector((state) => state.cart.items);
  return (
    <>
      <h1>Cart</h1>
      {cart.map((item) => (
        <li key={item.id}>
          {item.product.name} Quantity: {item.quantity} Price each:{" "}
          {item.product.price} Total:{" "}
          {Number(item.product.price) * item.quantity}
        </li>
      ))}
    </>
  );
};

export default Cart;
