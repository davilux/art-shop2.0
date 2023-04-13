import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/reducers/productsSlice";
import { v4 as uuidv4 } from "uuid";
import ProductCard from "./ProductCard";
import { StyledProductCardContainer } from "../styles/ProductCardContainer.styles";
import { StyledProductCard } from "../styles/ProductCard.styles";

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status !== "succeeded") {
      dispatch(getAllProducts());
    }
  }, [status, dispatch]);

  return (
    <>
      <h1>All products</h1>
      <StyledProductCardContainer>
        {allProducts.map((product) => (
          <StyledProductCard className="card" key={uuidv4()}>
            <ProductCard product={product} />
          </StyledProductCard>
        ))}
      </StyledProductCardContainer>
    </>
  );
};

export default AllProducts;
