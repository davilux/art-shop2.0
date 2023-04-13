import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <>
      <h1>{product.name}</h1>

      <img src={product.photoUrl} alt="default product"></img>

      {product.quantityInStock > 0 && <button>Add to Cart</button>}
      <p>{product.quantityInStock ? product.price : "Out of stock"}</p>
    </>
  );
};

export default SingleProduct;
