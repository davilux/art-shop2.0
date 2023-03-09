import React from 'react'

const SingleProduct = ({product}) => {
  return (
    <>
      <h1>{product.name}</h1>

      <img src={product.photoUrl} alt="default product"></img>

      {product.quantityInStock > 0 && <button>Add to Cart</button>}
      <p>{product.price}</p>
      <p>{product.quantityInStock ? `${product.quantityInStock} in stock!` : 'Out of stock' }</p>
      <p>{product.description}</p>
    </>
  )
}

export default SingleProduct
