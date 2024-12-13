import React from "react";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import Card from "../components/Card";
const ProductsPage = () => {
  const products = useProducts();

  return (
    <div className={styles?.container}>
      <div className={styles.products}>
        {products.map((product) => (
          <Card key={product?.id} data={product} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
};

export default ProductsPage;
