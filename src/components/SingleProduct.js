import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../redux/reducers/productsSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{product.name}</h1>

      <img src={product.photoUrl} alt="default product"></img>

      {product.quantityInStock > 0 && <button>Add to Cart</button>}
      <p>{product.price}</p>
      <p>
        {product.quantityInStock
          ? `${product.quantityInStock} in stock!`
          : "Out of stock"}
      </p>
      <p>{product.description}</p>
    </>
  );
};

export default SingleProduct;
