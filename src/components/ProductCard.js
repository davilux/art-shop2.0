import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <h1>{product.name}</h1>
      <Link to={`/products/${product.id}`}>
        <img src={product.photoUrl} alt="default product"></img>
      </Link>

      {product.quantityInStock > 0 && <button>Add to Cart</button>}
      <p>{product.quantityInStock ? product.price : "Out of stock"}</p>
    </>
  );
};

export default ProductCard;
