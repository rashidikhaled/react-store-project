import React from "react";
import { useProducts } from "../context/ProductContext";

const ProductsPage = () => {
  const products = useProducts();
  return <div>ProductsPage1</div>;
};

export default ProductsPage;
